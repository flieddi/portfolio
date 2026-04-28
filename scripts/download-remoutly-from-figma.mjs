#!/usr/bin/env node
/**
 * Remoutly case — Figma frame 1297:2754 → public/images/remoutly/
 * Dumps TEXT nodes to stdout and exports RECTANGLE/FRAME nodes that look like screenshots
 * (fills with IMAGE or large solid frames — tune FILTER below).
 *
 * Token: FIGMA_ACCESS_TOKEN or ~/.cursor/mcp.json Framelink MCP --figma-api-key=...
 *
 * Usage:
 *   node scripts/download-remoutly-from-figma.mjs
 *   node scripts/download-remoutly-from-figma.mjs --text-only   # print text tree, no downloads
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/images/remoutly");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";
const ROOT_NODE = "1297:2754";

const textOnly = process.argv.includes("--text-only");

function resolveToken() {
  if (process.env.FIGMA_ACCESS_TOKEN?.trim()) return process.env.FIGMA_ACCESS_TOKEN.trim();
  try {
    const mcpPath = join(process.env.HOME || "", ".cursor/mcp.json");
    const raw = readFileSync(mcpPath, "utf8");
    const mcp = JSON.parse(raw);
    const args = mcp?.mcpServers?.["Framelink MCP for Figma"]?.args;
    if (!Array.isArray(args)) return null;
    const keyArg = args.find((a) => String(a).startsWith("--figma-api-key="));
    if (!keyArg) return null;
    return keyArg.slice("--figma-api-key=".length).trim();
  } catch {
    return null;
  }
}

/** @param {unknown} n */
function walkText(n, path, out) {
  if (!n || typeof n !== "object") return;
  const node = /** @type {Record<string, unknown>} */ (n);
  const name = typeof node.name === "string" ? node.name : "";
  const type = typeof node.type === "string" ? node.type : "";
  const id = typeof node.id === "string" ? node.id : "";
  const p = path ? `${path} / ${name}` : name;

  if (type === "TEXT" && typeof node.characters === "string") {
    out.push({ id, path: p, text: node.characters });
  }
  const children = node.children;
  if (Array.isArray(children)) {
    for (const c of children) walkText(c, p, out);
  }
}

/** @param {unknown} fills */
function hasImageFill(fills) {
  if (!Array.isArray(fills)) return false;
  return fills.some((f) => {
    if (!f || typeof f !== "object") return false;
    const o = /** @type {Record<string, unknown>} */ (f);
    if (o.visible === false) return false;
    return o.type === "IMAGE";
  });
}

/** Nodes with bitmap image fills (match design exports, not every frame). */
function walkRasterNodes(n, path, out) {
  if (!n || typeof n !== "object") return;
  const node = /** @type {Record<string, unknown>} */ (n);
  const name = typeof node.name === "string" ? node.name : "";
  const type = typeof node.type === "string" ? node.type : "";
  const id = typeof node.id === "string" ? node.id : "";
  const p = path ? `${path} / ${name}` : name;

  if (id && hasImageFill(node.fills)) {
    out.push({ id, path: p, type });
  }
  const children = node.children;
  if (Array.isArray(children)) {
    for (const c of children) walkRasterNodes(c, p, out);
  }
}

function slug(s) {
  return s
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60)
    .toLowerCase() || "node";
}

async function main() {
  const token = resolveToken();
  if (!token) {
    console.error("Missing FIGMA_ACCESS_TOKEN and could not read key from ~/.cursor/mcp.json");
    process.exit(1);
  }

  const url = new URL(`https://api.figma.com/v1/files/${FILE_KEY}/nodes`);
  url.searchParams.set("ids", ROOT_NODE);
  url.searchParams.set("depth", "12");

  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    console.error("Figma nodes API error:", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const doc = data?.nodes?.[ROOT_NODE]?.document;
  if (!doc) {
    console.error("No document for node", ROOT_NODE);
    process.exit(1);
  }

  const texts = [];
  walkText(doc, "", texts);
  console.log("--- TEXT NODES (copy into remoutly-figma-text.ts) ---\n");
  for (const t of texts) {
    console.log(JSON.stringify(t));
  }

  const rasters = [];
  walkRasterNodes(doc, "", rasters);
  console.log("\n--- RASTER CANDIDATES", rasters.length, "---\n");

  if (textOnly) process.exit(0);

  mkdirSync(OUT_DIR, { recursive: true });

  const seen = new Set();
  const nodes = [];
  for (const r of rasters) {
    const base = slug(r.path.replace(/\s*\/\s*/g, "__"));
    let file = `${base}.png`;
    let n = 1;
    while (seen.has(file)) {
      file = `${base}-${n++}.png`;
    }
    seen.add(file);
    nodes.push({ id: r.id, file });
  }

  if (nodes.length === 0) {
    console.error("No raster candidates found; increase depth or adjust walkRasterNodes.");
    process.exit(1);
  }

  const ids = nodes.map((n) => n.id).join(",");
  const imgUrl = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
  imgUrl.searchParams.set("ids", ids);
  imgUrl.searchParams.set("format", "png");
  imgUrl.searchParams.set("scale", "2");

  const imgRes = await fetch(imgUrl, { headers: { "X-Figma-Token": token } });
  if (!imgRes.ok) {
    console.error("Figma images API error:", imgRes.status, await imgRes.text());
    process.exit(1);
  }
  const imgData = await imgRes.json();
  const map = imgData.images || {};

  const lines = ["export const remoutlyImages = {"];
  for (const { id, file } of nodes) {
    const u = map[id];
    if (!u) {
      console.error("No URL for", id, file);
      process.exit(1);
    }
    const r = await fetch(u);
    if (!r.ok) {
      console.error("Download failed", file, r.status);
      process.exit(1);
    }
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(join(OUT_DIR, file), buf);
    const key = file.replace(/\.png$/i, "").replace(/[^a-zA-Z0-9_]/g, "_");
    lines.push(`  ${key}: "/images/remoutly/${file}",`);
    console.log("Wrote", file, buf.length);
  }
  lines.push("} as const;\n");
  const outTs = join(ROOT, "src/lib/remoutly-images.generated.ts");
  writeFileSync(outTs, lines.join("\n"));
  console.log("\nWrote", outTs, "- review keys and merge into remoutly-images.ts");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

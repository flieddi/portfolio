#!/usr/bin/env node
/**
 * Sync Remoutly case from Figma frame 1297:2754 (file kPL2Y5w67mVwrzo1iwaHkb).
 *
 * 1) GET /v1/files/.../nodes — writes src/data/remoutly-frame.document.json (document subtree only)
 * 2) Walk for nodes with IMAGE fill — GET /v1/images — downloads PNGs to public/images/remoutly/figma-{id}.png
 *
 * Token: FIGMA_ACCESS_TOKEN or ~/.cursor/mcp.json Framelink --figma-api-key=...
 *
 *   npm run sync:remoutly
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, "src/data");
const OUT_DOC = join(DATA_DIR, "remoutly-frame.document.json");
const IMG_DIR = join(ROOT, "public/images/remoutly");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";
const FRAME_ID = "1297:2754";

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

/** @param {unknown} n @param {string[]} out */
function collectImageNodeIds(n, out) {
  if (!n || typeof n !== "object") return;
  const node = /** @type {Record<string, unknown>} */ (n);
  const id = typeof node.id === "string" ? node.id : "";
  const type = typeof node.type === "string" ? node.type : "";
  if (id && hasImageFill(node.fills)) out.push(id);
  const children = node.children;
  if (Array.isArray(children)) for (const c of children) collectImageNodeIds(c, out);
}

async function main() {
  const token = resolveToken();
  if (!token) {
    console.error("Missing FIGMA_ACCESS_TOKEN and could not read key from ~/.cursor/mcp.json");
    process.exit(1);
  }

  const url = new URL(`https://api.figma.com/v1/files/${FILE_KEY}/nodes`);
  url.searchParams.set("ids", FRAME_ID);
  url.searchParams.set("depth", "20");

  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    console.error("Figma nodes API error:", res.status, await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const doc = data?.nodes?.[FRAME_ID]?.document;
  if (!doc) {
    console.error("No document for node", FRAME_ID);
    process.exit(1);
  }

  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(OUT_DOC, JSON.stringify(doc), "utf8");
  console.log("Wrote", OUT_DOC);

  const imageIds = [];
  collectImageNodeIds(doc, imageIds);
  const unique = [...new Set(imageIds)];
  console.log("IMAGE nodes:", unique.length);

  if (unique.length === 0) {
    console.log("No image fills found under frame.");
    return;
  }

  mkdirSync(IMG_DIR, { recursive: true });

  const chunk = 40;
  for (let i = 0; i < unique.length; i += chunk) {
    const batch = unique.slice(i, i + chunk);
    const imgUrl = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
    imgUrl.searchParams.set("ids", batch.join(","));
    imgUrl.searchParams.set("format", "png");
    imgUrl.searchParams.set("scale", "2");

    const imgRes = await fetch(imgUrl, { headers: { "X-Figma-Token": token } });
    if (!imgRes.ok) {
      console.error("Figma images API error:", imgRes.status, await imgRes.text());
      process.exit(1);
    }
    const imgData = await imgRes.json();
    const map = imgData.images || {};
    for (const id of batch) {
      const u = map[id];
      if (!u) {
        console.error("No image URL for", id);
        process.exit(1);
      }
      const r = await fetch(u);
      if (!r.ok) {
        console.error("Download failed", id, r.status);
        process.exit(1);
      }
      const buf = Buffer.from(await r.arrayBuffer());
      const safe = id.replace(/:/g, "-");
      const file = join(IMG_DIR, `figma-${safe}.png`);
      writeFileSync(file, buf);
      console.log("Wrote", file, buf.length);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

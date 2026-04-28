#!/usr/bin/env node
/**
 * Dump every TEXT node under Remoutly case frame 1297:2754 with exact `characters`
 * (byte-for-byte what Figma returns — line breaks U+2028, NBSP, etc. preserved in JSON).
 *
 * Requires FIGMA_ACCESS_TOKEN or Framelink key in ~/.cursor/mcp.json (see download-zukko-from-figma.mjs).
 *
 *   node scripts/export-remoutly-figma-text.mjs
 *
 * Output: src/data/remoutly-figma-text-raw.json
 * Map each row into src/lib/remoutly-figma-text.ts exports (symbol-by-symbol), or paste from Figma Dev Mode.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_JSON = join(ROOT, "src/data/remoutly-figma-text-raw.json");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";
const ROOT_NODE = "1297:2754";

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

/** @param {unknown} n @param {string} path @param {{id:string,path:string,characters:string}[]} out */
function walkText(n, path, out) {
  if (!n || typeof n !== "object") return;
  const node = /** @type {Record<string, unknown>} */ (n);
  const name = typeof node.name === "string" ? node.name : "";
  const type = typeof node.type === "string" ? node.type : "";
  const id = typeof node.id === "string" ? node.id : "";
  const p = path ? `${path} / ${name}` : name;
  if (type === "TEXT" && typeof node.characters === "string") {
    out.push({ id, path: p, characters: node.characters });
  }
  const children = node.children;
  if (Array.isArray(children)) {
    for (const c of children) walkText(c, p, out);
  }
}

async function main() {
  const token = resolveToken();
  if (!token) {
    console.error("Missing FIGMA_ACCESS_TOKEN and could not read key from ~/.cursor/mcp.json");
    process.exit(1);
  }

  const url = new URL(`https://api.figma.com/v1/files/${FILE_KEY}/nodes`);
  url.searchParams.set("ids", ROOT_NODE);
  url.searchParams.set("depth", "15");

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

  const rows = [];
  walkText(doc, "", rows);

  mkdirSync(dirname(OUT_JSON), { recursive: true });
  writeFileSync(OUT_JSON, JSON.stringify(rows, null, 2), "utf8");
  console.log("Wrote", OUT_JSON, "—", rows.length, "TEXT nodes (exact characters).");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

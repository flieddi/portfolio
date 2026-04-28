#!/usr/bin/env node
/** Minimal export for До/После only (1351:4108 desktop + 1351:4115 / 1351:4113 mobile). */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public/images/zukko");
const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";

const NODES = [
  { id: "1351:4108", file: "zukko-before-desktop.png" },
  { id: "1351:4115", file: "zukko-after-1.png" },
  { id: "1351:4113", file: "zukko-after-2.png" },
];

function resolveToken() {
  if (process.env.FIGMA_ACCESS_TOKEN?.trim()) return process.env.FIGMA_ACCESS_TOKEN.trim();
  try {
    const mcpPath = join(process.env.HOME || "", ".cursor/mcp.json");
    const mcp = JSON.parse(readFileSync(mcpPath, "utf8"));
    const args = mcp?.mcpServers?.["Framelink MCP for Figma"]?.args;
    if (!Array.isArray(args)) return null;
    const keyArg = args.find((a) => String(a).startsWith("--figma-api-key="));
    return keyArg ? keyArg.slice("--figma-api-key=".length).trim() : null;
  } catch {
    return null;
  }
}

async function main() {
  const token = resolveToken();
  if (!token) {
    console.error("Missing FIGMA_ACCESS_TOKEN");
    process.exit(1);
  }
  mkdirSync(OUT, { recursive: true });
  const url = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
  url.searchParams.set("ids", NODES.map((n) => n.id).join(","));
  url.searchParams.set("format", "png");
  url.searchParams.set("scale", "2");
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    console.error(await res.text());
    process.exit(1);
  }
  const data = await res.json();
  if (data.err) {
    console.error(data.err);
    process.exit(1);
  }
  const map = data.images || {};
  for (const { id, file } of NODES) {
    const imgUrl = map[id];
    if (!imgUrl) {
      console.error("No URL for", id);
      process.exit(1);
    }
    const imgRes = await fetch(imgUrl);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    writeFileSync(join(OUT, file), buf);
    console.log("Wrote", file, buf.length);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

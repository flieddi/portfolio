#!/usr/bin/env node
/** Single export: Figma 1297:2706 → public/images/zukko/zukko-user-flow.png */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public/images/zukko/zukko-user-flow.png");
const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";

function resolveToken() {
  if (process.env.FIGMA_ACCESS_TOKEN?.trim()) return process.env.FIGMA_ACCESS_TOKEN.trim();
  try {
    const mcpPath = join(process.env.HOME || "", ".cursor/mcp.json");
    const mcp = JSON.parse(readFileSync(mcpPath, "utf8"));
    const args = mcp?.mcpServers?.["Framelink MCP for Figma"]?.args;
    const k = args?.find((a) => String(a).startsWith("--figma-api-key="));
    return k ? k.slice("--figma-api-key=".length).trim() : null;
  } catch {
    return null;
  }
}

const token = resolveToken();
if (!token) {
  console.error("Missing Figma token");
  process.exit(1);
}
mkdirSync(dirname(OUT), { recursive: true });
const url = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
url.searchParams.set("ids", "1297:2706");
url.searchParams.set("format", "png");
url.searchParams.set("scale", "2");

const res = await fetch(url, { headers: { "X-Figma-Token": token } });
const data = await res.json();
if (!res.ok || data.err) {
  console.error(data);
  process.exit(1);
}
const imgUrl = data.images?.["1297:2706"];
if (!imgUrl) {
  console.error("No image URL in response");
  process.exit(1);
}
const imgRes = await fetch(imgUrl);
if (!imgRes.ok) process.exit(1);
writeFileSync(OUT, Buffer.from(await imgRes.arrayBuffer()));
console.log("Wrote", OUT);

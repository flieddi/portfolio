#!/usr/bin/env node
/**
 * Downloads PNG exports for Uzum Bank case study nodes from Figma.
 * Token: FIGMA_ACCESS_TOKEN env, or ~/.cursor/mcp.json (Framelink --figma-api-key=...).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/images/uzum-bank");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";

/** Rectangle nodes — Main / Uzum Bank (1257:3472), order matches page sections */
const NODES = [
  { id: "1257:3481", file: "uzum-1.png" },
  { id: "1312:6450", file: "uzum-2.png" },
  { id: "1311:6445", file: "uzum-3.png" },
  { id: "1268:3581", file: "uzum-4.png" },
  { id: "1311:6447", file: "uzum-5.png" },
  { id: "1321:8074", file: "uzum-before-1.png" },
  { id: "1321:8076", file: "uzum-after-1.png" },
  { id: "1318:7799", file: "uzum-before-2.png" },
  { id: "1318:7802", file: "uzum-after-2.png" },
  { id: "1322:8118", file: "uzum-6.png" },
  { id: "1322:8095", file: "uzum-7.png" },
  { id: "1322:8124", file: "uzum-8.png" },
  { id: "1322:8115", file: "uzum-9.png" },
  { id: "1322:8104", file: "uzum-10.png" },
  { id: "1322:8127", file: "uzum-11.png" },
];

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

async function main() {
  const token = resolveToken();
  if (!token) {
    console.error("Missing FIGMA_ACCESS_TOKEN and could not read key from ~/.cursor/mcp.json");
    process.exit(1);
  }

  mkdirSync(OUT_DIR, { recursive: true });

  const ids = NODES.map((n) => n.id).join(",");
  const url = new URL(`https://api.figma.com/v1/images/${FILE_KEY}`);
  url.searchParams.set("ids", ids);
  url.searchParams.set("format", "png");
  url.searchParams.set("scale", "2");

  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    const t = await res.text();
    console.error("Figma images API error:", res.status, t);
    process.exit(1);
  }
  const data = await res.json();
  if (data.err) {
    console.error("Figma API err:", data.err);
    process.exit(1);
  }

  const map = data.images || {};
  for (const { id, file } of NODES) {
    const imgUrl = map[id];
    if (!imgUrl) {
      console.error("No URL for node", id, file);
      process.exit(1);
    }
    const imgRes = await fetch(imgUrl);
    if (!imgRes.ok) {
      console.error("Download failed", file, imgRes.status);
      process.exit(1);
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());
    writeFileSync(join(OUT_DIR, file), buf);
    console.log("Wrote", file, buf.length, "bytes");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

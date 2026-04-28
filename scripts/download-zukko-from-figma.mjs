#!/usr/bin/env node
/**
 * Zukko case — Figma frame 1275:666 → public/images/zukko/
 * Key nodes: 1339:3607 hero · 1297:2706 user flow · 1351:4108 До desktop · 1351:4115/1351:4113 После
 * Token: FIGMA_ACCESS_TOKEN or ~/.cursor/mcp.json Framelink MCP --figma-api-key=...
 */
import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/images/zukko");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";

/** Unique Figma node ids → output filenames */
const NODES = [
  { id: "1339:3607", file: "zukko-hero.png" },
  { id: "1347:3986", file: "zukko-profile-1.png" },
  { id: "1347:3992", file: "zukko-profile-2.png" },
  { id: "1347:3995", file: "zukko-profile-3.png" },
  { id: "1348:4043", file: "zukko-profile-4.png" },
  { id: "1348:4049", file: "zukko-profile-5.png" },
  { id: "1297:2706", file: "zukko-user-flow.png" },
  { id: "1347:3989", file: "zukko-settings-1.png" },
  { id: "1347:3998", file: "zukko-settings-2.png" },
  { id: "1349:4053", file: "zukko-settings-3.png" },
  { id: "1349:4056", file: "zukko-settings-4.png" },
  { id: "1349:4059", file: "zukko-settings-5.png" },
  { id: "1350:4075", file: "zukko-chat-1.png" },
  { id: "1350:4081", file: "zukko-chat-2.png" },
  { id: "1350:4078", file: "zukko-chat-3.png" },
  { id: "1350:4084", file: "zukko-chat-4.png" },
  { id: "1350:4087", file: "zukko-chat-5.png" },
  { id: "1351:4108", file: "zukko-before-desktop.png" },
  { id: "1351:4115", file: "zukko-after-1.png" },
  { id: "1351:4113", file: "zukko-after-2.png" },
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

  copyFileSync(join(OUT_DIR, "zukko-profile-2.png"), join(OUT_DIR, "zukko-editing.png"));
  console.log("Wrote zukko-editing.png (from profile-2)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

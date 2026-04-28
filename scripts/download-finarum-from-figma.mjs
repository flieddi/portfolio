#!/usr/bin/env node
/**
 * Downloads PNG exports for Finarum case study nodes from Figma.
 * Token: FIGMA_ACCESS_TOKEN env, or parsed from ~/.cursor/mcp.json (figma-developer-mcp --figma-api-key=...).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public/images/finarum");

const FILE_KEY = "kPL2Y5w67mVwrzo1iwaHkb";

/** Rectangle / frame nodes with bitmap fills — matches Main / Finarum (1240:2727) */
const NODES = [
  { id: "1356:4307", file: "hero-bg.png" },
  { id: "1361:4442", file: "patient-1.png" },
  { id: "1361:4445", file: "patient-2.png" },
  { id: "1361:4493", file: "patient-empty.png" },
  { id: "1361:4448", file: "patient-search.png" },
  { id: "1361:4456", file: "treatment-1.png" },
  { id: "1361:4490", file: "treatment-2.png" },
  { id: "1361:4459", file: "treatment-3.png" },
  { id: "1361:4478", file: "recipe-1.png" },
  { id: "1361:4487", file: "recipe-2.png" },
  { id: "1361:4481", file: "media-1.png" },
  { id: "1361:4484", file: "finance-1.png" },
  { id: "1361:4467", file: "finance-cashier.png" },
  { id: "1361:4470", file: "finance-pay.png" },
  { id: "1361:4473", file: "finance-bills.png" },
  { id: "1365:4562", file: "pos-do.png" },
  { id: "1364:4557", file: "pos-after.png" },
  { id: "1364:4549", file: "pos-clients.png" },
  { id: "1364:4538", file: "pos-payment.png" },
  { id: "1364:4552", file: "pos-history.png" },
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

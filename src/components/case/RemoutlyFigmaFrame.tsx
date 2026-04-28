import type { CSSProperties, ReactNode } from "react";

/** Subset of Figma REST node used for tree rendering (from remoutly-frame.document.json). */
export type FigmaDocNode = {
  id?: string;
  type?: string;
  name?: string;
  visible?: boolean;
  characters?: string;
  children?: FigmaDocNode[];
  layoutMode?: string;
  itemSpacing?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  primaryAxisAlignItems?: string;
  counterAxisAlignItems?: string;
  style?: Record<string, unknown>;
  fills?: unknown[];
};

const CONTAINER_TYPES = new Set([
  "FRAME",
  "GROUP",
  "COMPONENT",
  "INSTANCE",
  "SECTION",
  "COMPONENT_SET",
]);

function hasImageFill(fills: unknown): fills is { type: string }[] {
  if (!Array.isArray(fills)) return false;
  return fills.some((f) => {
    if (!f || typeof f !== "object") return false;
    const o = f as { visible?: boolean; type?: string };
    if (o.visible === false) return false;
    return o.type === "IMAGE";
  });
}

function solidTextColor(node: FigmaDocNode): string | undefined {
  const fills = node.fills;
  if (!Array.isArray(fills)) return undefined;
  const f = fills[0] as { visible?: boolean; type?: string; color?: { r: number; g: number; b: number; a?: number } };
  if (!f || f.visible === false || f.type !== "SOLID" || !f.color) return undefined;
  const { r, g, b, a } = f.color;
  return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${a ?? 1})`;
}

function textStyle(node: FigmaDocNode): CSSProperties {
  const s = node.style;
  const st: CSSProperties = {};
  if (!s) return st;
  if (typeof s.fontSize === "number") st.fontSize = s.fontSize;
  if (typeof s.fontWeight === "number") st.fontWeight = s.fontWeight;
  if (typeof s.lineHeightPx === "number") st.lineHeight = `${s.lineHeightPx}px`;
  if (typeof s.letterSpacing === "number") st.letterSpacing = `${s.letterSpacing}px`;
  const align = s.textAlignHorizontal;
  if (align === "RIGHT") st.textAlign = "right";
  else if (align === "CENTER") st.textAlign = "center";
  else st.textAlign = "left";
  const c = solidTextColor(node);
  if (c) st.color = c;
  return st;
}

function alignClass(primary?: string, counter?: string): string {
  const parts: string[] = [];
  if (primary === "CENTER") parts.push("justify-center");
  else if (primary === "MAX") parts.push("justify-end");
  else if (primary === "SPACE_BETWEEN") parts.push("justify-between");
  else parts.push("justify-start");
  if (counter === "CENTER") parts.push("items-center");
  else if (counter === "MAX") parts.push("items-end");
  else if (counter === "MIN") parts.push("items-start");
  else parts.push("items-stretch");
  return parts.join(" ");
}

function frameClassName(node: FigmaDocNode): string {
  const parts = ["flex", "w-full", "min-w-0"];
  const mode = node.layoutMode;
  if (mode === "HORIZONTAL") {
    parts.push("flex-row", "flex-nowrap");
  } else {
    parts.push("flex-col");
  }
  const sp = node.itemSpacing;
  if (typeof sp === "number" && sp > 0) parts.push(`gap-[${sp}px]`);
  const pl = node.paddingLeft ?? 0;
  const pr = node.paddingRight ?? 0;
  const pt = node.paddingTop ?? 0;
  const pb = node.paddingBottom ?? 0;
  if (pt || pr || pb || pl) {
    parts.push(`pt-[${pt}px]`, `pr-[${pr}px]`, `pb-[${pb}px]`, `pl-[${pl}px]`);
  }
  parts.push(alignClass(node.primaryAxisAlignItems, node.counterAxisAlignItems));
  return parts.join(" ");
}

function imageSrcForNode(node: FigmaDocNode): string | null {
  if (!hasImageFill(node.fills)) return null;
  const id = node.id?.replace(/:/g, "-");
  if (!id) return null;
  return `/images/remoutly/figma-${id}.png`;
}

function FigmaNodeView({ node }: { node: FigmaDocNode }): ReactNode {
  if (node.visible === false) return null;

  const t = node.type ?? "";

  if (t === "TEXT") {
    const raw = node.characters ?? "";
    return (
      <p className="w-full whitespace-pre-line" style={textStyle(node)}>
        {raw}
      </p>
    );
  }

  const imgSrc = imageSrcForNode(node);
  const imageLeafTypes = new Set(["RECTANGLE", "ELLIPSE", "VECTOR"]);
  if (imgSrc && imageLeafTypes.has(t)) {
    return (
      <div className="relative w-full shrink-0 overflow-hidden rounded-[26px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={imgSrc} className="h-auto w-full object-contain object-top" loading="lazy" decoding="async" />
      </div>
    );
  }

  if (CONTAINER_TYPES.has(t)) {
    const kids = node.children ?? [];
    if (kids.length === 0) return null;
    const layoutMode = node.layoutMode;
    const useFlex = layoutMode === "VERTICAL" || layoutMode === "HORIZONTAL";
    const cls = useFlex ? frameClassName(node) : "flex w-full min-w-0 flex-col gap-0";
    return (
      <div className={cls} data-figma-id={node.id} data-figma-name={node.name} data-figma-type={t}>
        {kids.map((child, i) => (
          <FigmaNodeView key={child.id ?? `${node.id}-${i}`} node={child} />
        ))}
      </div>
    );
  }

  return null;
}

/** Renders the Figma document node tree as React (order + grouping from JSON only). */
export function RemoutlyFigmaFrame({ document }: { document: FigmaDocNode }) {
  const kids = document.children ?? [];
  return (
    <main className="flex w-full flex-col items-stretch gap-0 px-5 pb-8 pt-0">
      {kids.map((child, i) => (
        <FigmaNodeView key={child.id ?? `root-${i}`} node={child} />
      ))}
    </main>
  );
}

import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Header } from "@/components/Header";
import { RemoutlyCaseStudy } from "@/components/case/RemoutlyCaseStudy";
import { RemoutlyFigmaFrame } from "@/components/case/RemoutlyFigmaFrame";
import type { FigmaDocNode } from "@/components/case/RemoutlyFigmaFrame";

export const metadata: Metadata = {
  title: "Remoutly — кейс",
  description:
    "Мобильное приложение для быстрого поиска и бронирования коворкингов",
};

const FIGMA_SNAPSHOT = join(process.cwd(), "src/data/remoutly-frame.document.json");

export default async function RemoutlyCasePage() {
  let document: FigmaDocNode | null = null;
  try {
    const raw = await readFile(FIGMA_SNAPSHOT, "utf8");
    document = JSON.parse(raw) as FigmaDocNode;
  } catch {
    document = null;
  }

  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-visible rounded-[62px] bg-white pt-5"
      >
        {document ? <RemoutlyFigmaFrame document={document} /> : <RemoutlyCaseStudy />}
      </div>
    </>
  );
}

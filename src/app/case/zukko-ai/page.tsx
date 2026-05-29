import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ZukkoAiCaseStudy } from "@/components/case/ZukkoAiCaseStudy";

export const metadata: Metadata = {
  title: "Zukko AI — кейс",
  description:
    "Стартап, который собирает лидов из всех каналов коммуникации в одном приложении",
};

export default function ZukkoAiCasePage() {
  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-visible rounded-[62px] bg-white pt-5"
      >
        <ZukkoAiCaseStudy />
      </div>
    </>
  );
}

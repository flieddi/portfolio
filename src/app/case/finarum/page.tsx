import type { Metadata } from "next";
import { FinarumCaseStudy } from "@/components/case/FinarumCaseStudy";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Finarum — кейс",
  description: "ERP и POS системы для стоматологии",
};

export default function FinarumCasePage() {
  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-visible rounded-[62px] bg-white pt-16"
      >
        <FinarumCaseStudy />
      </div>
    </>
  );
}

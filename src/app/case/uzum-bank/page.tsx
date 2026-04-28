import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { UzumBankCaseStudy } from "@/components/case/UzumBankCaseStudy";

export const metadata: Metadata = {
  title: "Uzum Bank — кейс",
  description: "Сценарий анализа фильтров",
};

export default function UzumBankCasePage() {
  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-visible rounded-[62px] bg-white pt-16"
      >
        <UzumBankCaseStudy />
      </div>
    </>
  );
}

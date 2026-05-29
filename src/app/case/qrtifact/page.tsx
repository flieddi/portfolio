import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { QRtifactCaseStudy } from "@/components/case/QRtifactCaseStudy";

export const metadata: Metadata = {
  title: "QRtifact — кейс",
  description: "Стартап в сфере туризма, это мобильное приложение для музеев",
};

export default function QRtifactCasePage() {
  return (
    <>
      <Header />
      <div
        id="top"
        className="relative mx-auto flex min-h-screen w-full max-w-[402px] flex-col items-center overflow-x-visible rounded-[62px] bg-white"
      >
        <QRtifactCaseStudy />
      </div>
    </>
  );
}

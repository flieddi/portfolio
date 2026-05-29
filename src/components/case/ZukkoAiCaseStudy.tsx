import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import {
  zukkoChat05,
  zukkoContext01,
  zukkoContribution,
  zukkoProfileIntro1,
  zukkoProfileIntro2,
  zukkoProfileIntro3,
  zukkoResult06,
  zukkoSettings04a,
  zukkoSettings04b,
  zukkoTask02,
  zukkoTitle01,
  zukkoTitle02,
  zukkoTitle03,
  zukkoTitle04,
  zukkoTitle05,
  zukkoTitle06,
  zukkoTitleDoAfter,
  zukkoTitleUserFlow,
  zukkoUserFlowBody,
} from "@/lib/zukko-figma-text";
import { zukkoImages } from "@/lib/zukko-images";
import { CaseHorizontalGallery } from "@/components/case/CaseHorizontalGallery";
import { CaseLabel, CaseTextBlock } from "@/components/case/CaseTextBlock";
import { CaseDesktopScreenshotCard } from "@/components/case/CaseDesktopScreenshotCard";
import { CasePhoneCard } from "@/components/case/CasePhoneCard";
import { CaseSection } from "@/components/case/CaseSection";
import { CaseTitle } from "@/components/case/CaseTitle";
import { ScrollToTopFab } from "@/components/case/ScrollToTopFab";
import { Footer } from "@/components/Footer";

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-[28px] shrink-0 items-center justify-center gap-1.5 rounded-[16px] bg-white px-1.5 py-1.5 text-center text-[12px] font-semibold leading-4 text-[#383838]">
      {children}
    </span>
  );
}

export function ZukkoAiCaseStudy() {
  return (
    <main className="flex w-full flex-col items-center gap-12 px-5 pb-8 pt-0">
      {/* Hero */}
      <div className="flex w-full max-w-[362px] flex-col gap-4 self-center">
        <div className="flex flex-col gap-1 self-stretch">
          <h1 className="text-left text-[18px] font-semibold leading-[1.3] text-[#383838]">
            Zukko AI
          </h1>
          <p className="text-left text-[16px] font-medium leading-5 text-[#9c9c9c]">
            Стартап, который собирает лидов из всех каналов коммуникации в одном приложении
          </p>
        </div>
        <div className="relative h-[200px] w-full max-w-[362px] overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={zukkoImages.heroBg}
            className="absolute inset-0 h-full w-full rounded-[26px] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute bottom-0 left-0 flex w-full max-w-[362px] flex-row items-center gap-2 p-3">
            <TagPill>startup</TagPill>
            <TagPill>B2B</TagPill>
            <TagPill>mobile</TagPill>
          </div>
        </div>
      </div>

      {/* Role / Team */}
      <CaseSection className="gap-4">
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Моя роль</CaseLabel>
          <CaseTextBlock>Junior Product Designer</CaseTextBlock>
        </div>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Команда</CaseLabel>
          <CaseTextBlock>2 Product Designers</CaseTextBlock>
          <CaseTextBlock>3 Enginers</CaseTextBlock>
          <CaseTextBlock>1 Manager</CaseTextBlock>
        </div>
      </CaseSection>

      {/* Чем я занимался */}
      <CaseSection className="gap-4">
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Чем я занимался</CaseLabel>
          <CaseTextBlock>{zukkoContribution}</CaseTextBlock>
        </div>
      </CaseSection>

      {/* 01 — Контекст и проблема */}
      <CaseSection className="gap-4">
        <CaseTitle>{zukkoTitle01}</CaseTitle>
        <CaseTextBlock>{zukkoContext01}</CaseTextBlock>
      </CaseSection>

      {/* 02 — Задача */}
      <CaseSection className="gap-4">
        <CaseTitle>{zukkoTitle02}</CaseTitle>
        <CaseTextBlock>{zukkoTask02}</CaseTextBlock>
      </CaseSection>

      {/* 03 — Раздел профиля */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>{zukkoTitle03}</CaseTitle>
        <CaseTextBlock>{zukkoProfileIntro1}</CaseTextBlock>
        <CaseTextBlock>{zukkoProfileIntro2}</CaseTextBlock>
        <CaseTextBlock>{zukkoProfileIntro3}</CaseTextBlock>

        <CaseHorizontalGallery>
          <CasePhoneCard src={zukkoImages.profile1} alt="" caption="Профиль" />
          <CasePhoneCard src={zukkoImages.profile2} alt="" caption="Редактирование" />
          <CasePhoneCard src={zukkoImages.profile3} alt="" caption="Каналы коммуникации" />
          <CasePhoneCard src={zukkoImages.profile4} alt="" caption="Темы" />
          <CasePhoneCard src={zukkoImages.profile5} alt="" caption="Темы" />
        </CaseHorizontalGallery>

      </CaseSection>

      {/* User Flow — label + body (Figma: small label #9E9E9E), then diagram 1297:2706 */}
      <CaseSection className="gap-0 self-stretch">
        <div className="flex flex-col gap-1 self-stretch">
          <p className="w-full text-left text-[14px] font-medium leading-5 text-[#9E9E9E]">
            {zukkoTitleUserFlow}
          </p>
          <CaseTextBlock>{zukkoUserFlowBody}</CaseTextBlock>
        </div>
        <div className="relative mt-4 w-full self-stretch overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={zukkoImages.userFlow}
            className="h-auto w-full rounded-[12px] object-contain object-top"
            loading="eager"
            decoding="async"
          />
        </div>
      </CaseSection>

      {/* 04 — Раздел настроек */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>{zukkoTitle04}</CaseTitle>
        <CaseTextBlock>{zukkoSettings04a}</CaseTextBlock>
        <CaseTextBlock>{zukkoSettings04b}</CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard src={zukkoImages.settings1} alt="" caption="Настройки" wide />
          <CasePhoneCard src={zukkoImages.settings2} alt="" caption="Атрибуты" wide />
          <CasePhoneCard src={zukkoImages.settings3} alt="" caption="Интеграции" wide />
          <CasePhoneCard src={zukkoImages.settings4} alt="" caption="SIP телефония" wide />
          <CasePhoneCard src={zukkoImages.settings5} alt="" caption="Шаблонные ответы" wide />
        </CaseHorizontalGallery>
      </CaseSection>

      {/* 05 — Раздел чата */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>{zukkoTitle05}</CaseTitle>
        <CaseTextBlock>{zukkoChat05}</CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard src={zukkoImages.chat1} alt="" caption="Голосовое сообщение" wide />
          <CasePhoneCard src={zukkoImages.chat2} alt="" caption="Отложить сообщение" wide />
          <CasePhoneCard src={zukkoImages.chat3} alt="" caption="Файлы" wide />
          <CasePhoneCard src={zukkoImages.chat4} alt="" caption="Доступ к файлам" wide />
          <CasePhoneCard src={zukkoImages.chat5} alt="" caption="Локация" wide />
        </CaseHorizontalGallery>
      </CaseSection>

      {/* 06 — Результат */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>{zukkoTitle06}</CaseTitle>
        <CaseTextBlock>{zukkoResult06}</CaseTextBlock>
      </CaseSection>

      {/* До/После — Figma: two separate horizontal strips; ① desktop 1351:4107, ② mobile 540×400 pair */}
      <CaseSection className="gap-2 self-stretch">
        <CaseTitle>{zukkoTitleDoAfter}</CaseTitle>
        <div className="flex min-w-0 flex-col gap-6 self-stretch">
          <CaseHorizontalGallery>
            <CaseDesktopScreenshotCard
              src={zukkoImages.desktop}
              alt=""
              caption="Настройки ДО"
            />
          </CaseHorizontalGallery>
          <CaseHorizontalGallery>
            <CasePhoneCard src={zukkoImages.after1} alt="" caption="Профиль ПОСЛЕ" />
            <CasePhoneCard src={zukkoImages.after2} alt="" caption="Профиль ПОСЛЕ" />
          </CaseHorizontalGallery>
        </div>
      </CaseSection>

      {/* Actions — предыдущий / следующий кейс */}
      <section className="flex w-full max-w-[402px] flex-col gap-2 self-center pt-12">
        <div className="flex w-full flex-row items-center justify-start gap-3 self-stretch">
          <p className="w-[175px] shrink-0 text-left text-[14px] font-medium leading-5 text-[#9c9c9c]">
            Предыдущий кейс
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-start gap-3 self-stretch">
          <Link
            href="/case/uzum-bank"
            className="relative flex w-[175px] flex-row items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[#f5f5f5] px-4 py-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[#515151]">
              Uzum Bank
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9C9C9C]" />
          </Link>
        </div>
      </section>

      <Footer />

      <ScrollToTopFab />
    </main>
  );
}

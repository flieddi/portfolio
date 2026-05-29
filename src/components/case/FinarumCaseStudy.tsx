import type { ReactNode } from "react";
import { finarumImages } from "@/lib/finarum-images";
import { CaseImageBlock } from "@/components/case/CaseImageBlock";
import { CaseLabel, CaseTextBlock } from "@/components/case/CaseTextBlock";
import { CaseHorizontalGallery } from "@/components/case/CaseHorizontalGallery";
import { CasePhoneCard } from "@/components/case/CasePhoneCard";
import { CaseSection } from "@/components/case/CaseSection";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import { CaseTitle } from "@/components/case/CaseTitle";
import { CaseWideScreenCard } from "@/components/case/CaseWideScreenCard";
import { ScrollToTopFab } from "@/components/case/ScrollToTopFab";
import { Footer } from "@/components/Footer";

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-[28px] shrink-0 items-center justify-center gap-1.5 rounded-[16px] bg-white px-1.5 py-1.5 text-center text-[12px] font-semibold leading-4 text-[#383838]">
      {children}
    </span>
  );
}

export function FinarumCaseStudy() {
  return (
    <main className="flex w-full flex-col items-center gap-12 px-5 pb-8 pt-0">
      {/* Hero — layout_VLYJIZ gap 16px */}
      <div className="flex w-full max-w-[362px] flex-col gap-4 self-center">
        <div className="flex flex-col gap-1 self-stretch">
          <h1 className="text-left text-[18px] font-semibold leading-[1.3] text-[#383838]">
            Finarum
          </h1>
          <p className="text-left text-[16px] font-medium leading-5 text-[#9c9c9c]">
            ERP и POS системы для стоматологии
          </p>
        </div>
        <div className="relative h-[232px] w-full max-w-[362px] overflow-hidden rounded-[26px]">
          <CaseImageBlock
            src={finarumImages.heroBg}
            alt=""
            width={362}
            height={232}
            className="absolute inset-0 h-full rounded-[26px]"
            priority
          />
          <div className="absolute bottom-0 left-0 flex w-full max-w-[362px] flex-row items-center gap-2 p-3">
            <TagPill>MedTech</TagPill>
            <TagPill>B2B</TagPill>
            <TagPill>ERP / POS</TagPill>
          </div>
        </div>
      </div>

      {/* 01 — ERP */}
      <CaseSection className="gap-4">
        <CaseTitle>01 — ERP система</CaseTitle>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Моя роль</CaseLabel>
          <CaseTextBlock>Junior Product Designer</CaseTextBlock>
        </div>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Команда</CaseLabel>
          <CaseTextBlock>2 Product Designers</CaseTextBlock>
          <CaseTextBlock>3 Engineers</CaseTextBlock>
          <CaseTextBlock>1 Manager</CaseTextBlock>
        </div>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Чем я занимался</CaseLabel>
          <CaseTextBlock>
            Отвечал за мобильную адаптацию ERP: модуль лечения и приёмов, финансы,
            рецепты и медиа, карточка пациента. Работал в паре с ещё одним дизайнером.
          </CaseTextBlock>
        </div>
      </CaseSection>

      {/* 02 — Контекст */}
      <CaseSection className="gap-4">
        <CaseTitle>02 — Контекст и проблема </CaseTitle>
        <CaseTextBlock>
          Стоматологические клиники работали в устаревшей ERP и отдельной POS-системе
          на Odoo — они визуально не совпадали и дублировали данные. Мобильной версии не
          существовало
        </CaseTextBlock>
        <CaseTextBlock>
          Задача — перепроектировать систему под мобильные устройства, объединить
          визуальный язык и упростить ключевые сценарии. Требования собирали через
          интервью с клиентом и анализ существующей системы
        </CaseTextBlock>
        <CaseTextBlock>
          Дизайн-система разрабатывалась командой. Представленные экраны — результат моей
          работы по проектированию модулей
        </CaseTextBlock>
      </CaseSection>

      {/* 03 — Ключевые решения */}
      <CaseSection className="gap-4">
        <CaseTitle>03 — Ключевые решения</CaseTitle>
        <CaseTextBlock>
          {`Карточка пациента
Вся информация о пациенте — лечение, финансы, рецепты, медиа — собрана в одном месте и доступна с телефона. Раньше врачу приходилось переключаться между разными разделами десктопной системы`}
        </CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard
            src={finarumImages.patient1}
            alt=""
            caption="Раздел пациента"
          />
          <CasePhoneCard
            src={finarumImages.patient2}
            alt=""
            caption="Добавление пациента"
          />
          <CasePhoneCard
            src={finarumImages.patientEmpty}
            alt=""
            caption="Обзор / Empty State"
          />
          <CasePhoneCard
            src={finarumImages.patientSearch}
            alt=""
            caption="Поиск пациента"
          />
        </CaseHorizontalGallery>

        <CaseTextBlock>
          {`Модуль лечения и приёмов
Спроектировал мобильный сценарий работы врача с приёмами: просмотр расписания, карточки визита и истории лечения без необходимости открывать десктоп`}
        </CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard
            src={finarumImages.treatment1}
            alt=""
            caption="Раздел приемы"
            wide
          />
          <CasePhoneCard
            src={finarumImages.treatment2}
            alt=""
            caption="Раздел лечения"
            wide
          />
          <CasePhoneCard
            src={finarumImages.treatment3}
            alt=""
            caption="Раздел лечения / процедуры"
            wide
          />
        </CaseHorizontalGallery>

        <CaseTextBlock>
          {`Рецепты и медиа
Блок для хранения и выдачи рецептов, а также медиафайлов по пациенту — рентген, снимки, доступно в рамках карточки`}
        </CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard src={finarumImages.recipe1} alt="" caption="Рецепты" wide />
          <CasePhoneCard src={finarumImages.recipe2} alt="" caption="Рецепты" wide />
          <CasePhoneCard src={finarumImages.media1} alt="" caption="Медиа" wide />
        </CaseHorizontalGallery>

        <CaseTextBlock>
          {`Финансы и Cashier
Адаптировал финансовый модуль под мобилку, врач и администратор могут видеть состояние счетов и платежи
прямо с телефона`}
        </CaseTextBlock>
        <CaseHorizontalGallery>
          <CasePhoneCard
            src={finarumImages.finance1}
            alt=""
            caption="Финансы"
            wide
          />
          <CasePhoneCard
            src={finarumImages.financeCashier}
            alt=""
            caption="Cashier"
            wide
          />
          <CasePhoneCard
            src={finarumImages.financePay}
            alt=""
            caption="Оплата"
            wide
          />
          <CasePhoneCard src={finarumImages.financeBills} alt="" caption="Счета" />
        </CaseHorizontalGallery>
      </CaseSection>

      {/* 04 — POS */}
      <CaseSection className="gap-2 self-stretch">
        <CaseTitle>04 — POS система для кассиров</CaseTitle>
        <CaseTextBlock>
          POS-модуль проектировался с нуля — отдельный сценарий для кассира. Основной
          упор был на UX: убрать всё лишнее, сделать расчёт быстрым и понятным с телефона.
          До этого система была собрана на Odoo
        </CaseTextBlock>
        <div className="flex flex-col gap-2 self-stretch">
          <CaseTextBlock>POS система для кассиров</CaseTextBlock>
          <CaseTextBlock>
            {`Убрали клавиатуру с экрана
В исходной версии экранная клавиатура занимала четверть экрана, для товаров почти не оставалось места. Убрали её теперь кассир видит список позиций сразу, добавление происходит быстрее.`}
          </CaseTextBlock>
          <CaseHorizontalGallery layout="stack">
            <CaseWideScreenCard
              src={finarumImages.posDo}
              alt=""
              caption="Главный экран ДО"
            />
            <CaseWideScreenCard
              src={finarumImages.posAfter}
              alt=""
              caption="Главный экран После"
            />
          </CaseHorizontalGallery>
        </div>
      </CaseSection>

      {/* 05 — POS ключевые решения */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>05 — Ключевые решения POS</CaseTitle>
        <CaseTextBlock>Унифицировал всех клиентов в одном экране</CaseTextBlock>
        <div className="flex w-full flex-col items-stretch gap-4 self-stretch rounded-[26px] bg-[#f5f5f5] px-2 py-[26px]">
          <div className="relative aspect-[362/228] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={finarumImages.posClients}
            />
          </div>
          <p className="text-center text-[12px] font-medium leading-4 text-[#838383]">
            Все клиенты
          </p>
        </div>
        <CaseTextBlock>Обновил оплату</CaseTextBlock>
        <div className="flex w-full flex-col gap-4 self-stretch rounded-[26px] bg-[#f5f5f5] px-2 py-[26px]">
          <div className="relative aspect-[362/228] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={finarumImages.posPayment}
            />
          </div>
          <p className="text-center text-[12px] font-medium leading-4 text-[#838383]">
            Оплата
          </p>
        </div>
        <CaseTextBlock>
          Единая история заказов Раньше история была разделена на два раздела — кассир не всегда понимал, куда смотреть. Объединили в один сценарий: любой заказ всегда в одном месте.
        </CaseTextBlock>
        <div className="flex w-full flex-col items-stretch gap-4 self-stretch rounded-[26px] bg-[#f5f5f5] px-2 py-[26px]">
          <div className="relative aspect-[362/228] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={finarumImages.posHistory}
            />
          </div>
          <p className="text-center text-[12px] font-medium leading-4 text-[#838383]">
            История
          </p>
        </div>
      </CaseSection>

      {/* Actions — следующий кейс */}
      <section className="flex w-full max-w-[402px] flex-col gap-2 self-center px-5 pt-12">
        <div className="flex w-full flex-row items-center justify-end gap-3 self-stretch">
          <p className="w-[175px] shrink-0 text-left text-[14px] font-medium leading-5 text-[#9c9c9c]">
            Следующий кейс
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-3 self-stretch">
          <a
            href="/case/qrtifact"
            className="relative flex w-[175px] flex-row items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[#f5f5f5] px-4 py-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[#515151]">
              QRtifact
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9C9C9C]" />
          </a>
        </div>
      </section>

      <Footer />

      <ScrollToTopFab />
    </main>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { uzumImages } from "@/lib/uzum-images";
import { CaseHorizontalGallery } from "@/components/case/CaseHorizontalGallery";
import { CaseLabel, CaseTextBlock } from "@/components/case/CaseTextBlock";
import { CasePhoneCard } from "@/components/case/CasePhoneCard";
import { CaseSection } from "@/components/case/CaseSection";
import { CaseTitle } from "@/components/case/CaseTitle";
import { ScrollToTopFab } from "@/components/case/ScrollToTopFab";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-[28px] shrink-0 items-center justify-center gap-1.5 rounded-[16px] bg-white px-1.5 py-1.5 text-center text-[12px] font-semibold leading-4 text-[#383838]">
      {children}
    </span>
  );
}

export function UzumBankCaseStudy() {
  return (
    <main className="flex w-full flex-col items-center gap-12 px-5 pb-8 pt-0">
      {/* Hero */}
      <div className="flex w-full max-w-[362px] flex-col gap-4 self-center">
        <div className="flex flex-col gap-1 self-stretch">
          <h1 className="text-left text-[18px] font-semibold leading-[1.3] text-[#383838]">
            Uzum Bank
          </h1>
          <p className="text-left text-[16px] font-medium leading-5 text-[#9c9c9c]">
            Как я переосмыслили сценарий анализа фильтров крупного банка
          </p>
        </div>
        <div className="relative h-[232px] w-full max-w-[362px] overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={uzumImages.heroBg}
            className="absolute inset-0 h-full w-full rounded-[26px] object-cover"
          />
          <div className="absolute bottom-0 left-0 flex w-full max-w-[362px] flex-row items-center gap-2 p-3">
            <TagPill>FinTech</TagPill>
            <TagPill>B2C</TagPill>
            <TagPill>mobile</TagPill>
          </div>
        </div>
      </div>

      {/* Role / Team / Contribution */}
      <CaseSection className="gap-4">
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Моя роль</CaseLabel>
          <CaseTextBlock>Junior Product Designer</CaseTextBlock>
        </div>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Команда</CaseLabel>
          <CaseTextBlock>Product Designer</CaseTextBlock>
        </div>
        <div className="flex flex-col gap-1 self-stretch">
          <CaseLabel>Чем я занимался</CaseLabel>
          <CaseTextBlock>Разработал сценарий анализа фильтров</CaseTextBlock>
        </div>
      </CaseSection>

      {/* 01 — Контекст и проблема */}
      <CaseSection className="gap-4">
        <CaseTitle>01 — Контекст и проблема </CaseTitle>
        <CaseTextBlock>
          Uzum Bank — один из крупнейших онлайн-банков Узбекистана. В приложении транзакции
          можно отсортировать только по дате — без категорий, сумм и периодов. Пользователь не
          может понять структуру своих трат и быстро найти нужный платёж.
        </CaseTextBlock>
      </CaseSection>

      {/* 02 — Цели */}
      <CaseSection className="gap-4">
        <CaseTitle>02 — Цели</CaseTitle>
        <CaseTextBlock>
          {`Бизнес цели
Удержать пользователей
Повысить ценность продукта
Улучшить NPS`}
        </CaseTextBlock>
        <CaseTextBlock>
          {`Пользовательские цели
Быстро найти транзакцию
Контролировать бюджет
Сравнивать периоды`}
        </CaseTextBlock>
      </CaseSection>

      {/* 03 — Исследования */}
      <CaseSection className="gap-4">
        <CaseTitle>03 — Исследования</CaseTitle>
        <CaseTextBlock>
          Я провёл 8 качественных интервью с пользователями онлайн-банков. Основной вопрос: как
          они анализируют свои траты и что мешает делать в приложении.
        </CaseTextBlock>
        <div className="relative w-full overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={uzumImages.research}
            className="box-content h-[193px] w-full object-cover"
          />
        </div>
        <CaseTextBlock>
          {`Три ключевых инсайта
Пользователи используют сторонние приложения (Excel, заметки) — банк не закрывает задачу
Поиск одной транзакции занимает 2–5 минут при большом количестве операций
Пользователи хотят видеть сумму за период, а не список`}
        </CaseTextBlock>
      </CaseSection>

      {/* 04 — Best Practice */}
      <CaseSection className="gap-4">
        <CaseTitle>04 — Best Practice</CaseTitle>
        <CaseTextBlock>
          Я проанализировал фильтры в Сбере, Т-банке, ВТБ. Во всех трёх фильтрация вынесена в
          отдельный сценарий. Все они предлагают категории трат с иконками, выбор периода через
          календарь и визуализацию. Я взял эти паттерны за основу и адаптировав под Uzum Bank.
        </CaseTextBlock>
        <div className="relative w-full overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={uzumImages.bestPractice}
            className="h-[381px] w-full object-cover"
          />
        </div>
      </CaseSection>

      {/* 05 — Приоритизация */}
      <CaseSection className="gap-4">
        <CaseTitle>05 — Приоритизация</CaseTitle>
        <CaseTextBlock>
          {`Для оценки гипотез я использовал ICE Score: Impact · Confidence · Ease.
В финал вошли 3 решения с наибольшим соотношением ценности к сложности.`}
        </CaseTextBlock>
        <div className="relative w-full overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={uzumImages.prioritization}
            className="h-[196px] w-full object-cover"
          />
        </div>
        <CaseTextBlock>
          {`Три победителя
Диаграмма расходов и доходов — ICE: 1.5
Категории транзакций — ICE: 1.5
Расширенный фильтр — ICE: 3`}
        </CaseTextBlock>
      </CaseSection>

      {/* 06 — User Flow */}
      <CaseSection className="gap-4">
        <CaseTitle>06 — User Flow</CaseTitle>
        <CaseTextBlock>
          Перед дизайном я прописал флоу: как пользователь открывает фильтры, применяет
          параметры и видит результат.
        </CaseTextBlock>
        <div className="relative w-full overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={uzumImages.userFlow}
            className="box-content h-[130px] w-full rounded-[12px] object-cover"
          />
        </div>
      </CaseSection>

      {/* 07 — До/после */}
      <CaseSection className="gap-2 self-stretch">
        <CaseTitle>07 — До/после</CaseTitle>
        <div className="flex flex-col gap-2 self-stretch">
          <CaseHorizontalGallery>
            <CasePhoneCard src={uzumImages.doRow1} alt="" caption="До" />
            <CasePhoneCard src={uzumImages.afterRow1} alt="" caption="После" />
          </CaseHorizontalGallery>
          <CaseHorizontalGallery>
            <CasePhoneCard src={uzumImages.doRow2} alt="" caption="До" />
            <CasePhoneCard src={uzumImages.afterRow2} alt="" caption="После" />
          </CaseHorizontalGallery>
        </div>
      </CaseSection>

      {/* 08 — Дизайн результат */}
      <CaseSection className="gap-4 self-stretch">
        <CaseTitle>08 — Дизайн результат</CaseTitle>
        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex flex-col gap-2 self-stretch">
            <CaseLabel>Гипотеза: диаграмма расходов и доходов</CaseLabel>
            <CaseHorizontalGallery>
              <CasePhoneCard src={uzumImages.hyp1} alt="" caption="" wide />
              <CasePhoneCard src={uzumImages.hyp2} alt="" caption="" wide />
              <CasePhoneCard src={uzumImages.hyp3} alt="" caption="" wide />
            </CaseHorizontalGallery>
          </div>
          <div className="flex flex-col gap-2 self-stretch">
            <CaseLabel>Гипотезы: категории транзакций и расширенный фильтр</CaseLabel>
            <CaseHorizontalGallery>
              <CasePhoneCard src={uzumImages.cat1} alt="" caption="" wide />
              <CasePhoneCard src={uzumImages.cat2} alt="" caption="" wide />
              <CasePhoneCard src={uzumImages.cat3} alt="" caption="" wide />
            </CaseHorizontalGallery>
          </div>
        </div>
      </CaseSection>

      {/* 09 — Вывод */}
      <CaseSection className="gap-4">
        <CaseTitle>09 — Вывод</CaseTitle>
        <CaseTextBlock>
          Этот проект показал мне, как исследование меняет дизайн-решения. Без интервью я бы
          сделал только «красивые фильтры»
        </CaseTextBlock>
        <CaseTextBlock>
          {`Прототип прошли 3 дизайнера. Основной фидбек, что навигация по фильтрам понятна и структура логична.
Если бы продукт запустился, я бы измерял:
— время поиска транзакции — гипотеза: снижение с 2–5 минут до 30–60 секунд
— % пользователей, применяющих фильтры — целевой показатель от 20–30% активных сессий
— отток в сторонние приложения (Excel, заметки)`}
        </CaseTextBlock>
        <CaseTextBlock>
          {`В будущем добавил бы:
лимиты на расходы
расширенные категории
тестирование на реальных пользователях`}
        </CaseTextBlock>
      </CaseSection>

      {/* Actions — предыдущий / следующий кейс */}
      <section className="flex w-full max-w-[402px] flex-col gap-2 self-center px-5 pt-12">
        <div className="flex w-full flex-row items-center justify-center gap-3 self-stretch">
          <p className="w-[175px] shrink-0 text-center text-[14px] font-medium leading-5 text-[#9c9c9c]">
            Предыдущий кейс
          </p>
          <p className="w-[175px] shrink-0 text-left text-[14px] font-medium leading-5 text-[#9c9c9c]">
            Следующий кейс
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-3 self-stretch">
          <a
            href="/case/zukko-ai"
            className="relative flex w-[175px] flex-row items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[#f5f5f5] px-4 py-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[#515151]">
              Zukko AI
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9C9C9C]" />
          </a>
          <Link
            href="/case/remoutly"
            className="relative flex w-[175px] flex-row items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[#f5f5f5] px-4 py-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[#515151]">
              Remoutly
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

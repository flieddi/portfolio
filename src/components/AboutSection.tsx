import Image from "next/image";
import { figmaAssets } from "@/lib/figma-assets";
import { links } from "@/lib/links";

export function AboutSection() {
  return (
    <div id="about" className="relative flex w-full shrink-0 flex-col items-start pt-16">
      <div className="relative flex w-full shrink-0 items-center justify-center px-5">
        <p className="relative min-w-0 flex-1 text-[18px] font-medium leading-6 text-[color:var(--500,#9c9c9c)]">
          Обо мне
        </p>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-start px-5 pt-5">
        <div className="relative h-[260px] w-[363px] max-w-full shrink-0 rounded-[26px] border-4 border-solid border-[color:var(--50,#f5f5f5)]">
          <Image
            src={figmaAssets.photoMe}
            alt="photo"
            fill
            className="pointer-events-none object-cover rounded-[26px]"
          />
        </div>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-3 px-5 pt-5 pb-5">
        <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-4 overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)] p-5 font-medium">
          <div className="relative flex w-full shrink-0 flex-col gap-1">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Product Designer — Дизайн Студия
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              10 месяцев, май 2025 - по настоящее
            </p>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Product Designer — Стартап Remoutly
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              4 месяца, июнь 2025 - сен. 2025,
              <br aria-hidden="true" />
              project work
            </p>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Graphic Designer — Молочная кухня
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              8 месяцев, октябрь 2024 - май 2025
            </p>
          </div>
        </div>
        <div className="relative flex w-full shrink-0 flex-col items-start px-3">
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть резюме (CV)"
            className="relative flex min-w-[44px] w-full shrink-0 items-center justify-center gap-2 overflow-clip rounded-[22px] p-3"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[22px] bg-[color:var(--200,#e9d4ff)] backdrop-blur-[8px]"
            />
            <p className="relative shrink-0 whitespace-nowrap text-center text-[14px] font-semibold leading-5 text-[color:var(--800,#515151)]">
              CV
            </p>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)]"
            />
          </a>
        </div>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-5">
        <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-2 overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)] p-5 font-medium leading-5">
          <p className="relative w-full shrink-0 text-[14px] text-[color:var(--600,#838383)]">
            Немного слов
          </p>
          <p className="relative w-full shrink-0 text-[16px] text-[color:var(--900,#383838)]">
            Продуктовый дизайнер с 2 годами опыта в B2B,B2C и стартап-продуктах.
            Специализируюсь на мобильных интерфейсах, работал с системами — CRM,
            ERP, POS. Работаю от проблемы до передачи в разработку: анализ,
            гипотезы, проектирование и работа в команде.
            <br aria-hidden="true" />
            Хочу развиваться в командах, где дизайн влияет на бизнес-решения.
            Слежу за рынком дизайна на: Habr, дизайнерс, кинжал и подкаст дизайн
            прост
          </p>
        </div>
      </div>
    </div>
  );
}

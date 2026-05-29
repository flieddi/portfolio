import { links } from "@/lib/links";

export function Hero() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-start">
      <div className="relative flex w-full shrink-0 items-center gap-[21px] p-5">
        <p className="relative min-w-0 flex-1 text-[28px] font-medium leading-[0] tracking-[-1.12px] text-[color:var(--900,#383838)] whitespace-pre-wrap">
          <span className="leading-[1.15]">{`Я Амаль — product designer , с фокусом на мобилки. `}</span>
          <span className="leading-[1.15] text-[#383838]">
            Начинаю дизайн с гипотез
            <br aria-hidden="true" />
            и заканчиваю понятным UI
          </span>
        </p>
        <div className="absolute left-[162px] top-5 flex items-center justify-center bg-[color:var(--400,#bf7cff)]">
          <p className="relative shrink-0 whitespace-nowrap text-[28px] font-medium leading-[1.15] tracking-[-1.12px] text-[color:var(--10,white)]">
            product designer
          </p>
        </div>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-start gap-2 px-5">
        <a
          href={links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex min-w-[52px] w-full shrink-0 items-center justify-center gap-2 overflow-clip rounded-[26px] bg-[color:var(--400,#bf7cff)] p-4"
        >
          <p className="relative shrink-0 whitespace-nowrap text-center text-[16px] font-semibold leading-5 text-[color:var(--10,white)]">
            Написать мне
          </p>
        </a>
        <a
          href="#about"
          className="relative flex min-w-[52px] w-full shrink-0 items-center justify-center gap-2 overflow-clip rounded-[26px] p-4"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[26px] bg-[color:var(--50,#f5f5f5)] backdrop-blur-[8px]"
          />
          <p className="relative shrink-0 whitespace-nowrap text-center text-[16px] font-semibold leading-5 text-[color:var(--800,#515151)]">
            Обо мне
          </p>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)]"
          />
        </a>
      </div>
    </div>
  );
}

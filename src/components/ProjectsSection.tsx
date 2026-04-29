import Link from "next/link";

export function ProjectsSection() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-start pt-16">
      <div className="relative flex w-full shrink-0 items-center justify-center px-5">
        <p className="relative min-w-0 flex-1 text-[18px] font-medium leading-6 text-[color:var(--500,#9c9c9c)]">
          Проекты
        </p>
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-8">
        <a
          href="/case/finarum"
          className="relative flex w-full shrink-0 flex-col items-center justify-center gap-3"
        >
          <div className="relative flex h-[200px] w-full shrink-0 flex-col items-start justify-end overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)]">
            <div className="absolute left-[calc(50%-0.5px)] top-2 h-[246px] w-[150px] -translate-x-1/2 rounded-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
                src="/finarum.png"
              />
            </div>
            <div className="relative z-10 flex w-[362px] max-w-full shrink-0 items-center gap-2 p-3">
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  MedTech
                </p>
              </div>
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  B2B
                </p>
              </div>
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  ERP / POS
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1 font-medium">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Finarum
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              Разработка ERP и POS системы
              <br aria-hidden="true" />
              для стоматологии
            </p>
          </div>
        </a>
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-8">
        <Link
          href="/case/uzum-bank"
          aria-label="Open Uzum Bank case"
          className="relative flex w-full max-w-[362px] shrink-0 flex-col items-center justify-center gap-3"
        >
          <div className="relative flex h-[200px] w-[362px] max-w-full shrink-0 flex-col items-start overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)]">
            <div className="absolute bottom-0 left-0 flex w-[362px] max-w-full items-center gap-2 p-3">
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  FinTech
                </p>
              </div>
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  B2C
                </p>
              </div>
            </div>
            <div className="absolute left-[calc(50%-0.5px)] top-[calc(50%+31px)] h-[246px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[20px] object-cover"
                src="/uzum-bank.png"
              />
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1 font-medium">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Uzum Bank
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              Как я переосмыслили сценарий анализа фильтров крупного банка
            </p>
          </div>
        </Link>
      </div>

      <div className="relative flex w-[402px] max-w-full shrink-0 flex-col items-center justify-center px-5 pt-8">
        <Link
          href="/case/zukko-ai"
          aria-label="Открыть кейс Zukko AI"
          className="relative flex w-full max-w-[362px] shrink-0 flex-col items-center justify-center gap-3"
        >
          <div className="relative flex h-[200px] w-[362px] max-w-full shrink-0 flex-col items-start overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)]">
            <div className="absolute left-[calc(50%-0.5px)] top-3 h-[246px] w-[150px] -translate-x-1/2 rounded-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
                src="/zukko-ai.png"
              />
            </div>
            <div className="absolute bottom-0 left-0 flex w-[362px] max-w-full items-center gap-2 p-3">
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  B2B
                </p>
              </div>
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  mobile
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1 font-medium">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Zukko AI
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              Стартап, который собирает лидов из всех каналов коммуникации в одном приложении
            </p>
          </div>
        </Link>
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-8">
        <Link
          href="/case/remoutly"
          aria-label="Открыть кейс Remoutly"
          className="relative flex w-full max-w-[362px] shrink-0 flex-col items-center justify-center gap-3"
        >
          <div className="relative flex h-[200px] w-[362px] max-w-full shrink-0 flex-col items-start overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)] text-center">
            <div className="absolute bottom-0 left-0 flex w-[362px] max-w-full items-center gap-2 p-3">
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  B2C
                </p>
              </div>
              <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
                <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                  mobile
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 top-2 h-[246px] w-[150px] -translate-x-1/2 rounded-[16px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
                src="/remoutly.png"
              />
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1 font-medium">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Remoutly
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              Мобильное приложение для быстрого поиска и бронирования коворкингов
            </p>
          </div>
        </Link>
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-8">
        <div className="relative flex w-full shrink-0 flex-col items-center justify-center gap-3">
          <div className="relative flex w-full shrink-0 flex-col items-start overflow-clip rounded-[26px]">
            <div className="relative flex h-[200px] w-full shrink-0 items-center justify-center rounded-[20px] bg-[color:var(--50,#f5f5f5)]">
              <p className="text-center text-[24px] font-semibold leading-none tracking-wide text-[color:var(--color-accent)]">
                SOON
              </p>
            </div>
            
            <div className="pointer-events-none absolute left-3 top-[160px] flex min-w-[28px] items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[#ffffff] p-1.5">
              <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
                for better UI
              </p>
            </div>
          </div>
          <div className="relative flex w-full shrink-0 flex-col gap-1 font-medium">
            <p className="relative w-full shrink-0 text-[18px] leading-6 text-[color:var(--900,#383838)]">
              Side projects
            </p>
            <p className="relative w-full shrink-0 text-[16px] leading-5 text-[color:var(--500,#9c9c9c)]">
              Проекты для прокачки визуала и для души
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

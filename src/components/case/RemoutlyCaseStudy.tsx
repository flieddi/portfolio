import { ScrollToTopFab } from "@/components/case/ScrollToTopFab";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

const remoutlyHeroImage =
  "/images/remoutly/remoutlyHeroImage.png";
const remoutlyCompetitorsImage =
  "/images/remoutly/remoutlyCompetitorsImage.png";
const remoutlyInterviewImage =
  "/images/remoutly/remoutlyInterviewImage.png";
const remoutlyUserFlowImage =
  "/images/remoutly/remoutlyUserFlowImage.png";
const remoutlyCjmImage =
  "/images/remoutly/remoutlyCJMImage.png";

const remoutlyDesign01 = "/images/remoutly/remoutlyDesign01.png";
const remoutlyDesign02 = "/images/remoutly/remoutlyDesign02.png";
const remoutlyDesign03 = "/images/remoutly/remoutlyDesign03.png";
const remoutlyDesign04 = "/images/remoutly/remoutlyDesign04.png";
const remoutlyDesign05 = "/images/remoutly/remoutlyDesign05.png";
const remoutlyDesign06 = "/images/remoutly/remoutlyDesign06.png";
const remoutlyDesign07 = "/images/remoutly/remoutlyDesign07.png";
const remoutlyDesign08 = "/images/remoutly/remoutlyDesign08.png";

export function RemoutlyCaseStudy() {
  return (
    <main className="flex w-full flex-col items-center gap-12 px-5 pb-8 pt-0">
      <section className="flex w-full max-w-[362px] flex-col gap-4 self-center pt-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-[20px] font-semibold leading-[26px] text-[#383838]">Remoutly</h1>
          <p className="text-[16px] font-medium leading-5 text-[#9C9C9C]">
            Мобильное приложение для быстрого поиска и бронирования коворкингов
          </p>
        </div>
        <div className="relative h-[232px] overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={remoutlyHeroImage} className="h-full w-full object-cover" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="rounded-2xl bg-white px-1.5 py-1.5 text-[12px] font-semibold leading-4 text-[#383838]">
              startup
            </span>
            <span className="rounded-2xl bg-white px-1.5 py-1.5 text-[12px] font-semibold leading-4 text-[#383838]">
              B2C
            </span>
            <span className="rounded-2xl bg-white px-1.5 py-1.5 text-[12px] font-semibold leading-4 text-[#383838]">
              mobile
            </span>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">Моя роль</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">Junior Product Designer</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">Команда</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">Product Designer</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">Engineer</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">Чем я занимался</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            Я работал над MVP продуктом мобильного приложения. Разработал интерфейс для сценария поиска и
            бронирования коворкингов. Работал над CJM и User Flow
          </p>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">01 — Контекст и проблема</h2>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Remoutly — мобильное приложение для специалистов, которым нужно найти и забронировать рабочее место в
          коворкинге.
        </p>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Удалённые специалисты теряют время на поиск коворкинга: существующие сервисы не показывают доступность здесь
          и сейчас, а бронирование требует звонков или долгой переписки.
        </p>
        <div className="text-[16px] font-medium leading-5 text-[#383838]">
          <p>ЦА:</p>
          <p>1. Фрилансеры и удаленщики</p>
          <p>2. Небольшие стартапы и команды</p>
        </div>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Бизнес цели: сократить путь от открытия приложения до подтверждения брони
        </p>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Пользовательские цели: быстро найти свободное рабочее место рядом с собой без звонков и дополнительного
          поиска
        </p>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">02 — Конкуренты</h2>
        <div className="text-[16px] font-medium leading-5 text-[#383838]">
          <p>Я проанализировал конкурентов и вывел сложности:</p>
          <p>— Бронирование везде многошаговое, 5–7 действий до подтверждения</p>
          <p>— Цена и доступность скрыты до последнего шага</p>
          <p>— Все сервисы только веб, без мобильного приложения</p>
        </div>
        <div className="overflow-x-auto rounded-[26px]">
          <div className="relative aspect-[4104/2560] w-[713px] shrink-0 bg-[#f5f5f5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={remoutlyCompetitorsImage}
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">03 — Интервью</h2>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Я опросил 8 респондентов: фрилансеры, удалёнщики
        </p>
        <div className="overflow-x-auto rounded-[26px]">
          <div className="relative aspect-[3888/2880] w-[486px] shrink-0 bg-[#f5f5f5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={remoutlyInterviewImage}
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">User Story</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            1. когда пользователь на удаленке ищет место для работы вне дома, хочет видеть все коворкинги сравнимые
            по ценам, локации, обстановки, чтобы процесс поиска прошел быстрее
          </p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            2. когда удаленщик находит один коворкинг и все время ходит только туда, он хочет найходить новые места,
            чтобы попробовать разные коворкинги
          </p>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">04 — Решения</h2>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">Гипотезы</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            1. Карта. Если пользователь приложения увидит доступные рабочие места рядом с собой на карте, то он
            быстрее выберет место, но также есть и список
          </p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            2. Фильтры. Если фильтры будут сфокусированы на основных параметрах, то пользователю будет проще сравнивать
            варианты
          </p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            3. Цена. Если пользователь увидит итоговую цену и доступность, то уровень неопределённости снизится
            <br />
            и вероятность отказа уменьшится.
          </p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            4. Если процесс бронирования будет занимать 2–3 шага, то пользователь завершит бронирование на ходу.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">User Flow</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            Составил User Flow, чтобы зафиксировать минимальный путь пользователя и убрать лишние шаги до бронирования
          </p>
          <div className="overflow-x-auto rounded-[5px] border border-[#E1E1E1]">
            <div className="relative aspect-[5320/1440] w-[665px] shrink-0 bg-[#f5f5f5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={remoutlyUserFlowImage}
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">CJM</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            CJM помог найти точки неопределённости — моменты, где пользователь теряет уверенность и может уйти
          </p>
          <div className="overflow-x-auto rounded-[12px]">
            <div className="relative aspect-[5728/2240] w-[614px] shrink-0 bg-[#f5f5f5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={remoutlyCjmImage} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-6">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">05 — Дизайн</h2>
        <div className="flex flex-col gap-3">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">1. Основной флоу: от входа до подтверждения</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            Регистрация → главный экран с ближайшей бронью → карточка коворкинга с ценой и доступностью → экран
            бронирования. Весь путь — 3 шага, вся нужная информация видна до оплаты.
          </p>
          <div className="overflow-x-auto overflow-y-visible">
            <div className="flex w-max gap-5">
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Регистрация" src={remoutlyDesign01} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Регистрация</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Главный экран" src={remoutlyDesign02} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Главный экран</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Карточка коворкинг" src={remoutlyDesign03} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Карточка коворкинг</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Бронирование" src={remoutlyDesign04} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Бронирование</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[#9C9C9C]">2. Карта, фильтры, управление бронями и настройки</p>
          <p className="text-[16px] font-medium leading-5 text-[#383838]">
            Карта показывает доступные места рядом. Фильтры сфокусированы на основных параметрах — дата, время, район.
            Календарь броней и профиль закрывают управление после бронирования.
          </p>
          <div className="overflow-x-auto overflow-y-visible">
            <div className="flex w-max gap-5">
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Карта" src={remoutlyDesign05} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Карта</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Фильтр" src={remoutlyDesign06} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Фильтр</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Календарь броней" src={remoutlyDesign07} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Календарь броней</p>
              </div>
              <div className="flex h-[400px] w-[260px] flex-col items-center gap-2 rounded-[26px] bg-[#F5F5F5] py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Профиль" src={remoutlyDesign08} className="h-[328px] w-[260px] shrink-0 object-contain" />
                <p className="text-center text-[14px] font-medium leading-5 text-[#9C9C9C]">Профиль</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-3">
        <h2 className="text-[18px] font-semibold leading-6 text-[#383838]">06 — Результат</h2>
        <p className="text-[16px] font-medium leading-5 text-[#383838]">
          Спроектировал сценарий мобильного сервиса для спонтанного бронирования коворкингов с фокусом на скорость
        </p>
        <p className="whitespace-pre-line text-[16px] font-medium leading-5 text-[#383838]">
          Хотел бы протестировать прототип{"\n"}на реальных пользователях — некоторые решения по навигации хочется
          проверить живым тестированием, а не только через гипотезы из интервью
        </p>
      </section>

      <section className="flex w-full flex-col gap-2 pt-12">
        <p className="text-left text-[14px] font-medium leading-5 text-[#9c9c9c]">
          Предыдущий кейс
        </p>
        <a
          href="/case/zukko-ai"
          className="relative flex h-[52px] w-[175px] flex-row items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[#f5f5f5] px-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
        >
          <span className="text-center text-[16px] font-semibold leading-5 text-[#515151]">
            Zukko AI
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9C9C9C]" />
        </a>
      </section>

      <Footer />

      <ScrollToTopFab />
    </main>
  );
}

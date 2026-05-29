import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ScrollToTopFab } from "@/components/case/ScrollToTopFab";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import { qrtifactImages } from "@/lib/qrtifact-images";

function TagPill({ text }: { text: string }) {
  return (
    <div className="relative flex min-w-[28px] shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[16px] bg-[color:var(--10,white)] p-1.5">
      <p className="relative shrink-0 whitespace-nowrap text-center text-[12px] font-semibold leading-4 text-[color:var(--900,#383838)]">
        {text}
      </p>
    </div>
  );
}

function ScreenCard({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="relative flex h-[400px] w-[260px] shrink-0 flex-col items-center justify-center gap-2 rounded-[26px] bg-[color:var(--50,#f5f5f5)] px-5">
      <div className="relative h-[328px] w-[156px] shrink-0 overflow-hidden rounded-[16px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={src}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="relative w-full text-center text-[12px] font-medium leading-4 text-[color:var(--600,#838383)]">
        {caption}
      </p>
    </div>
  );
}

export function QRtifactCaseStudy() {
  return (
    <main className="flex w-full flex-col items-center gap-12 px-5 pb-5 pt-5">
      <section className="flex w-full max-w-[362px] flex-col gap-3 self-center">
        <div className="flex w-full flex-col gap-1">
          <h1 className="w-full text-[20px] font-semibold leading-[26px] text-[color:var(--900,#383838)]">
            QRtifact
          </h1>
          <p className="w-full text-[16px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Стартап в сфере туризма, это мобильное приложение для музеев
          </p>
        </div>
        <div className="relative h-[232px] w-full overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={qrtifactImages.preview}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 flex w-full items-center gap-2 p-3">
            <TagPill text="startup" />
            <TagPill text="B2C" />
            <TagPill text="mobile" />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <div className="flex w-full flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Моя роль
          </p>
          <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
            Product Designer
          </p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Команда
          </p>
          <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
            1 Product Designer
          </p>
          <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
            2 Enginers
          </p>
          <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
            1 Founder
          </p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Чем я занимался
          </p>
          <p className="whitespace-pre-wrap text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
            Я работал над мобильным приложением, проектировал все разделы. Провел
            небольшой опрос среди туристов и также разрабатывал User Flow и
            совместно с Founder&apos;ом сделали CJM
          </p>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          01 — Контекст и проблема
        </h2>
        <div className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          <p>
            Классическая групповая экскурсия работает одинаково, гид говорит,
            группа слушает.
          </p>
          <p>
            Группа из 20 человек платит одинаково, но получает разный опыт. 4-6
            человек стоят рядом с гидом и слышат все, остальные стоят сзади не
            слышат и начинают скучать. Кто-то хочет задержаться у экспоната
            дольше, кто-то быстрее, а группа уходит.
          </p>
          <p>
            Кроме этого качество объяснения гида зависит от его настроения.
            Стандартизировать это невозможно.
          </p>
          <p>
            Ключевая проблема — культурный контент не доходит до большинства
            посетителей так, как должен.
          </p>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          02 — Исследование
        </h2>
        <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          Провёл интервью с 5-10 туристами, которые недавно были на групповых
          экскурсиях.
        </p>
        <div className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          <p>Главные инсайты:</p>
          <ol className="list-decimal pl-6">
            <li>
              &quot;Я платил за экскурсию, но половину не слышал&quot; —
              физическое расстояние от гида напрямую определяет качество опыта.
            </li>
            <li>
              &quot;Хотел остаться у картины дольше, но все пошли&quot; —
              групповой формат не оставляет пространства для личного темпа.
            </li>
            <li>
              &quot;Гид говорил монотонно, я отключился через 10 минут&quot; —
              вовлечённость держится только если подача интересная.
            </li>
            <li>
              &quot;Я бы хотел вернуться к информации дома, но её не нашел&quot; —
              опыт заканчивается в музее. Нет способа вернуться к тому, что
              понравилось.
            </li>
          </ol>
        </div>
        <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          Вывод: людям нужен доступ к контенту в своём темпе, в любой точке
          зала, с возможностью вернуться позже.
        </p>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          03 — User Flow &amp; CJM
        </h2>
        <div className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          <p>Основной сценарий — посетитель внутри музея:</p>
          <ol className="list-decimal pl-6">
            <li>Подходит к экспонату.</li>
            <li>Замечает QR-код.</li>
            <li>Сканирует через камеру телефона.</li>
            <li>Открывается карточка экспоната в приложении.</li>
            <li>Запускает аудиогид.</li>
            <li>
              Слушает в своём темпе, может поставить на паузу и отмотать.
            </li>
            <li>Читает дополнительный текст / смотрит медиа.</li>
            <li>
              Сохраняет в избранное или идёт к следующему экспонату.
            </li>
          </ol>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            User Flow
          </p>
          <div className="overflow-x-auto rounded-[12px] border border-[color:var(--100,#ebebeb)]">
            <div className="relative h-[275px] w-[456px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={qrtifactImages.userFlow}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            CJM
          </p>
          <div className="overflow-x-auto rounded-[12px] border border-[color:var(--100,#ebebeb)]">
            <div className="relative h-[296px] w-[362px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={qrtifactImages.cjm}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          04 — Главная и Регистрация
        </h2>
        <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          После скана без регистрации на входе, пользователь попадает к контенту
          максимально быстро. Регистрация — если пользователь хочет сохранять
          избранное
        </p>
        <div className="overflow-x-auto overflow-y-visible">
          <div className="flex w-max gap-5">
            <ScreenCard src={qrtifactImages.registration} caption="Регистрация" />
            <ScreenCard src={qrtifactImages.login} caption="Вход" />
            <ScreenCard src={qrtifactImages.homeOne} caption="Главная страница" />
            <ScreenCard src={qrtifactImages.homeTwo} caption="Главная страница" />
            <ScreenCard src={qrtifactImages.qrScan} caption="Страница скана QR" />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          05 — Раздел и карточка экспонатов
        </h2>
        <div className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          <p>
            Карточка экспоната — сначала аудио, затем текст и медиа для тех, кто
            хочет больше. Кнопка &quot;сохранить&quot; всегда доступна.
          </p>
          <p>
            Аудиоплеер — простой, привычный интерфейс. Пауза, перемотка,
            скорость. Не отвлекает от самого экспоната.
          </p>
        </div>
        <div className="overflow-x-auto overflow-y-visible">
          <div className="flex w-max gap-5">
            <ScreenCard src={qrtifactImages.exhibits} caption="Раздел Экспонаты" />
            <ScreenCard src={qrtifactImages.museums} caption="Раздел Музеи" />
            <ScreenCard src={qrtifactImages.filters} caption="Фильтры" />
            <ScreenCard src={qrtifactImages.player} caption="Плеер экспоната" />
            <ScreenCard src={qrtifactImages.museumPage} caption="Страница музея" />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          06 — Избранное и Профиль
        </h2>
        <p className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          Доступ к просмотренным экспонатам после визита. Решает инсайт про
          &quot;хочу вернуться к информации дома&quot;
        </p>
        <div className="overflow-x-auto overflow-y-visible">
          <div className="flex w-max gap-5">
            <ScreenCard src={qrtifactImages.favorites} caption="Избранное" />
            <ScreenCard src={qrtifactImages.playerInfo} caption="Информация о плеере" />
            <ScreenCard src={qrtifactImages.profile} caption="Профиль" />
            <ScreenCard src={qrtifactImages.language} caption="Смена языка" />
            <ScreenCard src={qrtifactImages.editProfile} caption="Редактирование профиля" />
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-4">
        <h2 className="text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
          07 — Итог
        </h2>
        <div className="text-[16px] font-medium leading-5 text-[color:var(--900,#383838)]">
          <p>QRtifact запущен и работает.</p>
          <p>
            Для меня этот проект стал первым опытом, где я отвечал за весь
            дизайн-процесс — от исследования и CJM до финальных экранов. Работа
            в связке с фаундером научила балансировать между продуктовым
            мышлением и дизайн-решениями.
          </p>
        </div>
      </section>

      <section className="flex w-full max-w-[362px] flex-col gap-2 self-center pt-12">
        <div className="flex w-full items-center gap-3">
          <p className="w-[175px] text-left text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Предыдущий кейс
          </p>
          <p className="w-[175px] text-left text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
            Следующий кейс
          </p>
        </div>
        <div className="flex w-full items-center gap-3">
          <Link
            href="/case/finarum"
            className="relative flex h-[52px] w-[175px] items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[color:var(--50,#f5f5f5)] px-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[color:var(--800,#515151)]">
              Finarum
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#9C9C9C]" />
          </Link>
          <Link
            href="/case/uzum-bank"
            className="relative flex h-[52px] w-[175px] items-center justify-center gap-2 overflow-hidden rounded-[26px] bg-[color:var(--50,#f5f5f5)] px-4 shadow-[inset_0px_0px_8px_-2px_rgba(255,255,255,0.12)] backdrop-blur-[16px]"
          >
            <span className="text-center text-[16px] font-semibold leading-5 text-[color:var(--800,#515151)]">
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

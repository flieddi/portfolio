export function Footer() {
  return (
    <footer className="relative flex w-[402px] max-w-full shrink-0 flex-col items-center gap-4 bg-[color:var(--10,white)] px-5 py-16">
      <div className="h-[1px] w-full bg-[color:var(--50,#f5f5f5)]" />
      <p className="relative w-full min-w-full shrink-0 text-center text-[24px] font-medium leading-7 text-[color:var(--900,#383838)]">
        2026©
      </p>
      <p className="relative w-[335px] max-w-full shrink-0 text-center text-[14px] font-medium leading-5 text-[color:var(--400,#b0b0b0)]">
        Made with Figma, Claude, Framer, my experience
        <br aria-hidden="true" />
        and an unspecified number of cups of coffee
      </p>
    </footer>
  );
}

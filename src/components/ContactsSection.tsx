import { links } from "@/lib/links";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import { GmailIcon } from "@/components/icons/GmailIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

function SocialMedia({
  className,
  state,
}: {
  className?: string;
  state: "Gmail" | "LinkedIn" | "Telegram";
}) {
  const isLinkedIn = state === "LinkedIn";
  const isTelegram = state === "Telegram";
  return (
    <div
      className={
        className ??
        "relative size-10 shrink-0 overflow-clip rounded-[12px] bg-[color:var(--10,white)]"
      }
    >
      {state !== "LinkedIn" && (
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2">
          {isTelegram ? (
            <TelegramIcon className="block h-5 w-5 text-[#383838]" />
          ) : (
            <GmailIcon className="block h-5 w-5 text-[#383838]" />
          )}
        </div>
      )}
      {isLinkedIn && (
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2">
          <LinkedInIcon className="block h-5 w-5 text-[#383838]" />
        </div>
      )}
    </div>
  );
}

export function ContactsSection() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-start pt-16">
      <div className="relative flex w-full shrink-0 items-center justify-center px-5">
        <p className="relative min-w-0 flex-1 text-[18px] font-medium leading-6 text-[color:var(--500,#9c9c9c)]">
          Контакты
        </p>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-center justify-center px-5 pt-5">
        <div className="relative flex w-full shrink-0 flex-col items-start gap-4 overflow-clip rounded-[26px] bg-[color:var(--50,#f5f5f5)] p-5">
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex w-full shrink-0 items-center justify-between"
          >
            <span className="relative flex shrink-0 items-center gap-3">
              <SocialMedia state="Telegram" />
              <p className="relative shrink-0 whitespace-nowrap text-[18px] font-medium leading-6 text-[color:var(--900,#383838)]">
                Telegram
              </p>
            </span>
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-[#9C9C9C]" />
            </span>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex w-full shrink-0 items-center justify-between"
          >
            <span className="relative flex shrink-0 items-center gap-3">
              <SocialMedia state="LinkedIn" />
              <p className="relative shrink-0 whitespace-nowrap text-[18px] font-medium leading-6 text-[color:var(--900,#383838)]">
                LinkedIn
              </p>
            </span>
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-[#9C9C9C]" />
            </span>
          </a>
          <a href={links.email} className="relative flex w-full shrink-0 items-center justify-between">
            <span className="relative flex shrink-0 items-center gap-3">
              <SocialMedia state="Gmail" />
              <p className="relative shrink-0 whitespace-nowrap text-[18px] font-medium leading-6 text-[color:var(--900,#383838)]">
                Email
              </p>
            </span>
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-[#9C9C9C]" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

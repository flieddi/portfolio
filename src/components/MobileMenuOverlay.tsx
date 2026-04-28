"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { links } from "@/lib/links";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

const ease: [number, number, number, number] = [0.42, 0, 0.58, 1];
const duration = 0.28;

const transition = { duration, ease };

type MobileMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  dialogId: string;
};

const menuLinks = [
  { label: "Email", href: links.email },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Telegram", href: links.telegram },
  { label: "CV", href: links.cv },
] as const;

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#9C9C9C]" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RowArrowIcon() {
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center opacity-80">
      <ArrowUpRight className="h-5 w-5 text-[#9C9C9C]" />
    </span>
  );
}

export function MobileMenuOverlay({ open, onClose, dialogId }: MobileMenuOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="mobile-menu-backdrop"
            role="presentation"
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            onClick={onClose}
          />
          <motion.div
            key="mobile-menu-card"
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="fixed left-2 right-2 top-2 z-[61] mx-auto flex w-full max-w-[337px] flex-col items-stretch rounded-[32px] bg-[#f7f7f9] px-5 pb-6 pt-5 shadow-[0_16px_48px_rgba(25,25,35,0.12),0_2px_8px_rgba(25,25,35,0.06)]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={transition}
          >
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="min-w-0 no-underline text-inherit"
                onClick={onClose}
                aria-label="На главную"
              >
                <p
                  id="mobile-menu-title"
                  className="text-left text-[16px] font-semibold leading-6 text-[color:var(--900,#383838)]"
                >
                  Акбаров Амаль
                </p>
              </Link>
              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-[color:var(--900,#383838)] transition-opacity hover:opacity-70"
                aria-label="Закрыть меню"
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="mt-6 flex w-full flex-col gap-10" aria-label="Навигация">
              {menuLinks.map(({ label, href }) => {
                const blank = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex w-full justify-center text-[18px] font-medium leading-6 text-[color:var(--900,#383838)] hover:opacity-80"
                    onClick={onClose}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span>{label}</span>
                      <RowArrowIcon />
                    </span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

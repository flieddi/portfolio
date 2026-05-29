"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { MobileMenuOverlay } from "@/components/MobileMenuOverlay";
import { MenuIcon } from "@/components/icons/MenuIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuDialogId = useId().replace(/:/g, "");

  return (
    <>
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
      <header className="header-glass fixed top-0 left-0 right-0 z-50 w-full overflow-clip rounded-[1px]">
        <div className="mx-auto flex w-full max-w-[402px] shrink-0 items-center justify-between border border-white/[0.18] bg-white/10 p-5 backdrop-blur-[12px]">
          <Link
            href="/"
            className="relative z-[1] shrink-0 no-underline text-inherit"
            onClick={() => setMenuOpen(false)}
            aria-label="На главную"
          >
            <p className="whitespace-nowrap text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
              Главная
            </p>
          </Link>
          <button
            type="button"
            className="relative z-[1] flex size-6 shrink-0 items-center justify-center overflow-clip"
            aria-expanded={menuOpen}
            aria-controls={`menu-dialog-${menuDialogId}`}
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon className="h-5 w-5 text-[#9C9C9C]" />
          </button>
        </div>
      </header>
      <MobileMenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        dialogId={`menu-dialog-${menuDialogId}`}
      />
    </>
  );
}

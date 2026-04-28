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
      <header
        className="fixed inset-x-0 top-0 z-50 w-full overflow-clip rounded-[1px] backdrop-blur-[22px] backdrop-saturate-[1.35] [background:linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.16)_52%,rgba(255,255,255,0.07)_100%)],inset_0_1px_0_rgba(255,255,255,0.55),inset_0_0_0_1px_rgba(255,255,255,0.22)]"
      >
        <div className="mx-auto flex w-full max-w-[402px] shrink-0 items-center justify-between p-5">
          <Link
            href="/"
            className="relative z-[1] shrink-0 no-underline text-inherit"
            onClick={() => setMenuOpen(false)}
            aria-label="На главную"
          >
            <p className="whitespace-nowrap text-[16px] font-semibold leading-6 text-[color:var(--900,#383838)]">
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

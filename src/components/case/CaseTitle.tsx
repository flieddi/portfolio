import type { ReactNode } from "react";

export function CaseTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-left text-[18px] font-semibold leading-6 text-[color:var(--900,#383838)]">
      {children}
    </h2>
  );
}

import type { ReactNode } from "react";

export function CaseTextBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`w-full whitespace-pre-line text-left text-[16px] font-medium leading-5 text-[color:var(--900,#383838)] ${className}`}
    >
      {children}
    </p>
  );
}

export function CaseLabel({ children }: { children: ReactNode }) {
  return (
    <p className="w-full text-left text-[14px] font-medium leading-5 text-[color:var(--500,#9c9c9c)]">
      {children}
    </p>
  );
}

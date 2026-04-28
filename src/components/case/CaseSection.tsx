import type { ReactNode } from "react";

export function CaseSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex w-full max-w-[362px] flex-col items-stretch self-center ${className}`}
    >
      {children}
    </section>
  );
}

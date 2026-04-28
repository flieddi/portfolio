import type { ReactNode } from "react";

type CaseHorizontalGalleryProps = {
  children: ReactNode;
  /** POS ДО/После: vertical stack, full width, no horizontal strip padding */
  layout?: "scroll" | "stack";
};

/** Figma preview rows: default = horizontal scroll; stack = column (e.g. POS). */
export function CaseHorizontalGallery({ children, layout = "scroll" }: CaseHorizontalGalleryProps) {
  const outer =
    layout === "stack"
      ? "w-full min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] scroll-smooth"
      : "w-full min-w-0 snap-x snap-proximity overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] scroll-smooth";

  const inner =
    layout === "stack"
      ? "flex w-full max-w-[362px] flex-none flex-col flex-nowrap items-stretch justify-start gap-5"
      : "flex w-max max-w-none flex-none flex-row flex-nowrap items-stretch justify-start gap-5 px-5";

  return (
    <div className={outer}>
      <div className={inner}>{children}</div>
    </div>
  );
}

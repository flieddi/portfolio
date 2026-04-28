"use client";

type CaseDesktopScreenshotCardProps = {
  src: string;
  alt: string;
  caption: string;
};

const FRAME_W = 540;
const SHOT_W = 522;
const SHOT_H = 285;

export function CaseDesktopScreenshotCard({ src, alt, caption }: CaseDesktopScreenshotCardProps) {
  return (
    <div
      className="flex h-[400px] snap-start flex-none shrink-0 flex-col rounded-[26px] bg-[#f5f5f5]"
      style={{ width: FRAME_W, minWidth: FRAME_W }}
    >
      <div className="flex w-full shrink-0 flex-col items-center pt-[46px]">
        <div
          className="relative shrink-0 overflow-hidden rounded-[16px] bg-[#f5f5f5]"
          style={{ width: SHOT_W, height: SHOT_H }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={SHOT_W}
            height={SHOT_H}
            className="pointer-events-none absolute inset-0 size-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      <p className="mt-[7.5px] w-full shrink-0 px-2 pb-[45px] text-center text-[12px] font-medium leading-4 text-[#838383]">
        {caption}
      </p>
    </div>
  );
}

"use client";

const IMG_H = 193;

type CaseWideScreenCardProps = {
  src: string;
  alt: string;
  caption: string;
};

export function CaseWideScreenCard({ src, alt, caption }: CaseWideScreenCardProps) {
  return (
    <div className="flex w-full min-w-[171px] shrink-0 snap-start flex-none flex-col items-stretch gap-4 rounded-[26px] bg-[#f5f5f5] px-2 py-[26px]">
      <div
        className="relative shrink-0 overflow-hidden rounded-[16px] bg-[#e5e5e5]"
        style={{ width: "100%", height: IMG_H }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={346}
          height={IMG_H}
          className="absolute -left-px -top-[10px] h-[calc(100%+10px)] w-[calc(100%+1px)] max-w-none bg-[#f5f5f5] object-cover object-top"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="w-full shrink-0 text-center text-[12px] font-medium leading-4 text-[#838383]">
        {caption}
      </p>
    </div>
  );
}

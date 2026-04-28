"use client";

type CasePhoneCardProps = {
  src: string;
  alt: string;
  caption: string;
  /** Figma finance column: outer 260×400, inner phone 156×328 */
  wide?: boolean;
};

const PHONE_W = 156;
const PHONE_H = 328;
const CARD_ROUND = "rounded-[26px]";
const IMG_ROUND = "rounded-[16px]";

function hasVisibleCaption(caption: string) {
  return caption.replace(/\u00a0/g, " ").trim().length > 0;
}

function PhoneScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-[#f5f5f5] ${IMG_ROUND}`}
      style={{ width: PHONE_W, height: PHONE_H }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={PHONE_W}
        height={PHONE_H}
        className="absolute inset-0 size-full bg-[#f5f5f5] object-cover object-center"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export function CasePhoneCard({ src, alt, caption, wide }: CasePhoneCardProps) {
  if (wide) {
    return (
      <div
        className={`flex snap-start flex-none shrink-0 flex-col items-center justify-center gap-2 bg-[#f5f5f5] ${CARD_ROUND}`}
        style={{ width: 260, minWidth: 260, height: 400 }}
      >
        <PhoneScreen src={src} alt={alt} />
        {hasVisibleCaption(caption) ? (
          <p className="w-full shrink-0 px-1 text-center text-[12px] font-medium leading-4 text-[#838383]">
            {caption}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`flex snap-start flex-none shrink-0 flex-col items-center justify-center gap-2 bg-[#f5f5f5] ${CARD_ROUND}`}
      style={{ width: 260, minWidth: PHONE_W, height: 400 }}
    >
      <PhoneScreen src={src} alt={alt} />
      {hasVisibleCaption(caption) ? (
        <p className="w-full shrink-0 px-1 text-center text-[12px] font-medium leading-4 text-[#838383]">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

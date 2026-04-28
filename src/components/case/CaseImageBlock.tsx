import Image from "next/image";

type CaseImageBlockProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function CaseImageBlock({
  src,
  alt,
  width,
  height,
  className = "",
  priority,
}: CaseImageBlockProps) {
  return (
    <div className={`relative size-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        sizes="(max-width: 402px) 100vw, 362px"
        priority={priority}
      />
    </div>
  );
}

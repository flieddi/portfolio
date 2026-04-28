/** Replace via `.env.local` — see `.env.example` */
export const links = {
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "mailto:",
  cv: process.env.NEXT_PUBLIC_CV_URL ?? "#",
} as const;

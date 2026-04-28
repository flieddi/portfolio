"use client";

export function ScrollToTopFab() {
  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => {
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="fixed bottom-20 right-5 z-[55] flex size-[52px] items-center justify-center rounded-full bg-[#F7F7F9] shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-opacity hover:opacity-90 active:opacity-80"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0 text-[#9C9C9C]"
        aria-hidden
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

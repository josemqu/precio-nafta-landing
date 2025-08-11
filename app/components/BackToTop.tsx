"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Subir arriba"
      className={`fixed bottom-6 right-6 z-[60] transition-opacity duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } rounded-full shadow-lg bg-brand-accent hover:bg-primary-600 text-white p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 dark:focus:ring-offset-brand-primary`}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
}

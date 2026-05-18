import { useEffect, useState } from "react";
import { X } from "lucide-react";
import promoImage from "@/assets/app-promo-banner.png";

const STORAGE_KEY = "dino-app-promo-dismissed";

const AppPromoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Download the Dino Initiative app"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 backdrop-blur-sm animate-in fade-in duration-300 sm:items-center"
      onClick={close}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>
        <a
          href="https://apps.apple.com/us/app/dino-initiative/id6763940737"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Dino Initiative on the App Store"
          className="block"
        >
          <img
            src={promoImage}
            alt="Dino Initiative — a small companion for everyday life. Now available on iPhone."
            className="block h-auto w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default AppPromoPopup;

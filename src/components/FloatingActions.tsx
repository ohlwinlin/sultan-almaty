import { MessageCircle, Instagram } from "lucide-react";

const WA = "https://wa.me/77079008899";
const IG = "https://instagram.com/cafe_alsultan";

export function FloatingActions() {
  return (
    <>
      {/* Top-right social icons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <a
          href={IG}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="grid h-10 w-10 place-items-center rounded-full bg-burgundy/80 text-cream backdrop-blur-md transition hover:bg-gold hover:text-burgundy-deep"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
      </a>
    </>
  );
}

import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingIcons() {
  return (
    <>
      {/* Left: Call Button — Rose Gold styling */}
      <a
        href="tel:07081078910"
        data-ocid="floating.call_button"
        aria-label="Call Magic Moon Beauty care & Spa"
        className="fixed left-4 z-50 flex items-center justify-center rounded-full transition-smooth"
        style={{
          bottom: "5rem",
          width: "52px",
          height: "52px",
          backgroundColor: "#1a1a1a",
          color: "#b76e79",
          border: "2px solid #b76e79",
          boxShadow: "0 4px 20px rgba(183,110,121,0.35)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.12)";
          el.style.background = "linear-gradient(135deg, #b76e79, #d6b36a)";
          el.style.color = "#fff";
          el.style.borderColor = "transparent";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.background = "#1a1a1a";
          el.style.color = "#b76e79";
          el.style.borderColor = "#b76e79";
        }}
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
      </a>

      {/* Right: WhatsApp Button — standard WhatsApp green */}
      <a
        href="https://wa.me/917081078910"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp_button"
        aria-label="Chat on WhatsApp with Magic Moon Spa"
        className="fixed right-4 z-50 flex items-center justify-center rounded-full transition-smooth"
        style={{
          bottom: "5rem",
          width: "52px",
          height: "52px",
          backgroundColor: "#25D366",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.12)";
          el.style.backgroundColor = "#1da851";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.backgroundColor = "#25D366";
        }}
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
    </>
  );
}

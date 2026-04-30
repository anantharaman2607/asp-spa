import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingIcons() {
  return (
    <>
      {/* Left: Call Button — dark green tinted with gold icon */}
      <a
        href="tel:7200245009"
        data-ocid="floating.call_button"
        aria-label="Call ASP Spa"
        className="fixed left-4 z-50 flex items-center justify-center rounded-full transition-smooth shadow-gold"
        style={{
          bottom: "5rem",
          width: "52px",
          height: "52px",
          backgroundColor: "#1a3a2a",
          color: "#d4af37",
          border: "2px solid #d4af37",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1.12)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#d4af37";
          (e.currentTarget as HTMLAnchorElement).style.color = "#111";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#1a3a2a";
          (e.currentTarget as HTMLAnchorElement).style.color = "#d4af37";
        }}
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
      </a>

      {/* Right: WhatsApp Button — keep standard WhatsApp green */}
      <a
        href="https://wa.me/917200245009"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp_button"
        aria-label="Chat on WhatsApp"
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
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "scale(1.12)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#1da851";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#25D366";
        }}
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const serviceLinks = [
  "Hair Styling",
  "Hair Spa",
  "Facial Treatment",
  "Bridal Makeup",
  "Body Massage",
  "Aromatherapy",
  "Skin Care",
  "Foot Reflexology",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark" style={{ color: "#c0b090" }}>
      {/* Rose Gold divider top */}
      <div className="gold-divider" />

      {/* 4-Column Grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <Link to="/" className="block mb-4">
              <span
                className="gradient-rose-text font-display text-2xl italic font-semibold block"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Magic Moon
              </span>
              <span
                className="text-xs tracking-[0.2em] uppercase block mt-0.5"
                style={{ color: "#d6b36a" }}
              >
                Beauty care &amp; Spa
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#9a8a7a" }}
            >
              Magic Moon Beauty care &amp; Spa is Pondicherry's premier luxury
              salon, beauty &amp; wellness destination. We blend expert beauty
              treatments with a relaxing spa experience — all in one elegant
              space.
            </p>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#7a6a5a" }}
            >
              <Clock
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "#b76e79" }}
              />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
            <div
              className="flex items-center gap-2 text-xs mt-1"
              style={{ color: "#7a6a5a" }}
            >
              <Clock
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "#b76e79" }}
              />
              <span>Sunday: 10:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              className="font-display text-xl mb-5 tracking-wide"
              style={{ color: "#d6b36a" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                    className="flex items-center gap-2 text-sm transition-smooth"
                    style={{ color: "#9a8a7a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#b76e79";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#9a8a7a";
                    }}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#b76e79" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4
              className="font-display text-xl mb-5 tracking-wide"
              style={{ color: "#d6b36a" }}
            >
              Our Services
            </h4>
            <ul className="space-y-2 mb-6">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-sm transition-smooth"
                    style={{ color: "#9a8a7a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#b76e79";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#9a8a7a";
                    }}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "#b76e79" }}
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              data-ocid="footer.book_button"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded transition-smooth gradient-rose-gold text-white shadow-roseglow hover:opacity-90"
            >
              Book Appointment
            </Link>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4
              className="font-display text-xl mb-5 tracking-wide"
              style={{ color: "#d6b36a" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#b76e79" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9a8a7a" }}
                >
                  No 182, 1st Floor, Chetty St,
                  <br />
                  Puducherry – 605001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#b76e79" }}
                />
                <a
                  href="tel:07081078910"
                  className="text-sm transition-smooth"
                  style={{ color: "#9a8a7a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#b76e79";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#9a8a7a";
                  }}
                >
                  070810 78910
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#25D366" }}
                />
                <a
                  href="https://wa.me/917081078910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-smooth"
                  style={{ color: "#9a8a7a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#25D366";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#9a8a7a";
                  }}
                >
                  WhatsApp: 070810 78910
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/917081078910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth border"
                style={{
                  backgroundColor: "rgba(183,110,121,0.1)",
                  borderColor: "rgba(183,110,121,0.3)",
                  color: "#b76e79",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#b76e79";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(183,110,121,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#b76e79";
                }}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:07081078910"
                aria-label="Call us"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth border"
                style={{
                  backgroundColor: "rgba(214,179,106,0.1)",
                  borderColor: "rgba(214,179,106,0.3)",
                  color: "#d6b36a",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#d6b36a";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(214,179,106,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#d6b36a";
                }}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Map Embed */}
            <div
              className="mt-5 rounded overflow-hidden border"
              style={{ borderColor: "rgba(183,110,121,0.25)" }}
            >
              <iframe
                title="Magic Moon Beauty care & Spa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5!2d79.8384!3d11.9346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361f54d3c2c23%3A0x4e0a4f3a4b2c1d0e!2sChetty%20St%2C%20Puducherry%2C%20605001!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(183,110,121,0.18)" }}
      >
        <div
          className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "#6a5a4a" }}
        >
          <p>© {year} Magic Moon Beauty care &amp; Spa. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "magic-moon-spa")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:underline"
              style={{ color: "#b76e79" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

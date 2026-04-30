import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const serviceLinks = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Aromatherapy",
  "Facial Treatment",
  "Body Scrub & Wrap",
  "Bridal Packages",
  "Hair Care",
  "Nail Art & Manicure",
  "Waxing & Threading",
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
    <footer className="footer-dark text-[#c8d8cc]">
      {/* Gold divider top */}
      <div className="gold-divider" />

      {/* 4-Column Grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="ASP Spa"
                className="h-12 w-auto object-contain mb-4 brightness-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#8aab96] mb-4">
              ASP Spa is Pondicherry's premier unisex salon &amp; bridal studio.
              We offer a sanctuary of luxury wellness, blending ancient healing
              traditions with modern spa therapies.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6b8f78]">
              <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Mon–Sat: 9:00 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6b8f78] mt-1">
              <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>Sunday: 10:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-sm text-[#8aab96] hover:text-gold transition-smooth"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-[#8aab96] hover:text-gold transition-smooth"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              data-ocid="footer.book_button"
              className="inline-block bg-gold hover:bg-gold-dark text-[#111] text-sm font-semibold px-5 py-2.5 rounded transition-smooth shadow-gold"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#8aab96] leading-relaxed">
                  1st Floor, 155, Needarajapaiyer St,
                  <br />
                  MG Road Area, Puducherry 605001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:7200245009"
                  className="text-sm text-[#8aab96] hover:text-gold transition-smooth"
                >
                  72002 45009
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/917200245009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8aab96] hover:text-gold transition-smooth"
                >
                  WhatsApp: 72002 45009
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-5 rounded overflow-hidden border border-[#2d5c3f]">
              <iframe
                title="ASP Spa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.823!2d79.832!3d11.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU2JzAyLjQiTiA3OcKwNDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
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
      <div className="border-t border-[#1e4a30]">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5a7a64]">
          <p>© {year} ASP Spa &amp; Bridal Studio. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "asp-spa")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

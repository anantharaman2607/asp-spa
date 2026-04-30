import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="navbar-dark sticky top-0 z-40 shadow-luxury">
      {/* Row 1: Logo + Contact Info */}
      <div className="border-b border-[#2d5c3f]">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-ocid="nav.logo_link">
            <img
              src="/assets/images/logo.png"
              alt="ASP Spa Logo"
              className="h-14 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:7200245009"
              data-ocid="nav.phone_link"
              className="flex items-center gap-2 text-sm text-[#c8d8cc] hover:text-gold transition-smooth"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>72002 45009</span>
            </a>
            <a
              href="https://wa.me/917200245009"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp_link"
              className="flex items-center gap-2 text-sm text-[#c8d8cc] hover:text-gold transition-smooth"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              to="/contact"
              data-ocid="nav.book_button"
              className="bg-gold hover:bg-gold-dark text-[#111] text-sm font-semibold px-5 py-2 rounded transition-smooth shadow-gold"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile: Book + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/contact"
              className="bg-gold text-[#111] text-xs font-semibold px-3 py-1.5 rounded transition-smooth"
            >
              BOOK
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.mobile_menu_toggle"
              className="text-[#c8d8cc] hover:text-gold transition-smooth p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Nav Links */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}_link`}
                  className={`relative px-5 py-3.5 text-sm font-medium tracking-wide transition-smooth ${
                    isActive ? "text-gold" : "text-[#adc5b4] hover:text-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[#2d5c3f]"
          style={{ backgroundColor: "#1f4530" }}
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  data-ocid={`nav.mobile_${link.label.toLowerCase().replace(" ", "_")}_link`}
                  className={`block px-4 py-3 text-sm font-medium rounded transition-smooth ${
                    isActive
                      ? "text-gold border-l-2 border-gold pl-5"
                      : "text-[#adc5b4] hover:text-gold"
                  }`}
                  style={isActive ? { backgroundColor: "#255038" } : undefined}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = "#255038";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = "";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 pb-2 border-t border-[#2d5c3f] mt-2 flex gap-4 px-4">
              <a
                href="tel:7200245009"
                className="flex items-center gap-2 text-sm text-[#c8d8cc]"
              >
                <Phone className="w-4 h-4 text-gold" />
                72002 45009
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

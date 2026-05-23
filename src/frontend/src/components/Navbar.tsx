import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Top Accent Bar */}
      <div
        className="accent-bar overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: scrolled ? "0" : "40px",
          opacity: scrolled ? 0 : 1,
        }}
      >
        <div
          className="h-10 flex items-center justify-between px-6"
          style={{
            background:
              "linear-gradient(90deg, #b76e79 0%, #c4826a 40%, #d6b36a 100%)",
          }}
        >
          <a
            href="tel:07081078910"
            data-ocid="nav.accentbar_phone"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-3 h-3" />
            <span className="text-xs tracking-widest uppercase font-medium">
              070810 78910
            </span>
          </a>
          <span
            className="hidden sm:block text-white/60 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            Luxury Beauty &amp; Spa • Pondicherry
          </span>
          <a
            href="https://wa.me/917081078910"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.accentbar_whatsapp"
            className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200"
          >
            <MessageCircle className="w-3 h-3" />
            <span className="text-xs tracking-widest uppercase font-medium">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Main Navbar Row */}
      <nav
        className={`transition-all duration-400 ${
          scrolled ? "navbar-scrolled shadow-luxury" : "navbar-dark"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="nav.logo_link"
              className="flex-shrink-0 group"
            >
              <div className="leading-none">
                <span
                  className="navbar-logo-text block text-2xl md:text-[1.75rem] italic font-semibold tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Magic Moon
                </span>
                <span
                  className="block text-[0.6rem] tracking-[0.32em] uppercase mt-0.5"
                  style={{ color: "#d6b36a", opacity: 0.9 }}
                >
                  Beauty care &amp; Spa
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links — Center */}
            <nav
              className="hidden md:flex items-center gap-0"
              aria-label="Main navigation"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.to ||
                  (link.to !== "/" && pathname.startsWith(link.to));
                return (
                  <span key={link.to} className="flex items-center">
                    <Link
                      to={link.to}
                      data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}_link`}
                      className={`nav-link relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                        isActive ? "nav-link-active" : "nav-link-idle"
                      }`}
                    >
                      {link.label}
                      {isActive && <span className="nav-active-bar" />}
                    </Link>
                    {/* Diamond separator — decorative */}
                    {index < navLinks.length - 1 && (
                      <span className="nav-diamond" aria-hidden="true">
                        ◆
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                data-ocid="nav.book_button"
                className="book-now-btn"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.mobile_menu_toggle"
              className="md:hidden flex items-center justify-center w-10 h-10 transition-smooth rounded-full"
              style={{ color: "#d6b36a" }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className="transition-all duration-300"
                style={{
                  transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: menuOpen ? "420px" : "0" }}
        >
          <div
            className="border-t"
            style={{
              backgroundColor: "rgba(17,17,17,0.97)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(183,110,121,0.2)",
            }}
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
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
                    className="mobile-nav-link"
                    style={{
                      color: isActive ? "#b76e79" : "#c0b090",
                      borderLeft: isActive
                        ? "3px solid #b76e79"
                        : "3px solid transparent",
                      background: isActive
                        ? "rgba(183,110,121,0.08)"
                        : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile contact row */}
              <div
                className="flex items-center gap-5 pt-4 mt-2 border-t"
                style={{ borderColor: "rgba(183,110,121,0.2)" }}
              >
                <a
                  href="tel:07081078910"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#d6b36a" }}
                >
                  <Phone className="w-4 h-4" style={{ color: "#b76e79" }} />
                  <span>070810 78910</span>
                </a>
                <a
                  href="https://wa.me/917081078910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              {/* Mobile Book CTA */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.mobile_book_button"
                className="book-now-btn mt-3 text-center block"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}

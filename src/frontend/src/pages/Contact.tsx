import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

// ── helpers ──────────────────────────────────────────────────────────
function focusRoseGold(el: HTMLElement) {
  el.style.borderColor = "#b76e79";
  el.style.boxShadow = "0 0 0 2px rgba(183,110,121,0.18)";
}
function blurReset(el: HTMLElement) {
  el.style.borderColor = "rgba(183,110,121,0.25)";
  el.style.boxShadow = "none";
}

const FIELD_STYLE: React.CSSProperties = {
  backgroundColor: "#1a1a1a",
  border: "1px solid rgba(183,110,121,0.25)",
  color: "#ffffff",
  borderRadius: "6px",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

// ── ContactCard ──────────────────────────────────────────────────────
interface ContactCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  ocid: string;
}

function ContactCard({
  icon,
  iconBg,
  title,
  children,
  href,
  ocid,
}: ContactCardProps) {
  const inner = (
    <div
      data-ocid={ocid}
      className="flex items-start gap-4 p-5 rounded-xl transition-all duration-300"
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(183,110,121,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p
          className="text-xs uppercase tracking-widest mb-1 font-medium"
          style={{ color: "#d6b36a" }}
        >
          {title}
        </p>
        <div style={{ color: "#cccccc" }} className="text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.01] transition-transform duration-200"
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="hover:scale-[1.01] transition-transform duration-200">
      {inner}
    </div>
  );
}

// ── CTAButton ────────────────────────────────────────────────────────
interface CTAButtonProps {
  href: string;
  ocid: string;
  gradient: string;
  children: React.ReactNode;
}
function CTAButton({ href, ocid, gradient, children }: CTAButtonProps) {
  return (
    <a
      href={href}
      data-ocid={ocid}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{ background: gradient }}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title =
      "Contact | Magic Moon Beauty care & Spa — Best Salon & Spa Pondicherry";
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  }

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        data-ocid="contact.header_section"
        className="relative h-80 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&h=500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17,17,17,0.72)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(183,110,121,0.12), transparent)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3 font-medium"
            style={{ color: "#d6b36a" }}
          >
            Get in Touch
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-light"
            style={{
              background: "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </h1>
          <div
            className="w-24 h-px mx-auto mt-5 mb-5"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b76e79, #d6b36a, transparent)",
            }}
          />
          <nav
            className="flex items-center justify-center gap-2 text-sm"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              data-ocid="contact.home_link"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "#999999" }}
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" style={{ color: "#b76e79" }} />
            <span style={{ color: "#d6b36a" }}>Contact</span>
          </nav>
        </div>
      </section>

      {/* ── Contact Info + Form ─────────────────────────────────────── */}
      <section
        data-ocid="contact.main_section"
        className="py-20"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: Info Cards */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] mb-3 font-medium"
                style={{ color: "#d6b36a" }}
              >
                Find Us
              </p>
              <h2 className="font-display text-4xl font-light mb-4 leading-snug text-white">
                Magic Moon Beauty care & Spa
              </h2>
              <div
                className="w-20 h-px mb-8"
                style={{
                  background: "linear-gradient(90deg, #b76e79, #d6b36a)",
                }}
              />

              <div className="space-y-4 mb-8">
                <ContactCard
                  ocid="contact.address_card"
                  icon={<MapPin className="w-5 h-5 text-white" />}
                  iconBg="linear-gradient(135deg, #b76e79, #9e5a64)"
                  title="Our Address"
                >
                  No 182, 1st Floor, Chetty St,
                  <br />
                  Puducherry – 605001,
                  <br />
                  Tamil Nadu, India
                </ContactCard>

                <ContactCard
                  ocid="contact.phone_card"
                  href="tel:07081078910"
                  icon={<Phone className="w-5 h-5 text-white" />}
                  iconBg="linear-gradient(135deg, #d6b36a, #b89040)"
                  title="Phone / Call Us"
                >
                  <span className="font-semibold" style={{ color: "#d6b36a" }}>
                    070810 78910
                  </span>
                  <br />
                  <span className="text-xs" style={{ color: "#888888" }}>
                    Tap to call us directly
                  </span>
                </ContactCard>

                <ContactCard
                  ocid="contact.whatsapp_card"
                  href="https://wa.me/917081078910"
                  icon={<SiWhatsapp className="w-5 h-5 text-white" />}
                  iconBg="linear-gradient(135deg, #25D366, #1da050)"
                  title="WhatsApp Chat"
                >
                  <span style={{ color: "#25D366" }} className="font-medium">
                    Chat on WhatsApp
                  </span>
                  <br />
                  <span className="text-xs" style={{ color: "#888888" }}>
                    +91 70810 78910
                  </span>
                </ContactCard>

                <ContactCard
                  ocid="contact.hours_card"
                  icon={<Clock className="w-5 h-5 text-white" />}
                  iconBg="linear-gradient(135deg, #b76e79, #d6b36a)"
                  title="Business Hours"
                >
                  <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                  <br />
                  <span>Sunday: 10:00 AM – 6:00 PM</span>
                </ContactCard>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <CTAButton
                  href="tel:07081078910"
                  ocid="contact.call_button"
                  gradient="linear-gradient(135deg, #b76e79, #9e5a64)"
                >
                  <Phone className="w-4 h-4" />
                  Click to Call
                </CTAButton>
                <CTAButton
                  href="https://wa.me/917081078910"
                  ocid="contact.whatsapp_button"
                  gradient="linear-gradient(135deg, #25D366, #1da050)"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Chat
                </CTAButton>
                <CTAButton
                  href="https://maps.google.com/?q=No+182+Chetty+St+Puducherry+605001"
                  ocid="contact.directions_button"
                  gradient="linear-gradient(135deg, #d6b36a, #b89040)"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </CTAButton>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] mb-3 font-medium"
                style={{ color: "#d6b36a" }}
              >
                Send a Message
              </p>
              <h2 className="font-display text-4xl font-light mb-4 text-white">
                Send Us a Message
              </h2>
              <div
                className="w-20 h-px mb-8"
                style={{
                  background: "linear-gradient(90deg, #b76e79, #d6b36a)",
                }}
              />

              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="rounded-xl p-10 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(183,110,121,0.12), rgba(214,179,106,0.12))",
                    border: "1px solid rgba(183,110,121,0.4)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                    }}
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-light mb-2 text-white">
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "#cccccc" }}>
                    Thank you for contacting Magic Moon Beauty care & Spa.
                    <br />
                    We'll get back to you within 1 hour to confirm your booking.
                  </p>
                </div>
              ) : (
                <form
                  data-ocid="contact.contact_form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#d6b36a" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        data-ocid="contact.name_input"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 text-sm focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => {
                          focusRoseGold(e.currentTarget);
                        }}
                        onBlur={(e) => {
                          blurReset(e.currentTarget);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#d6b36a" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        data-ocid="contact.phone_input"
                        placeholder="Your mobile number"
                        className="w-full px-4 py-3 text-sm focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => {
                          focusRoseGold(e.currentTarget);
                        }}
                        onBlur={(e) => {
                          blurReset(e.currentTarget);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#d6b36a" }}
                    >
                      Select Service *
                    </label>
                    <select
                      id="contact-service"
                      required
                      data-ocid="contact.service_select"
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={FIELD_STYLE}
                      onFocus={(e) => {
                        focusRoseGold(e.currentTarget);
                      }}
                      onBlur={(e) => {
                        blurReset(e.currentTarget);
                      }}
                    >
                      <option value="">Choose a service...</option>
                      <optgroup label="Salon Services">
                        <option>Hair Styling</option>
                        <option>Hair Spa</option>
                      </optgroup>
                      <optgroup label="Beauty Services">
                        <option>Facial Treatment</option>
                        <option>Bridal Makeup</option>
                        <option>Skin Care</option>
                      </optgroup>
                      <optgroup label="Spa & Massage">
                        <option>Body Massage</option>
                        <option>Aromatherapy</option>
                        <option>Foot Reflexology</option>
                        <option>Swedish Massage</option>
                        <option>Deep Tissue Massage</option>
                        <option>Thai Massage</option>
                        <option>Hot Stone Therapy</option>
                      </optgroup>
                      <optgroup label="Packages">
                        <option>Beauty Packages</option>
                        <option>Other</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-date"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#d6b36a" }}
                    >
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      data-ocid="contact.date_input"
                      className="w-full px-4 py-3 text-sm focus:outline-none"
                      style={{ ...FIELD_STYLE, colorScheme: "dark" }}
                      onFocus={(e) => {
                        focusRoseGold(e.currentTarget);
                      }}
                      onBlur={(e) => {
                        blurReset(e.currentTarget);
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#d6b36a" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      data-ocid="contact.message_textarea"
                      placeholder="Tell us about your requirements or any special requests..."
                      className="w-full px-4 py-3 text-sm focus:outline-none resize-none"
                      style={FIELD_STYLE}
                      onFocus={(e) => {
                        focusRoseGold(e.currentTarget);
                      }}
                      onBlur={(e) => {
                        blurReset(e.currentTarget);
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full py-4 rounded-lg text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)",
                      boxShadow: "0 4px 20px rgba(183,110,121,0.35)",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ──────────────────────────────────────────────── */}
      <section
        data-ocid="contact.map_section"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div
          className="py-4 px-6 flex items-center gap-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(183,110,121,0.15), rgba(214,179,106,0.1))",
            borderTop: "1px solid rgba(183,110,121,0.2)",
            borderBottom: "1px solid rgba(183,110,121,0.2)",
          }}
        >
          <MapPin className="w-4 h-4" style={{ color: "#b76e79" }} />
          <h2
            className="font-display text-lg font-light"
            style={{ color: "#d6b36a" }}
          >
            Find Us on the Map
          </h2>
          <span className="text-xs ml-2" style={{ color: "#888888" }}>
            No 182, Chetty St, Puducherry – 605001
          </span>
        </div>
        <iframe
          data-ocid="contact.map"
          title="Magic Moon Beauty care & Spa Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62615.02!2d79.8083!3d11.9340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361e8e24e66bf%3A0x4f3ef94fa0c7a9b!2sPuducherry%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(30%) contrast(1.05)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

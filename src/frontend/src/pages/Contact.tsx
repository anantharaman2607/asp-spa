import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const FIELD_STYLE = {
  backgroundColor: "#fff",
  border: "1px solid #c8d8c0",
  color: "#1a3a2a",
} as const;

function setFocusBorder(el: HTMLElement) {
  el.style.borderColor = "#d4af37";
}
function setBlurBorder(el: HTMLElement) {
  el.style.borderColor = "#c8d8c0";
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      {/* Page Header — dark forest green overlay */}
      <section
        data-ocid="contact.header_section"
        className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/gallery-5.dim_600x400.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a2a]/75" />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#faf7f0]">
            Contact Us
          </h1>
          <div className="gold-divider w-24 mx-auto mt-5" />
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#c8d8c0]">
            <Link to="/" className="hover:text-gold transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#6a9a7a]" />
            <span className="text-gold">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section — ivory background */}
      <section
        data-ocid="contact.main_section"
        className="py-20"
        style={{ backgroundColor: "#faf7f0" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: Info + Map */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
                Find Us
              </p>
              <h2
                className="font-display text-4xl font-light mb-5 leading-snug"
                style={{ color: "#1a3a2a" }}
              >
                Visit ASP Spa in Pondicherry
              </h2>
              <div className="gold-divider w-20 mb-8" />

              {/* Contact Cards */}
              <div className="space-y-5 mb-8">
                {/* Address Card */}
                <div
                  data-ocid="contact.address_card"
                  className="flex items-start gap-4 p-5 rounded-lg"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #d4af3740",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#1a3a2a",
                      border: "1px solid #d4af3760",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm mb-1"
                      style={{ color: "#1a3a2a" }}
                    >
                      Our Address
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#4a6a58" }}
                    >
                      1st Floor, 155, Needarajapaiyer St,
                      <br />
                      MG Road Area, Puducherry 605001,
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div
                  data-ocid="contact.phone_card"
                  className="flex items-center gap-4 p-5 rounded-lg"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #d4af3740",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#1a3a2a",
                      border: "1px solid #d4af3760",
                    }}
                  >
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm mb-1"
                      style={{ color: "#1a3a2a" }}
                    >
                      Phone / Call Us
                    </p>
                    <a
                      href="tel:7200245009"
                      className="text-sm transition-smooth hover:text-gold"
                      style={{ color: "#4a6a58" }}
                    >
                      72002 45009
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/917200245009"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_card"
                  className="flex items-center gap-4 p-5 rounded-lg transition-smooth"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #25D36640",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#25D36680";
                    e.currentTarget.style.backgroundColor = "#f0fdf4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#25D36640";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#25D366]/15 border border-[#25D366]/30">
                    <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm mb-1"
                      style={{ color: "#1a3a2a" }}
                    >
                      WhatsApp Enquiry
                    </p>
                    <p className="text-sm" style={{ color: "#4a6a58" }}>
                      Chat with us:{" "}
                      <span className="text-[#25D366]">+91 72002 45009</span>
                    </p>
                  </div>
                </a>

                {/* Hours Card */}
                <div
                  data-ocid="contact.hours_card"
                  className="flex items-center gap-4 p-5 rounded-lg"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #d4af3740",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#1a3a2a",
                      border: "1px solid #d4af3760",
                    }}
                  >
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm mb-1"
                      style={{ color: "#1a3a2a" }}
                    >
                      Opening Hours
                    </p>
                    <p className="text-sm" style={{ color: "#4a6a58" }}>
                      Mon – Sat: 9:00 AM – 9:00 PM
                    </p>
                    <p className="text-sm" style={{ color: "#4a6a58" }}>
                      Sunday: 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map with dark green header bar */}
              <div
                data-ocid="contact.map"
                className="rounded-xl overflow-hidden shadow-luxury"
                style={{ border: "1px solid #d4af3730" }}
              >
                <div
                  className="px-5 py-3 flex items-center gap-2"
                  style={{ backgroundColor: "#1a3a2a" }}
                >
                  <MapPin className="w-4 h-4 text-gold" />
                  <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: "#d4af37" }}
                  >
                    Our Location
                  </span>
                </div>
                <iframe
                  title="ASP Spa Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.823!2d79.83198!3d11.93404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361e8e24e66bf%3A0x0!2zMTHCsDU2JzAyLjQiTiA3OcKwNDknNTUuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
                Send a Message
              </p>
              <h2
                className="font-display text-4xl font-light mb-5"
                style={{ color: "#1a3a2a" }}
              >
                Book an Appointment
              </h2>
              <div className="gold-divider w-20 mb-8" />

              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="rounded-xl p-10 text-center"
                  style={{
                    backgroundColor: "#e8f5ec",
                    border: "1px solid #1a3a2a40",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#1a3a2a" }}
                  >
                    <Send className="w-7 h-7 text-gold" />
                  </div>
                  <h3
                    className="font-display text-2xl font-light mb-2"
                    style={{ color: "#1a3a2a" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "#2d5a3d" }}>
                    Thank you for contacting ASP Spa. We'll get back to you
                    within 1 hour to confirm your booking.
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
                        style={{ color: "#4a6a58" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        data-ocid="contact.name_input"
                        placeholder="Your full name"
                        className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => setFocusBorder(e.currentTarget)}
                        onBlur={(e) => setBlurBorder(e.currentTarget)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#4a6a58" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        data-ocid="contact.phone_input"
                        placeholder="Your mobile number"
                        className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => setFocusBorder(e.currentTarget)}
                        onBlur={(e) => setBlurBorder(e.currentTarget)}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#4a6a58" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      data-ocid="contact.email_input"
                      placeholder="your@email.com (optional)"
                      className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                      style={FIELD_STYLE}
                      onFocus={(e) => setFocusBorder(e.currentTarget)}
                      onBlur={(e) => setBlurBorder(e.currentTarget)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#4a6a58" }}
                    >
                      Select Service *
                    </label>
                    <select
                      id="contact-service"
                      required
                      data-ocid="contact.service_select"
                      className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                      style={FIELD_STYLE}
                      onFocus={(e) => setFocusBorder(e.currentTarget)}
                      onBlur={(e) => setBlurBorder(e.currentTarget)}
                    >
                      <option value="">Choose a service...</option>
                      <option>Swedish Massage</option>
                      <option>Deep Tissue Massage</option>
                      <option>Aromatherapy</option>
                      <option>Luxury Facial</option>
                      <option>Body Scrub &amp; Wrap</option>
                      <option>Bridal Package</option>
                      <option>Hair Care Treatment</option>
                      <option>Nail Art &amp; Manicure</option>
                      <option>Waxing &amp; Threading</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-date"
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#4a6a58" }}
                      >
                        Preferred Date
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        data-ocid="contact.date_input"
                        className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => setFocusBorder(e.currentTarget)}
                        onBlur={(e) => setBlurBorder(e.currentTarget)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-time"
                        className="block text-xs uppercase tracking-widest mb-2"
                        style={{ color: "#4a6a58" }}
                      >
                        Preferred Time
                      </label>
                      <select
                        id="contact-time"
                        data-ocid="contact.time_select"
                        className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none"
                        style={FIELD_STYLE}
                        onFocus={(e) => setFocusBorder(e.currentTarget)}
                        onBlur={(e) => setBlurBorder(e.currentTarget)}
                      >
                        <option value="">Any time</option>
                        <option>09:00 AM</option>
                        <option>11:00 AM</option>
                        <option>01:00 PM</option>
                        <option>03:00 PM</option>
                        <option>05:00 PM</option>
                        <option>07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "#4a6a58" }}
                    >
                      Message / Special Requests
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      data-ocid="contact.message_textarea"
                      placeholder="Any specific requirements, health conditions, or questions..."
                      className="w-full rounded px-4 py-3 text-sm transition-smooth focus:outline-none resize-none"
                      style={FIELD_STYLE}
                      onFocus={(e) => setFocusBorder(e.currentTarget)}
                      onBlur={(e) => setBlurBorder(e.currentTarget)}
                    />
                  </div>

                  {/* Submit — dark green bg with gold text */}
                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full font-semibold py-4 rounded transition-smooth shadow-gold tracking-widest text-sm uppercase flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#1a3a2a", color: "#d4af37" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2d5a3d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#1a3a2a";
                    }}
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>

                  {/* Divider */}
                  <div className="relative flex items-center py-2">
                    <div
                      className="flex-1 border-t"
                      style={{ borderColor: "#c8d8c0" }}
                    />
                    <span
                      className="px-4 text-xs uppercase tracking-wider"
                      style={{ color: "#6a9a7a" }}
                    >
                      Or
                    </span>
                    <div
                      className="flex-1 border-t"
                      style={{ borderColor: "#c8d8c0" }}
                    />
                  </div>

                  {/* WhatsApp button — gold bg with dark green text */}
                  <a
                    href="https://wa.me/917200245009?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20ASP%20Spa%20Pondicherry."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_button"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded transition-smooth text-sm font-semibold tracking-wider uppercase"
                    style={{
                      backgroundColor: "#d4af37",
                      color: "#1a3a2a",
                      boxShadow: "0 4px 14px rgba(212,175,55,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#b8962e";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#d4af37";
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

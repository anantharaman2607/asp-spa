import { Link } from "@tanstack/react-router";
import { ChevronRight, Flower2, Phone, Sparkles, Star } from "lucide-react";

const featuredServices = [
  {
    icon: <Flower2 className="w-10 h-10 text-gold" />,
    title: "Swedish Massage",
    desc: "Melt away tension with our signature full-body Swedish massage. Warm oils, long gliding strokes, and expert techniques restore your body's natural balance.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-gold" />,
    title: "Luxury Facials",
    desc: "Reveal radiant skin with our advanced facial treatments. From deep cleansing to gold-infused glow facials, we tailor every session to your skin's unique needs.",
  },
  {
    icon: <Star className="w-10 h-10 text-gold" />,
    title: "Bridal Packages",
    desc: "Complete bridal beauty journeys for your most special day. Hair, makeup, mehndi, skincare & more — curated to make you shine from head to toe.",
  },
];

const galleryPreview = [
  "/assets/generated/gallery-1.dim_600x400.jpg",
  "/assets/generated/gallery-2.dim_600x400.jpg",
  "/assets/generated/gallery-3.dim_600x400.jpg",
  "/assets/generated/gallery-4.dim_600x400.jpg",
  "/assets/generated/gallery-5.dim_600x400.jpg",
  "/assets/generated/gallery-6.dim_600x400.jpg",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/hero-spa.dim_1920x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark forest green overlay */}
        <div className="absolute inset-0 bg-[#1a3a2a]/70" />

        {/* Dark green bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(26,58,42,0.85), transparent)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-body">
            Premium Spa &amp; Bridal Studio — Pondicherry
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-[#faf7f0] leading-tight mb-6">
            Recover. Recharge.{" "}
            <span className="gradient-gold-text italic">Reconnect.</span>
          </h1>
          <p className="text-lg text-[#c8d8c0] font-light mb-10 leading-relaxed">
            Experience the finest spa and salon treatments in Pondicherry. Where
            ancient healing traditions meet modern luxury wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="home.hero_book_button"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-[#1a3a2a] font-semibold px-8 py-3.5 rounded transition-smooth shadow-gold text-sm tracking-wide"
            >
              Book Your Experience
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:7200245009"
              data-ocid="home.hero_call_button"
              className="inline-flex items-center justify-center gap-2 border border-gold/60 text-gold hover:bg-gold/10 font-medium px-8 py-3.5 rounded transition-smooth text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              72002 45009
            </a>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#1a3a2a]/85 border border-gold/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
          <span className="text-[#faf7f0] text-xs ml-1">
            5-Star Rated in Pondicherry
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section
        data-ocid="home.services_section"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            What We Offer
          </p>
          <h2 className="section-title">Premium Services</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle font-body text-sm">
            From restorative massages to transformative bridal packages — every
            service crafted for your ultimate well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredServices.map((service, idx) => (
              <div
                key={service.title}
                data-ocid={`home.service_card.${idx + 1}`}
                className="service-card group animate-fade-up hover:border-gold"
                style={{
                  animationDelay: `${idx * 0.15}s`,
                  backgroundColor: "#faf7f0",
                }}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-smooth"
                    style={{ backgroundColor: "#1a3a2a" }}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-light mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  data-ocid={`home.service_learn_more.${idx + 1}`}
                  className="inline-flex items-center gap-1 text-gold text-sm hover:gap-2 transition-smooth font-medium"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              data-ocid="home.all_services_button"
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-[#1a3a2a] px-8 py-3 rounded transition-smooth text-sm font-medium"
            >
              View All 9 Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section data-ocid="home.gallery_section" className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Our Space &amp; Work
          </p>
          <h2 className="section-title">Elegant Gallery</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle font-body text-sm">
            A glimpse into the serene world of ASP Spa — where luxury meets
            tranquility.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryPreview.map((src, idx) => (
              <div
                key={src}
                data-ocid={`home.gallery_item.${idx + 1}`}
                className="gallery-item aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`ASP Spa spa and wellness scene ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              data-ocid="home.view_gallery_button"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-[#1a3a2a] px-8 py-3 rounded transition-smooth text-sm font-semibold"
            >
              View Full Gallery <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section data-ocid="home.booking_section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Reserve Your Spot
          </p>
          <h2 className="section-title">Book an Appointment</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle font-body text-sm">
            Select your preferred service and time. We'll confirm your booking
            within 1 hour.
          </p>

          <BookingForm />
        </div>
      </section>

      {/* About Teaser — dark green background */}
      <section
        data-ocid="home.about_section"
        className="py-20"
        style={{ backgroundColor: "#1a3a2a" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl font-light mb-5 leading-snug text-[#faf7f0]">
                A Sanctuary of Luxury Wellness in Pondicherry
              </h2>
              <div className="gold-divider w-20 mb-6" />
              <p className="text-sm text-[#c8d8c0] leading-relaxed mb-4">
                Nestled in the heart of Pondicherry, ASP Spa offers a curated
                escape from the everyday. Our team of expert therapists and
                beauty professionals bring years of training in both traditional
                Indian and contemporary spa techniques.
              </p>
              <p className="text-sm text-[#c8d8c0] leading-relaxed mb-8">
                From the moment you step through our doors, you're welcomed into
                a world of refined elegance — warm gold tones, aromatic oils,
                and the quiet luxury that defines every ASP experience.
              </p>
              <Link
                to="/about"
                data-ocid="home.learn_more_button"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-[#1a3a2a] px-6 py-3 rounded transition-smooth text-sm font-medium"
              >
                Discover Our Story <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="gallery-item aspect-[3/4]">
                <img
                  src="/assets/generated/gallery-5.dim_600x400.jpg"
                  alt="Spa reception"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="gallery-item aspect-[3/4] mt-8">
                <img
                  src="/assets/generated/gallery-3.dim_600x400.jpg"
                  alt="Facial treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BookingForm() {
  return (
    <form
      data-ocid="home.booking_form"
      className="max-w-2xl mx-auto border border-gold/25 rounded-xl p-8 shadow-luxury"
      style={{ backgroundColor: "#faf7f0" }}
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Dark green heading bar */}
      <div
        className="rounded-lg px-6 py-3 mb-7 text-center"
        style={{ backgroundColor: "#1a3a2a" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-gold font-body">
          Reserve Your Experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="booking-service"
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body"
          >
            Select Service
          </label>
          <select
            id="booking-service"
            data-ocid="home.booking_service_select"
            className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-smooth"
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
          </select>
        </div>
        <div>
          <label
            htmlFor="booking-name"
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body"
          >
            Your Name
          </label>
          <input
            id="booking-name"
            type="text"
            data-ocid="home.booking_name_input"
            placeholder="Enter your name"
            className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-smooth"
          />
        </div>
        <div>
          <label
            htmlFor="booking-date"
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body"
          >
            Preferred Date
          </label>
          <input
            id="booking-date"
            type="date"
            data-ocid="home.booking_date_input"
            className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-smooth"
          />
        </div>
        <div>
          <label
            htmlFor="booking-time"
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body"
          >
            Preferred Time
          </label>
          <select
            id="booking-time"
            data-ocid="home.booking_time_select"
            className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-smooth"
          >
            <option value="">Choose a time...</option>
            <option>09:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>02:00 PM</option>
            <option>03:00 PM</option>
            <option>04:00 PM</option>
            <option>05:00 PM</option>
            <option>06:00 PM</option>
            <option>07:00 PM</option>
            <option>08:00 PM</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="booking-phone"
            className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-body"
          >
            Phone Number
          </label>
          <input
            id="booking-phone"
            type="tel"
            data-ocid="home.booking_phone_input"
            placeholder="Your mobile number"
            className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-smooth"
          />
        </div>
      </div>
      <button
        type="submit"
        data-ocid="home.booking_submit_button"
        className="w-full mt-6 bg-gold hover:bg-gold-dark text-[#1a3a2a] font-semibold py-4 rounded transition-smooth shadow-gold tracking-widest text-sm uppercase"
      >
        Confirm Booking
      </button>
      <p className="text-center text-xs text-muted-foreground mt-3">
        Or WhatsApp us at{" "}
        <a
          href="https://wa.me/917200245009"
          className="text-gold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          72002 45009
        </a>
      </p>
    </form>
  );
}

import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  Heart,
  MessageCircle,
  Package,
  Phone,
  Quote,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Hair Styling",
    desc: "Expert cuts, blowouts, and styling crafted for your unique beauty.",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Hair Spa",
    desc: "Deep nourishing hair spa treatments to restore strength and shine.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Facial Treatment",
    desc: "Rejuvenating facials using premium products for radiant, glowing skin.",
    img: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Bridal Makeup",
    desc: "Flawless bridal looks that make you shine on your most special day.",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Body Massage",
    desc: "Full-body therapeutic massages to melt tension and restore balance.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Aromatherapy",
    desc: "Sensory healing with pure essential oils for deep mind-body relaxation.",
    img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Skin Care",
    desc: "Advanced skin care therapies for clarity, hydration, and youthful glow.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Foot Reflexology",
    desc: "Reviving foot reflexology to relieve stress and boost circulation.",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Beauty Packages",
    desc: "Curated luxury beauty packages designed for total pampering and care.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Certified Beauty Experts",
    desc: "Our professionals hold top certifications in beauty and wellness therapies.",
  },
  {
    icon: Star,
    title: "Professional Therapists",
    desc: "Skilled and experienced therapists dedicated to your total well-being.",
  },
  {
    icon: Shield,
    title: "Hygienic Environment",
    desc: "Immaculate hygiene standards maintained across every treatment area.",
  },
  {
    icon: Sparkles,
    title: "Premium Beauty Products",
    desc: "Only luxury-grade, skin-safe products used in all our treatments.",
  },
  {
    icon: Package,
    title: "Affordable Luxury Packages",
    desc: "Premium spa experiences crafted to suit every lifestyle and budget.",
  },
  {
    icon: Heart,
    title: "Relaxing Ambience",
    desc: "A serene, peaceful sanctuary designed for complete mind-body escape.",
  },
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=600&h=400&q=80",
];

const TESTIMONIALS = [
  {
    text: "Best spa experience in Pondicherry! The ambience is absolutely divine and the therapists are world-class.",
    name: "Priya S.",
    rating: 5,
  },
  {
    text: "Professional staff, relaxing treatments, and a truly luxurious atmosphere. I visit every month!",
    name: "Divya K.",
    rating: 5,
  },
  {
    text: "Luxury beauty care at very affordable pricing. The bridal package was absolutely stunning. Highly recommended!",
    name: "Anjali R.",
    rating: 5,
  },
];

const BOOKING_SERVICES = [
  "Hair Styling",
  "Hair Spa",
  "Facial Treatment",
  "Bridal Makeup",
  "Body Massage",
  "Aromatherapy",
  "Skin Care",
  "Foot Reflexology",
  "Beauty Packages",
];

// ─── Reusable styles ──────────────────────────────────────────────────────────

const roseGoldGrad = "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)";

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <BookingFormSection />
      <CTASection />
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      data-ocid="home.hero_section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.65)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, rgba(183,110,121,0.18), transparent)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-xs uppercase tracking-[0.4em] mb-5 font-body"
          style={{ color: "#d6b36a" }}
        >
          Magic Moon Beauty care &amp; Spa · Pondicherry
        </p>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            background: roseGoldGrad,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Relax | Refresh | Rejuvenate
        </h1>

        <p
          className="text-lg md:text-xl italic font-light mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.88)" }}
        >
          Luxury Salon, Beauty &amp; Spa Experience in Pondicherry
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            data-ocid="home.hero_book_button"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: roseGoldGrad,
              color: "#111111",
              boxShadow: "0 4px 20px rgba(183,110,121,0.4)",
            }}
            onClick={() => {
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Appointment
            <ChevronRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/917081078910"
            data-ocid="home.hero_whatsapp_button"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              border: "1.5px solid #b76e79",
              color: "#b76e79",
              background: "rgba(183,110,121,0.08)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Now
          </a>
        </div>

        <div
          className="inline-flex items-center gap-2 mt-12 px-5 py-2.5 rounded-full backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(183,110,121,0.35)",
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5"
              style={{ color: "#d6b36a", fill: "#d6b36a" }}
            />
          ))}
          <span className="text-white/80 text-xs ml-1">
            5-Star Rated in Pondicherry
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── About Preview Section ────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Services" },
  { value: "5+", label: "Years Experience" },
  { value: "4.9", label: "Rating" },
];

function AboutPreviewSection() {
  return (
    <section
      data-ocid="home.about_section"
      className="py-20"
      style={{ background: "#1a1a1a" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&h=600&q=80"
              alt="Luxury spa interior at Magic Moon"
              className="w-full h-80 lg:h-[480px] object-cover"
            />
            <div
              className="absolute bottom-6 left-6 px-5 py-3 rounded-xl backdrop-blur-sm"
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(214,179,106,0.4)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#d6b36a" }}
              >
                Est. 2019
              </p>
              <p className="text-white font-light text-sm mt-0.5">
                Pondicherry's Premier Spa
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "#d6b36a" }}
            >
              About Magic Moon
            </p>
            <h2
              className="text-4xl md:text-5xl font-light mb-5 leading-snug"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#ffffff",
              }}
            >
              Where Luxury Meets{" "}
              <span style={{ color: "#b76e79", fontStyle: "italic" }}>
                Beauty &amp; Wellness
              </span>
            </h2>
            <div
              className="w-16 h-px mb-6"
              style={{ background: roseGoldGrad }}
            />
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Nestled in the heart of Pondicherry, Magic Moon Beauty care &amp;
              Spa is your sanctuary for total rejuvenation. We blend timeless
              beauty rituals with modern luxury treatments to deliver an
              unmatched pampering experience.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              From premium hair styling and bridal makeup to therapeutic body
              massages and advanced skin care — every service is performed by
              certified experts in an ambience of pure, feminine elegance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="text-center py-4 rounded-xl"
                  style={{
                    background: "rgba(183,110,121,0.1)",
                    border: "1px solid rgba(183,110,121,0.2)",
                  }}
                >
                  <p
                    className="text-2xl font-light"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      color: "#d6b36a",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              data-ocid="home.about_read_more_button"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ border: "1.5px solid #b76e79", color: "#b76e79" }}
            >
              Read More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section
      data-ocid="home.services_section"
      className="py-20"
      style={{ background: "#111111" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Premium Services"
          subtitle="From expert hair styling and bridal makeup to therapeutic spa treatments — every service crafted for your luxury beauty experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((svc, idx) => (
            <ServiceCard key={svc.title} svc={svc} idx={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            data-ocid="home.view_all_services_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: roseGoldGrad,
              color: "#111111",
              boxShadow: "0 4px 20px rgba(183,110,121,0.35)",
            }}
          >
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  idx,
}: {
  svc: (typeof SERVICES)[0];
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`home.service_card.${idx + 1}`}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: hovered
          ? "1.5px solid #b76e79"
          : "1.5px solid rgba(255,255,255,0.08)",
        transform: hovered
          ? "translateY(-6px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 16px 40px rgba(183,110,121,0.25)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="p-5">
        <h3
          className="text-xl font-light mb-2"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: hovered ? "#d6b36a" : "#ffffff",
            transition: "color 0.3s",
          }}
        >
          {svc.title}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {svc.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Why Choose Us Section ────────────────────────────────────────────────────

function WhyChooseUsSection() {
  return (
    <section
      data-ocid="home.why_choose_section"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Our Promise"
          title="Why Choose Magic Moon?"
          subtitle="We blend expertise, hygiene, and luxury to give you the ultimate beauty and wellness experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHY_US.map((item, idx) => (
            <WhyCard key={item.title} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({
  item,
  idx,
}: {
  item: (typeof WHY_US)[0];
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      data-ocid={`home.why_card.${idx + 1}`}
      className="p-6 rounded-2xl text-center transition-all duration-300"
      style={{
        background: hovered
          ? "rgba(183,110,121,0.12)"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
        border: hovered
          ? "1.5px solid rgba(183,110,121,0.5)"
          : "1.5px solid rgba(255,255,255,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300"
        style={{
          background: hovered ? roseGoldGrad : "rgba(183,110,121,0.15)",
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: hovered ? "#111111" : "#b76e79" }}
        />
      </div>
      <h3
        className="text-lg font-light mb-2"
        style={{ fontFamily: "Cormorant Garamond, serif", color: "#ffffff" }}
      >
        {item.title}
      </h3>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {item.desc}
      </p>
    </div>
  );
}

// ─── Gallery Preview Section ──────────────────────────────────────────────────

function GalleryPreviewSection() {
  return (
    <section
      data-ocid="home.gallery_section"
      className="py-20"
      style={{ background: "#111111" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Our Space &amp; Work"
          title="Our Gallery"
          subtitle="A glimpse into the serene world of Magic Moon — where luxury beauty meets tranquil wellness."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {GALLERY_IMGS.map((src, idx) => (
            <GalleryItem key={src} src={src} idx={idx} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            data-ocid="home.view_gallery_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ border: "1.5px solid #b76e79", color: "#b76e79" }}
          >
            View Full Gallery <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, idx }: { src: string; idx: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-ocid={`home.gallery_item.${idx + 1}`}
      className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={`Magic Moon beauty and spa scene ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(183,110,121,0.35), rgba(214,179,106,0.2))",
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

// ─── Testimonials Slider ──────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section
      data-ocid="home.testimonials_section"
      className="py-20"
      style={{ background: "#1a1a1a" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Client Love"
          title="What Our Clients Say"
          subtitle="Real words from our valued guests across Pondicherry."
        />

        <div className="max-w-2xl mx-auto text-center">
          <Quote
            className="w-10 h-10 mx-auto mb-6"
            style={{ color: "#b76e79" }}
          />

          <div key={active}>
            <div className="flex justify-center gap-1 mb-5">
              {Array.from(
                { length: t.rating },
                (_, i) => `star-${t.rating}-${i}`,
              ).map((starKey) => (
                <Star
                  key={starKey}
                  className="w-5 h-5"
                  style={{ color: "#d6b36a", fill: "#d6b36a" }}
                />
              ))}
            </div>
            <p
              className="text-xl md:text-2xl font-light italic leading-relaxed mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>
            <p
              className="text-sm font-medium tracking-wider"
              style={{ color: "#d6b36a" }}
            >
              — {t.name}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                data-ocid={`home.testimonial_dot.${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background:
                    i === active ? "#b76e79" : "rgba(183,110,121,0.3)",
                }}
                onClick={() => {
                  setActive(i);
                  if (timerRef.current) clearInterval(timerRef.current);
                  timerRef.current = setInterval(() => {
                    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
                  }, 4500);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Booking Form Section ─────────────────────────────────────────────────────

type BookingFields = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

type BookingErrors = Partial<Record<keyof BookingFields, string>>;

function BookingFormSection() {
  return (
    <section
      id="booking"
      data-ocid="home.booking_section"
      className="py-20"
      style={{ background: "#111111" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Reserve Your Spot"
          title="Book Your Appointment"
          subtitle="Select your preferred service and time. We'll confirm your booking within 1 hour."
        />
        <BookingForm />
      </div>
    </section>
  );
}

function BookingForm() {
  const [fields, setFields] = useState<BookingFields>({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<BookingErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): BookingErrors {
    const e: BookingErrors = {};
    if (!fields.name.trim()) e.name = "Full name is required.";
    if (!fields.phone.trim() || !/^[0-9+\s\-()]{7,15}$/.test(fields.phone)) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!fields.service) e.service = "Please select a service.";
    if (!fields.date) e.date = "Please choose a date.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleChange(field: keyof BookingFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    color: "#ffffff",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  } as const;

  if (submitted) {
    return (
      <div
        data-ocid="home.booking_success_state"
        className="max-w-xl mx-auto text-center py-14 px-8 rounded-2xl"
        style={{
          background: "rgba(183,110,121,0.08)",
          border: "1.5px solid rgba(183,110,121,0.35)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: roseGoldGrad }}
        >
          <Star className="w-8 h-8 text-white" />
        </div>
        <h3
          className="text-3xl font-light mb-3"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#d6b36a",
          }}
        >
          Appointment Requested!
        </h3>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          Thank you, <span style={{ color: "#b76e79" }}>{fields.name}</span>!
          We'll confirm your{" "}
          <strong style={{ color: "#d6b36a" }}>{fields.service}</strong>{" "}
          appointment on{" "}
          <strong style={{ color: "#d6b36a" }}>{fields.date}</strong> within 1
          hour.
        </p>
        <a
          href="https://wa.me/917081078910"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{ background: roseGoldGrad, color: "#111111" }}
        >
          <Phone className="w-4 h-4" /> Confirm via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      data-ocid="home.booking_form"
      className="max-w-2xl mx-auto rounded-2xl p-8"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1.5px solid rgba(183,110,121,0.2)",
      }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="booking-name"
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Full Name
          </label>
          <input
            id="booking-name"
            type="text"
            data-ocid="home.booking_name_input"
            placeholder="Your full name"
            value={fields.name}
            onChange={(e) => handleChange("name", e.target.value)}
            style={{
              ...inputStyle,
              borderColor: errors.name ? "#b76e79" : "rgba(255,255,255,0.12)",
            }}
          />
          {errors.name && (
            <p
              data-ocid="home.booking_name_field_error"
              className="text-xs mt-1"
              style={{ color: "#b76e79" }}
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-phone"
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Phone Number
          </label>
          <input
            id="booking-phone"
            type="tel"
            data-ocid="home.booking_phone_input"
            placeholder="07081078910"
            value={fields.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            style={{
              ...inputStyle,
              borderColor: errors.phone ? "#b76e79" : "rgba(255,255,255,0.12)",
            }}
          />
          {errors.phone && (
            <p
              data-ocid="home.booking_phone_field_error"
              className="text-xs mt-1"
              style={{ color: "#b76e79" }}
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-service"
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Select Service
          </label>
          <select
            id="booking-service"
            data-ocid="home.booking_service_select"
            value={fields.service}
            onChange={(e) => handleChange("service", e.target.value)}
            style={{
              ...inputStyle,
              borderColor: errors.service
                ? "#b76e79"
                : "rgba(255,255,255,0.12)",
            }}
          >
            <option value="" style={{ background: "#1a1a1a" }}>
              Choose a service...
            </option>
            {BOOKING_SERVICES.map((s) => (
              <option key={s} value={s} style={{ background: "#1a1a1a" }}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p
              data-ocid="home.booking_service_field_error"
              className="text-xs mt-1"
              style={{ color: "#b76e79" }}
            >
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-date"
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Preferred Date
          </label>
          <input
            id="booking-date"
            type="date"
            data-ocid="home.booking_date_input"
            value={fields.date}
            onChange={(e) => handleChange("date", e.target.value)}
            style={{
              ...inputStyle,
              colorScheme: "dark",
              borderColor: errors.date ? "#b76e79" : "rgba(255,255,255,0.12)",
            }}
          />
          {errors.date && (
            <p
              data-ocid="home.booking_date_field_error"
              className="text-xs mt-1"
              style={{ color: "#b76e79" }}
            >
              {errors.date}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="booking-message"
            className="block text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Message (Optional)
          </label>
          <textarea
            id="booking-message"
            data-ocid="home.booking_message_textarea"
            placeholder="Any special requests or notes..."
            rows={3}
            value={fields.message}
            onChange={(e) => handleChange("message", e.target.value)}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>
      </div>

      <button
        type="submit"
        data-ocid="home.booking_submit_button"
        className="w-full mt-6 py-4 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        style={{
          background: roseGoldGrad,
          color: "#111111",
          boxShadow: "0 4px 20px rgba(183,110,121,0.35)",
        }}
      >
        Book Appointment
      </button>

      <p
        className="text-center text-xs mt-4"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        Or WhatsApp us at{" "}
        <a
          href="https://wa.me/917081078910"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#b76e79" }}
        >
          +91 70810 78910
        </a>
      </p>
    </form>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      data-ocid="home.cta_section"
      className="py-24 text-center"
      style={{ background: roseGoldGrad }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <p
          className="text-xs uppercase tracking-[0.4em] mb-4 font-body"
          style={{ color: "rgba(17,17,17,0.65)" }}
        >
          Your Luxury Awaits
        </p>
        <h2
          className="text-4xl md:text-5xl font-light mb-6 leading-snug"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#111111",
          }}
        >
          Book Your Luxury Beauty &amp; Spa Experience Today
        </h2>
        <p className="text-sm mb-10" style={{ color: "rgba(17,17,17,0.7)" }}>
          Located at No 182, 1st Floor, Chetty St, Puducherry – 605001
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            data-ocid="home.cta_book_button"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "#111111",
              color: "#d6b36a",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
            onClick={() => {
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Appointment Now
          </button>
          <a
            href="tel:07081078910"
            data-ocid="home.cta_call_button"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(17,17,17,0.15)",
              color: "#111111",
              border: "1.5px solid rgba(17,17,17,0.25)",
            }}
          >
            <Phone className="w-4 h-4" /> 070810 78910
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Shared Helper ────────────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-14 max-w-2xl mx-auto">
      <p
        className="text-xs uppercase tracking-[0.35em] mb-4 font-body"
        style={{ color: "#d6b36a" }}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static strings
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <h2
        className="text-4xl md:text-5xl font-light mb-4"
        style={{ fontFamily: "Cormorant Garamond, serif", color: "#ffffff" }}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static strings
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="w-14 h-px mx-auto mb-5"
        style={{ background: roseGoldGrad }}
      />
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.55)" }}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static strings
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
}

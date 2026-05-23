import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  DollarSign,
  Heart,
  Home as HomeIcon,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface WhyChooseItem {
  icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Certified Professionals",
    desc: "Our beauty experts hold certifications from recognized institutes, delivering safe, precise, and expert-level treatments every visit.",
  },
  {
    icon: Users,
    title: "Experienced Beauticians",
    desc: "Years of hands-on experience across hair, skin, and bridal makeup ensure flawless results tailored to every client's unique needs.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Salon",
    desc: "We follow strict sanitization protocols with sterilized tools and fresh linens for every session — your safety is our first priority.",
  },
  {
    icon: Sparkles,
    title: "Luxury Interiors",
    desc: "Step into an ambience of opulence — rose gold accents, plush seating, and calming aromatherapy create a truly immersive luxury feel.",
  },
  {
    icon: Heart,
    title: "Relaxing Atmosphere",
    desc: "From the moment you enter, soft lighting, soothing music, and our warm hospitality ensure you feel completely at ease.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Premium beauty and spa experiences shouldn't break the bank. Our transparent pricing ensures luxury is accessible to everyone.",
  },
];

const teamMembers = [
  {
    name: "Kavya R.",
    role: "Senior Beauty Expert & Makeup Artist",
    bio: "With 8+ years transforming faces for weddings, events, and editorial shoots, Kavya brings artistry and precision to every look — from subtle glam to dramatic bridal beauty.",
    image: "/assets/generated/team-kavya.dim_400x500.jpg",
  },
  {
    name: "Preethi M.",
    role: "Head Hair Stylist & Colorist",
    bio: "Trained in advanced coloring techniques, Preethi creates stunning hair transformations — balayage, keratin, bridal styling, and bespoke cuts that frame your face perfectly.",
    image: "/assets/generated/team-preethi.dim_400x500.jpg",
  },
  {
    name: "Lakshmi D.",
    role: "Certified Massage Therapist & Spa Expert",
    bio: "A certified specialist in Swedish, deep tissue, and aromatherapy massages, Lakshmi brings a healing touch that leaves guests feeling deeply restored and refreshed.",
    image: "/assets/generated/team-lakshmi.dim_400x500.jpg",
  },
];

const testimonials = [
  {
    name: "Meena S.",
    quote:
      "Absolutely the best beauty experience in Pondicherry! The ambience is stunning, the staff incredibly professional, and my facial left my skin glowing for weeks.",
    stars: 5,
  },
  {
    name: "Rathi P.",
    quote:
      "The team is so professional and the ambience is truly luxurious. I came for a hair spa and left feeling like royalty. Magic Moon is my go-to salon now!",
    stars: 5,
  },
  {
    name: "Sneha V.",
    quote:
      "My bridal makeup was absolutely flawless. Thank you Magic Moon! Kavya understood exactly what I wanted and exceeded every expectation. Perfect day!",
    stars: 5,
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Premium Services" },
  { value: 5, suffix: "+", label: "Years of Excellence" },
  { value: 4.9, suffix: "/5", label: "Rating" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isDecimal = target % 1 !== 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({
  value,
  suffix,
  label,
}: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl font-light text-white">
        {count}
        {suffix}
      </p>
      <p
        className="text-sm uppercase tracking-widest mt-2"
        style={{ color: "#f7e7e3" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section
        data-ocid="about.header_section"
        className="relative h-80 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&h=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.85) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1
            className="font-display text-6xl md:text-7xl font-light mb-4"
            style={{
              background:
                "linear-gradient(135deg, #b76e79 0%, #d6b36a 50%, #b76e79 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Us
          </h1>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#f7e7e3" }}
          >
            <HomeIcon className="w-4 h-4" />
            <Link
              to="/"
              className="hover:text-[#b76e79] transition-colors duration-200"
              style={{ color: "#f7e7e3" }}
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" style={{ color: "#b76e79" }} />
            <span style={{ color: "#d6b36a" }}>About</span>
          </div>
        </div>
      </section>

      {/* About Spa Section */}
      <section
        data-ocid="about.story_section"
        className="py-24"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="col-span-2 rounded-xl overflow-hidden"
                style={{ height: "280px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=400"
                  alt="Luxury beauty salon interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&h=400"
                  alt="Premium spa beauty treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&h=400"
                  alt="Relaxing spa ambience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em] mb-3"
                style={{ color: "#d6b36a" }}
              >
                Our Story
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-light mb-5 leading-tight"
                style={{ color: "#ffffff" }}
              >
                Welcome to{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Magic Moon
                </span>
                <br />
                Beauty care &amp; Spa
              </h2>
              <div
                className="w-20 h-0.5 mb-6"
                style={{
                  background: "linear-gradient(to right, #b76e79, #d6b36a)",
                }}
              />
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#c0a8a0" }}
              >
                Nestled in the heart of Pondicherry, Magic Moon Beauty care
                &amp; Spa is your premier luxury destination for beauty,
                wellness, and complete transformation. We blend world-class
                treatments with a warm, personalised approach that makes every
                visit a truly indulgent experience.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#c0a8a0" }}
              >
                From signature hair treatments and bridal makeup to rejuvenating
                facials and soothing body therapies — our certified experts use
                only the finest products to deliver results that exceed
                expectations.
              </p>

              <div
                className="rounded-xl p-5 mb-5 border"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderColor: "rgba(183,110,121,0.25)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#b76e79" }}
                >
                  Our Mission
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#c0a8a0" }}
                >
                  To provide an unparalleled luxury beauty &amp; spa experience
                  that rejuvenates the mind, body, and soul — combining expert
                  craftsmanship, premium products, and heartfelt hospitality.
                </p>
              </div>

              <div
                className="rounded-xl p-5 mb-8 border"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderColor: "rgba(214,179,106,0.25)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#d6b36a" }}
                >
                  Our Vision
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#c0a8a0" }}
                >
                  To be Pondicherry's most trusted and loved beauty destination
                  — a place where every client leaves feeling more confident,
                  beautiful, and deeply relaxed.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { val: "500+", label: "Clients" },
                  { val: "10+", label: "Services" },
                  { val: "5+", label: "Years" },
                  { val: "4.9", label: "Rating" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="font-display text-3xl font-light"
                      style={{ color: "#d6b36a" }}
                    >
                      {s.val}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider mt-1"
                      style={{ color: "#c0a8a0" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        data-ocid="about.why_choose_section"
        className="py-24"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="container mx-auto px-4">
          <p
            className="text-center text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "#d6b36a" }}
          >
            Our Promise
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light text-center mb-4"
            style={{ color: "#ffffff" }}
          >
            Why Choose Us
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mb-12"
            style={{
              background: "linear-gradient(to right, #b76e79, #d6b36a)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseItems.map((item, idx) => {
              const IconEl = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`about.why_choose_card.${idx + 1}`}
                  className="group rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(183,110,121,0.18)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(183,110,121,0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 40px rgba(183,110,121,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(183,110,121,0.18)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 24px rgba(0,0,0,0.3)";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(183,110,121,0.2), rgba(214,179,106,0.2))",
                      border: "1px solid rgba(183,110,121,0.3)",
                    }}
                  >
                    <IconEl className="w-6 h-6" style={{ color: "#b76e79" }} />
                  </div>
                  <h3
                    className="font-display text-xl font-light mb-3"
                    style={{ color: "#d6b36a" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#c0a8a0" }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section
        data-ocid="about.team_section"
        className="py-24"
        style={{ backgroundColor: "#111111" }}
      >
        <div className="container mx-auto px-4">
          <p
            className="text-center text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "#d6b36a" }}
          >
            The Experts
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light text-center mb-4"
            style={{ color: "#ffffff" }}
          >
            Meet Our Experts
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mb-12"
            style={{
              background: "linear-gradient(to right, #b76e79, #d6b36a)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                data-ocid={`about.team_card.${idx + 1}`}
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(183,110,121,0.18)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(183,110,121,0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 48px rgba(183,110,121,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(183,110,121,0.18)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.4)";
                }}
              >
                {/* Circular portrait */}
                <div className="flex justify-center pt-8 pb-4">
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden"
                    style={{
                      border: "3px solid",
                      borderColor: "#b76e79",
                      boxShadow: "0 0 0 4px rgba(183,110,121,0.15)",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="px-7 pb-8 text-center">
                  <h3
                    className="font-display text-2xl font-light mb-1"
                    style={{ color: "#ffffff" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs uppercase tracking-wider mb-4"
                    style={{ color: "#d6b36a" }}
                  >
                    {member.role}
                  </p>
                  <div
                    className="w-10 h-0.5 mx-auto mb-4"
                    style={{
                      background: "linear-gradient(to right, #b76e79, #d6b36a)",
                    }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#c0a8a0" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-ocid="about.testimonials_section"
        className="py-24"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="container mx-auto px-4">
          <p
            className="text-center text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: "#d6b36a" }}
          >
            Client Stories
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light text-center mb-4"
            style={{ color: "#ffffff" }}
          >
            Client Testimonials
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mb-12"
            style={{
              background: "linear-gradient(to right, #b76e79, #d6b36a)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-ocid={`about.testimonial.${idx + 1}`}
                className="rounded-2xl p-8 relative border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(214,179,106,0.2)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <Quote
                  className="w-8 h-8 absolute top-5 right-5 opacity-30"
                  style={{ color: "#b76e79" }}
                />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={`star-${t.name}-${i}`}
                      className="w-4 h-4"
                      style={{ color: "#d6b36a", fill: "#d6b36a" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed italic mb-6"
                  style={{ color: "#c0a8a0" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
                    style={{
                      background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                      color: "#111111",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <p
                    className="font-medium text-sm"
                    style={{ color: "#ffffff" }}
                  >
                    — {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Banner */}
      <section
        data-ocid="about.stats_section"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #b76e79 0%, #9e5a64 30%, #c4904a 70%, #d6b36a 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

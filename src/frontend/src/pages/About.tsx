import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Clock, Leaf, Star, Users } from "lucide-react";

const whyChooseItems = [
  {
    icon: <Award className="w-8 h-8 text-gold" />,
    title: "Certified Experts",
    desc: "Our therapists are trained and certified in a wide range of massage and beauty techniques, ensuring professional-grade results every time.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold" />,
    title: "Premium Products",
    desc: "We exclusively use high-end, skin-safe products — from cold-pressed essential oils to gold-infused skincare formulations.",
  },
  {
    icon: <Users className="w-8 h-8 text-gold" />,
    title: "Unisex Sanctuary",
    desc: "A welcoming space for all — our spa caters to men, women, and brides with tailored treatments for every individual need.",
  },
  {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: "Punctual & Personal",
    desc: "We respect your time. Every session starts on schedule, and every treatment is personalized to your preferences and health needs.",
  },
];

const testimonials = [
  {
    name: "Priya Krishnamurthy",
    role: "Bride, Dec 2024",
    quote:
      "My bridal package at ASP Spa was absolutely divine. The team made me feel like royalty. My skin was glowing on my wedding day!",
    stars: 5,
  },
  {
    name: "Ramesh Iyer",
    role: "Regular Client",
    quote:
      "Best deep tissue massage in Pondicherry, hands down. I come here every month and the quality is consistently excellent.",
    stars: 5,
  },
  {
    name: "Sunita Mehra",
    role: "Spa Enthusiast",
    quote:
      "The ambiance is gorgeous — very premium. The facial I got left my skin so smooth and bright. Will definitely be back!",
    stars: 5,
  },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section
        data-ocid="about.header_section"
        className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/gallery-5.dim_600x400.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a2a]/80" />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#faf7f0]">
            About ASP Spa
          </h1>
          <div className="gold-divider w-24 mx-auto mt-5" />
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#c8d8c4]">
            <Link to="/" className="hover:text-gold transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#8aaa92]" />
            <span className="text-gold">About</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section
        data-ocid="about.story_section"
        className="py-20"
        style={{ backgroundColor: "#faf7f0" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
                Who We Are
              </p>
              <h2
                className="font-display text-4xl font-light mb-5 leading-snug"
                style={{ color: "#1a3a2a" }}
              >
                Pondicherry's Premier Luxury Spa &amp; Bridal Studio
              </h2>
              <div className="gold-divider w-20 mb-6" />
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#4a6b52" }}
              >
                Founded with a passion for holistic wellness, ASP Spa has
                quickly become Pondicherry's most trusted destination for
                premium spa and beauty services. Located in the heart of MG Road
                Area, our sanctuary is designed to transport you away from the
                bustle of daily life.
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#4a6b52" }}
              >
                Our carefully curated treatments draw from both Ayurvedic
                traditions and contemporary European spa techniques. Each
                session is thoughtfully designed to restore physical vitality,
                emotional calm, and radiant confidence.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#4a6b52" }}
              >
                Whether you're preparing for your wedding, recovering from a
                demanding week, or simply treating yourself to some
                well-deserved self-care — ASP Spa is your personal haven of
                luxury in Pondicherry.
              </p>
              <div className="flex gap-10 mb-8">
                <div>
                  <p className="font-display text-4xl font-light text-gold">
                    500+
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider mt-1"
                    style={{ color: "#4a6b52" }}
                  >
                    Happy Clients
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-light text-gold">
                    9+
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider mt-1"
                    style={{ color: "#4a6b52" }}
                  >
                    Expert Services
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-light text-gold">
                    3+
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider mt-1"
                    style={{ color: "#4a6b52" }}
                  >
                    Years Experience
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                data-ocid="about.book_button"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-[#1a3a2a] px-7 py-3.5 rounded transition-smooth font-semibold text-sm shadow-gold"
              >
                Book a Session <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="gallery-item aspect-[4/3]">
                <img
                  src="/assets/generated/gallery-1.dim_600x400.jpg"
                  alt="Spa interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="gallery-item aspect-square">
                  <img
                    src="/assets/generated/gallery-4.dim_600x400.jpg"
                    alt="Hot stone massage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="gallery-item aspect-square">
                  <img
                    src="/assets/generated/gallery-3.dim_600x400.jpg"
                    alt="Facial treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        data-ocid="about.why_choose_section"
        className="py-20 section-alt"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Our Promise
          </p>
          <h2 className="section-title" style={{ color: "#1a3a2a" }}>
            Why Choose ASP Spa
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle text-sm" style={{ color: "#4a6b52" }}>
            We go beyond pampering — every visit is a commitment to your
            well-being, comfort, and radiant transformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseItems.map((item, idx) => (
              <div
                key={item.title}
                data-ocid={`about.why_choose_card.${idx + 1}`}
                className="border rounded-lg p-7 text-center transition-smooth hover:shadow-luxury hover:-translate-y-1 hover:border-gold"
                style={{
                  backgroundColor: "#faf7f0",
                  borderColor: "rgba(212, 175, 55, 0.25)",
                }}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center"
                    style={{ backgroundColor: "#1a3a2a" }}
                  >
                    {item.icon}
                  </div>
                </div>
                <h3
                  className="font-display text-xl font-light mb-3"
                  style={{ color: "#1a3a2a" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4a6b52" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-ocid="about.testimonials_section"
        className="py-20"
        style={{ backgroundColor: "#1a3a2a" }}
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Client Stories
          </p>
          <h2
            className="font-display text-4xl font-light tracking-wide text-center mb-3"
            style={{ color: "#faf7f0" }}
          >
            What Our Clients Say
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p
            className="text-center text-sm max-w-xl mx-auto mb-12"
            style={{ color: "#a8c5b0" }}
          >
            Real experiences from our valued guests who trust ASP Spa for their
            wellness journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-ocid={`about.testimonial.${idx + 1}`}
                className="rounded-xl p-8 shadow-luxury relative border"
                style={{
                  backgroundColor: "#1f4530",
                  borderColor: "rgba(212, 175, 55, 0.2)",
                }}
              >
                {/* Quote mark */}
                <div className="font-display text-6xl text-gold/30 leading-none absolute top-4 right-6">
                  "
                </div>

                <div className="flex mb-4 gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={`star-${t.name}-${i}`}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: "#c8d8c4" }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gold font-display text-lg border border-gold/30"
                    style={{ backgroundColor: "rgba(212, 175, 55, 0.15)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="font-medium text-sm"
                      style={{ color: "#faf7f0" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#8aaa92" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

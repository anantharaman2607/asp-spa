import { Link } from "@tanstack/react-router";
import {
  Brush,
  ChevronRight,
  Clock,
  Flower2,
  Hand,
  Heart,
  Leaf,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  {
    icon: <Flower2 className="w-10 h-10 text-gold" />,
    title: "Swedish Massage",
    duration: "60 / 90 min",
    desc: "Our signature full-body Swedish massage uses long, flowing strokes and warm aromatic oils to melt tension, improve circulation, and induce deep relaxation.",
    benefits: ["Stress Relief", "Improved Circulation", "Muscle Relaxation"],
    image: "/assets/generated/gallery-4.dim_600x400.jpg",
  },
  {
    icon: <Leaf className="w-10 h-10 text-gold" />,
    title: "Deep Tissue Massage",
    duration: "60 / 90 min",
    desc: "Targeting deeper muscle layers, this therapeutic massage releases chronic tension, knots, and postural strain. Ideal for athletes and desk workers.",
    benefits: ["Pain Relief", "Posture Correction", "Injury Recovery"],
    image: "/assets/generated/gallery-1.dim_600x400.jpg",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-gold" />,
    title: "Aromatherapy",
    duration: "75 min",
    desc: "A deeply sensory experience combining therapeutic touch with pure essential oil blends. Each session is customized to your mood, needs, and skin type.",
    benefits: ["Mood Enhancement", "Emotional Balance", "Skin Nourishment"],
    image: "/assets/generated/gallery-9.dim_600x400.jpg",
  },
  {
    icon: <Heart className="w-10 h-10 text-gold" />,
    title: "Luxury Facial",
    duration: "60 min",
    desc: "Advanced facial treatments using premium skincare formulations. From deep cleansing to gold-infused brightening facials, we target your skin's unique concerns.",
    benefits: ["Glowing Skin", "Anti-Aging", "Deep Hydration"],
    image: "/assets/generated/gallery-3.dim_600x400.jpg",
  },
  {
    icon: <Leaf className="w-10 h-10 text-gold" />,
    title: "Body Scrub & Wrap",
    duration: "90 min",
    desc: "Exfoliate and renew with our luxurious body treatments. Natural scrubs remove dead skin, while nourishing wraps lock in deep moisture for silky smooth results.",
    benefits: ["Exfoliation", "Deep Moisturizing", "Skin Renewal"],
    image: "/assets/generated/gallery-5.dim_600x400.jpg",
  },
  {
    icon: <Star className="w-10 h-10 text-gold" />,
    title: "Bridal Packages",
    duration: "Custom",
    desc: "Comprehensive bridal beauty journeys beginning weeks before the wedding. Hair, makeup, skincare, mehndi, and more — curated for your most radiant day.",
    benefits: ["Complete Bridal Prep", "Custom Packages", "Pre-Bridal Care"],
    image: "/assets/generated/gallery-2.dim_600x400.jpg",
  },
  {
    icon: <Scissors className="w-10 h-10 text-gold" />,
    title: "Hair Care",
    duration: "45–120 min",
    desc: "From rejuvenating hair spa treatments to expert styling, coloring, and cutting — our hair specialists create tailored solutions for every hair type and concern.",
    benefits: ["Hair Repair", "Styling & Color", "Scalp Treatment"],
    image: "/assets/generated/gallery-6.dim_600x400.jpg",
  },
  {
    icon: <Hand className="w-10 h-10 text-gold" />,
    title: "Nail Art & Manicure",
    duration: "45–90 min",
    desc: "Precision nail care and creative nail art by our specialist technicians. Classic manicures, gel polish, intricate designs — your nails deserve the royal treatment.",
    benefits: ["Nail Shaping", "Gel Polish", "Custom Nail Art"],
    image: "/assets/generated/gallery-7.dim_600x400.jpg",
  },
  {
    icon: <Brush className="w-10 h-10 text-gold" />,
    title: "Waxing & Threading",
    duration: "20–60 min",
    desc: "Smooth, clean, and precise hair removal services using the finest waxes and expert threading techniques for flawless results with minimal discomfort.",
    benefits: ["Smooth Skin", "Precise Shaping", "Long-Lasting"],
    image: "/assets/generated/gallery-8.dim_600x400.jpg",
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section
        data-ocid="services.header_section"
        className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/gallery-4.dim_600x400.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1a3a2a]/75" />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Our Offerings
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#faf7f0]">
            Our Services
          </h1>
          <div className="gold-divider w-24 mx-auto mt-5" />
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#c8d8cc]">
            <Link to="/" className="hover:text-gold transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#6a9a7a]" />
            <span className="text-gold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        data-ocid="services.grid_section"
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Premium Offerings
          </p>
          <h2 className="section-title">Our 9 Expert Services</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle text-sm">
            Every service is delivered by certified professionals using premium
            products in our serene, luxury spa environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={service.title}
                data-ocid={`services.card.${idx + 1}`}
                className="bg-card border border-border rounded-xl overflow-hidden transition-smooth hover:-translate-y-1 group"
                style={{ boxShadow: "0 2px 8px rgba(26,58,42,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 10px 40px rgba(26,58,42,0.18), 0 2px 8px rgba(212,175,55,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(26,58,42,0.06)";
                }}
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>

                {/* Dark green top accent bar */}
                <div className="h-1 w-full bg-[#1a3a2a]" />

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon badge — light green tint */}
                    <div className="w-14 h-14 rounded-full border border-[#1a3a2a]/20 flex items-center justify-center bg-[#e8f0eb]">
                      {service.icon}
                    </div>
                    {/* Duration badge — dark green bg, ivory text */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#1a3a2a", color: "#faf7f0" }}
                    >
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {service.duration}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-light mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Benefits tags — light green tint, dark green text */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.benefits.map((b) => (
                      <span
                        key={b}
                        className="text-xs px-2.5 py-1 rounded-full border text-darkgreen"
                        style={{
                          backgroundColor: "#e8f0eb",
                          borderColor: "rgba(26,58,42,0.2)",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    data-ocid={`services.book_button.${idx + 1}`}
                    className="inline-flex items-center gap-2 text-gold border border-gold/50 hover:bg-gold hover:text-[#1a3a2a] px-4 py-2 rounded text-sm font-medium transition-smooth"
                  >
                    Book This Service <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section data-ocid="services.cta_section" className="py-20 section-alt">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Ready to Indulge?
          </p>
          <h2 className="font-display text-4xl font-light mb-5">
            Book Your Perfect Treatment Today
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8">
            Contact us via phone or WhatsApp to book your preferred service.
            Walk-ins welcome based on availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="services.cta_book_button"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-[#1a3a2a] font-semibold px-8 py-3.5 rounded transition-smooth shadow-gold text-sm"
            >
              Book Now <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917200245009"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="services.cta_whatsapp_button"
              className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#fff] font-medium px-8 py-3.5 rounded transition-smooth text-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

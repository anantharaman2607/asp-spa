import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const salonServices: ServiceCard[] = [
  {
    title: "Hair Cut",
    description:
      "Precision cuts tailored to your face shape and style preferences",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Hair Styling",
    description:
      "Professional styling for any occasion from everyday to bridal",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Hair Spa",
    description: "Deep conditioning spa treatments to restore shine and health",
    image:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Hair Coloring",
    description: "Premium highlights, balayage, and full color services",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Bridal Hair Design",
    description: "Stunning bridal hairstyles for your most special day",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=600&h=450",
  },
];

const beautyServices: ServiceCard[] = [
  {
    title: "Facial Treatment",
    description: "Advanced skin treatments for glowing, youthful skin",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Bridal Makeup",
    description: "Complete bridal packages with flawless, long-lasting makeup",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Skin Care Therapy",
    description: "Personalized skincare routines using premium products",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Manicure",
    description: "Luxury nail care with premium polishes and treatments",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Pedicure",
    description: "Relaxing foot care with exfoliation and moisturizing",
    image:
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=600&h=450",
  },
];

const spaServices: ServiceCard[] = [
  {
    title: "Swedish Massage",
    description: "Gentle, relaxing full-body massage to ease tension",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Deep Tissue Massage",
    description: "Targeted deep pressure for chronic muscle relief",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Thai Massage",
    description: "Traditional stretching and pressure point techniques",
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Aromatherapy",
    description: "Healing essential oil massage for mind and body",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Hot Stone Therapy",
    description: "Volcanic stones to melt away deep muscle tension",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Foot Reflexology",
    description: "Pressure point therapy for full-body relaxation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Couples Massage",
    description: "Shared luxury massage experience for two",
    image:
      "https://images.unsplash.com/photo-1631124816032-7b8e5d5b0e75?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Body Spa Treatment",
    description: "Full body scrub, wrap, and hydration therapy",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&h=450",
  },
  {
    title: "Head Massage",
    description: "Scalp and neck massage to relieve stress headaches",
    image:
      "https://images.unsplash.com/photo-1535572290543-960a8046f5af?auto=format&fit=crop&w=600&h=450",
  },
];

function ServiceGrid({
  services,
  ocidPrefix,
}: {
  services: ServiceCard[];
  ocidPrefix: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, idx) => (
        <div
          key={service.title}
          data-ocid={`${ocidPrefix}.card.${idx + 1}`}
          className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(183,110,121,0.25)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow:
                "0 0 0 1.5px #b76e79, 0 8px 32px rgba(183,110,121,0.35)",
            }}
          />
          <div className="p-5">
            <h3
              className="text-xl font-semibold mb-2 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#d6b36a",
                letterSpacing: "0.02em",
              }}
            >
              {service.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              {service.description}
            </p>
            <a
              href="https://wa.me/917081078910"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`${ocidPrefix}.book_button.${idx + 1}`}
              className="block w-full text-center text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)",
                color: "#111111",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({
  title,
  underlineColor,
  ocid,
}: {
  title: string;
  underlineColor: string;
  ocid: string;
}) {
  return (
    <div data-ocid={ocid} className="text-center mb-12">
      <h2
        className="text-4xl md:text-5xl font-light mb-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          background: "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h2>
      <div
        className="mx-auto h-0.5 w-24 rounded-full"
        style={{ background: underlineColor }}
      />
    </div>
  );
}

export default function Services() {
  return (
    <div style={{ background: "#111111", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section
        data-ocid="services.hero_section"
        className="relative h-80 flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&h=500"
          alt="Magic Moon Beauty care & Spa Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(17,17,17,0.88) 0%, rgba(183,110,121,0.4) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              background: "linear-gradient(135deg, #b76e79 0%, #d6b36a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Services
          </h1>
          <nav
            className="flex items-center justify-center gap-2 text-sm"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              data-ocid="services.breadcrumb_home"
              className="transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Home
            </Link>
            <ChevronRight
              className="w-4 h-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            />
            <span style={{ color: "#d6b36a" }}>Services</span>
          </nav>
        </div>
      </section>

      {/* Salon Services */}
      <section
        data-ocid="services.salon_section"
        className="py-20 px-4"
        style={{ background: "#111111" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Salon Services"
            underlineColor="linear-gradient(90deg, #b76e79, #d6b36a)"
            ocid="services.salon_title"
          />
          <ServiceGrid services={salonServices} ocidPrefix="salon" />
        </div>
      </section>

      {/* Beauty Services */}
      <section
        data-ocid="services.beauty_section"
        className="py-20 px-4"
        style={{ background: "#161616" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Beauty Services"
            underlineColor="linear-gradient(90deg, #d6b36a, #b76e79)"
            ocid="services.beauty_title"
          />
          <ServiceGrid services={beautyServices} ocidPrefix="beauty" />
        </div>
      </section>

      {/* Spa Services */}
      <section
        data-ocid="services.spa_section"
        className="py-20 px-4"
        style={{ background: "#111111" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Spa Services"
            underlineColor="linear-gradient(90deg, #b76e79, #d6b36a)"
            ocid="services.spa_title"
          />
          <ServiceGrid services={spaServices} ocidPrefix="spa" />
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-ocid="services.cta_section"
        className="py-24 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #b76e79 0%, #c8858e 30%, #d6b36a 100%)",
        }}
      >
        <h2
          className="text-4xl md:text-5xl font-light mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#111111",
          }}
        >
          Ready for Your Beauty &amp; Spa Experience?
        </h2>
        <p
          className="text-lg mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(17,17,17,0.75)" }}
        >
          Treat yourself to the luxury you deserve at Magic Moon Beauty care
          &amp; Spa in Pondicherry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07081078910"
            data-ocid="services.cta_call_button"
            className="inline-block px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "#111111",
              color: "#d6b36a",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </a>
          <a
            href="https://wa.me/917081078910"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.cta_whatsapp_button"
            className="inline-block px-10 py-4 rounded-full text-base font-bold border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              borderColor: "#111111",
              color: "#111111",
              background: "transparent",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}

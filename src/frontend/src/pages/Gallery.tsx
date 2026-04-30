import { Link } from "@tanstack/react-router";
import { ChevronRight, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "/assets/generated/gallery-1.dim_600x400.jpg",
    alt: "Luxury spa massage room with candlelight",
    category: "Spa Interior",
  },
  {
    src: "/assets/generated/gallery-2.dim_600x400.jpg",
    alt: "Indian bridal makeup and styling",
    category: "Bridal Studio",
  },
  {
    src: "/assets/generated/gallery-3.dim_600x400.jpg",
    alt: "Luxury gold facial treatment",
    category: "Facial Treatments",
  },
  {
    src: "/assets/generated/gallery-4.dim_600x400.jpg",
    alt: "Hot stone massage therapy",
    category: "Massage",
  },
  {
    src: "/assets/generated/gallery-5.dim_600x400.jpg",
    alt: "Spa reception area",
    category: "Spa Interior",
  },
  {
    src: "/assets/generated/gallery-6.dim_600x400.jpg",
    alt: "Professional hair care treatment",
    category: "Hair Care",
  },
  {
    src: "/assets/generated/gallery-7.dim_600x400.jpg",
    alt: "Luxury nail art and manicure",
    category: "Nail Art",
  },
  {
    src: "/assets/generated/gallery-8.dim_600x400.jpg",
    alt: "Indian bridal party preparation",
    category: "Bridal Studio",
  },
  {
    src: "/assets/generated/gallery-9.dim_600x400.jpg",
    alt: "Aromatherapy spa treatment",
    category: "Aromatherapy",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section
        data-ocid="gallery.header_section"
        className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/gallery-8.dim_600x400.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark green overlay instead of charcoal */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26, 58, 42, 0.75)" }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Our Work &amp; Space
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#faf7f0]">
            Elegant Gallery
          </h1>
          <div className="gold-divider w-24 mx-auto mt-5" />
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#d4c89a]">
            <Link to="/" className="hover:text-gold transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#7aaa8a]" />
            <span className="text-gold">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section data-ocid="gallery.grid_section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Visual Journey
          </p>
          <h2 className="section-title">Moments of Luxury</h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="section-subtitle text-sm">
            Explore the world of ASP Spa — from our serene treatment rooms to
            transformative beauty results and joyful bridal celebrations.
          </p>

          {/* Category Filters */}
          <div
            data-ocid="gallery.category_filters"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`gallery.filter.${cat.toLowerCase().replace(/ /g, "_")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-smooth ${
                  activeCategory === cat
                    ? "border-gold shadow-gold text-[#faf7f0]"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold bg-card"
                }`}
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#1a3a2a", borderColor: "#d4af37" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filtered.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                data-ocid={`gallery.item.${idx + 1}`}
                className="group relative gallery-item aspect-[4/3] cursor-pointer text-left w-full"
                onClick={() => setLightboxSrc(img.src)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                {/* Dark green hover overlay instead of charcoal */}
                <div
                  className="absolute inset-0 transition-smooth flex items-center justify-center"
                  style={{ background: "rgba(26, 58, 42, 0)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(26, 58, 42, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(26, 58, 42, 0)";
                  }}
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-smooth flex flex-col items-center gap-2">
                    <ZoomIn className="w-8 h-8 text-gold" />
                    {/* Category label — dark green semi-transparent */}
                    <span
                      className="text-xs text-gold uppercase tracking-wider px-3 py-1 rounded"
                      style={{ backgroundColor: "rgba(18, 43, 30, 0.75)" }}
                    >
                      {img.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="gallery.empty_state"
              className="text-center py-16 text-muted-foreground"
            >
              <p className="font-display text-2xl font-light mb-2">
                No images in this category
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="text-gold hover:underline text-sm"
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox — dark forest green background */}
      {lightboxSrc && (
        <dialog
          open
          data-ocid="gallery.lightbox"
          className="fixed inset-0 z-50 m-0 max-w-none w-full h-full flex items-center justify-center p-4 backdrop-blur-sm border-0"
          style={{ backgroundColor: "rgba(18, 43, 30, 0.93)" }}
          onClick={() => setLightboxSrc(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxSrc(null);
          }}
          aria-label="Gallery lightbox"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={lightboxSrc}
              alt="Gallery preview"
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-luxury"
            />
            {/* Gold close button */}
            <button
              type="button"
              data-ocid="gallery.lightbox_close_button"
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-smooth hover:bg-gold-dark"
              style={{ backgroundColor: "#d4af37", color: "#1a3a2a" }}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        </dialog>
      )}

      {/* CTA */}
      <section
        data-ocid="gallery.cta_section"
        className="py-16 section-alt text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-light mb-4">
            Experience the ASP Spa Difference
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Book your appointment today and become part of our growing family of
            wellness enthusiasts.
          </p>
          <Link
            to="/contact"
            data-ocid="gallery.cta_book_button"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-[#1a3a2a] font-semibold px-8 py-3.5 rounded transition-smooth shadow-gold text-sm"
          >
            Book Your Session <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

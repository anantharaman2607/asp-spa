import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
  X,
  ZoomIn,
} from "lucide-react";
import { useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

const galleryImages: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&h=600",
    alt: "Luxury salon interior with elegant lighting",
    category: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&h=600",
    alt: "Professional hair cutting session",
    category: "Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&h=600",
    alt: "Luxury facial treatment therapy",
    category: "Beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&h=600",
    alt: "Professional makeup application",
    category: "Beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&h=600",
    alt: "Serene luxury spa treatment room",
    category: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&h=600",
    alt: "Hot stone therapy on the back",
    category: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&h=600",
    alt: "Swedish massage with aromatic oils",
    category: "Massage",
  },
  {
    src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=800&h=600",
    alt: "Relaxing couples massage side by side",
    category: "Massage",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600",
    alt: "Bridal makeup application for wedding day",
    category: "Bridal Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&h=600",
    alt: "Stunning bridal look with gold accents",
    category: "Bridal Makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&h=600",
    alt: "Expert hair styling session in salon",
    category: "Hair Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&h=600",
    alt: "Professional hair coloring treatment",
    category: "Hair Styling",
  },
];

const categories = [
  "All",
  "Salon",
  "Beauty",
  "Spa",
  "Massage",
  "Bridal Makeup",
  "Hair Styling",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  function openLightbox(idx: number) {
    setLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }

  function prevImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }

  function nextImage() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Hero Header */}
      <section
        data-ocid="gallery.header_section"
        className="relative h-80 flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1611073615830-9b895e11b987?auto=format&fit=crop&w=1400&h=600"
          alt="Magic Moon Spa Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17,17,17,0.78)" }}
        />
        <div className="relative z-10 text-center px-4">
          <p
            className="text-xs uppercase tracking-[0.35em] mb-3"
            style={{ color: "#d6b36a" }}
          >
            Magic Moon Beauty care &amp; Spa
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-light mb-4"
            style={{
              background:
                "linear-gradient(135deg, #b76e79 0%, #d6b36a 50%, #b76e79 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Gallery
          </h1>
          <nav
            className="flex items-center justify-center gap-2 text-sm"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="transition-colors duration-200 hover:underline"
              style={{ color: "#d6b36a" }}
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" style={{ color: "#b76e79" }} />
            <span style={{ color: "#f7e7e3" }}>Gallery</span>
          </nav>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section
        data-ocid="gallery.filter_section"
        className="py-8 bg-background"
        style={{ borderBottom: "1px solid rgba(183,110,121,0.2)" }}
      >
        <div className="container mx-auto px-4">
          <div
            data-ocid="gallery.category_filters"
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`gallery.filter.${cat.toLowerCase().replace(/ /g, "_")}`}
                onClick={() => {
                  setActiveCategory(cat);
                }}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={
                  activeCategory === cat
                    ? {
                        background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                        color: "#111111",
                        border: "1px solid transparent",
                        fontWeight: 600,
                      }
                    : {
                        background: "transparent",
                        color: "#b76e79",
                        border: "1px solid #b76e79",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section data-ocid="gallery.grid_section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: "#d6b36a" }}
            >
              Visual Showcase
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light mb-4"
              style={{ color: "#f7e7e3" }}
            >
              Moments of Luxury
            </h2>
            <div
              className="mx-auto w-24 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #d6b36a, transparent)",
              }}
            />
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {filtered.map((img, idx) => (
                <button
                  key={`${img.category}-${idx}`}
                  type="button"
                  data-ocid={`gallery.item.${idx + 1}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer w-full"
                  style={{ background: "#1a1a1a" }}
                  onClick={() => {
                    openLightbox(idx);
                  }}
                  aria-label={`View ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(17,17,17,0.72)" }}
                  >
                    <ZoomIn className="w-8 h-8" style={{ color: "#b76e79" }} />
                    <span
                      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                        color: "#111111",
                        fontWeight: 600,
                      }}
                    >
                      {img.category}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 2px rgba(183,110,121,0.6)",
                    }}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div data-ocid="gallery.empty_state" className="text-center py-20">
              <p
                className="font-display text-2xl font-light mb-4"
                style={{ color: "#f7e7e3" }}
              >
                No images in this category
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                }}
                className="text-sm underline transition-colors duration-200"
                style={{ color: "#d6b36a" }}
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-ocid="gallery.cta_section"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2a1a1e 50%, #1a1a1a 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div
            className="mx-auto w-16 h-px mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b76e79, transparent)",
            }}
          />
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-4"
            style={{ color: "#f7e7e3" }}
          >
            Experience Luxury at Magic Moon
          </h2>
          <p
            className="text-base mb-10 max-w-xl mx-auto"
            style={{ color: "#b0a090" }}
          >
            Indulge in our world-class beauty and spa treatments — crafted for
            your comfort and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07081078910"
              data-ocid="gallery.book_appointment_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                color: "#111111",
              }}
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/917081078910"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.whatsapp_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                border: "2px solid #d6b36a",
                color: "#d6b36a",
                background: "transparent",
              }}
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentImage !== null && lightboxIndex !== null && (
        <div
          data-ocid="gallery.dialog"
          // biome-ignore lint/a11y/useSemanticElements: lightbox uses div for custom overlay behavior
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
          }}
          tabIndex={-1}
        >
          <div
            className="relative max-w-4xl w-full mx-4 flex flex-col items-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              data-ocid="gallery.close_button"
              className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
              style={{ color: "#b76e79", border: "1px solid #b76e79" }}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-3">
              <span
                className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #b76e79, #d6b36a)",
                  color: "#111111",
                }}
              >
                {currentImage.category}
              </span>
            </div>
            <div
              className="relative w-full rounded-xl overflow-hidden"
              style={{ maxHeight: "70vh" }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full object-contain"
                style={{ maxHeight: "70vh" }}
              />
            </div>
            <p
              className="mt-3 text-sm text-center"
              style={{ color: "#b0a090" }}
            >
              {currentImage.alt}
            </p>
            <div className="flex items-center gap-6 mt-5">
              <button
                type="button"
                data-ocid="gallery.prev_button"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                style={{ border: "1px solid #d6b36a", color: "#d6b36a" }}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm" style={{ color: "#b0a090" }}>
                {lightboxIndex + 1} / {filtered.length}
              </span>
              <button
                type="button"
                data-ocid="gallery.next_button"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                style={{ border: "1px solid #d6b36a", color: "#d6b36a" }}
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

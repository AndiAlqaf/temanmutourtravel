"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { REAL_GALLERY, GalleryItem, TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedPhoto) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedPhoto(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedPhoto]);

  return (
    <section className="section bg-alt" id="galeri">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Cerita & Momen Jamaah Kami</h2>
            <p className="section-subtitle">
              Setiap jepretan adalah rekaman kebahagiaan dan kehangatan keluarga jamaah yang kami
              dampingi di Tanah Suci Makkah dan Madinah.
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {REAL_GALLERY.map((item, idx) => (
            <Reveal key={item.id} variant="scale" delay={idx * 0.08}>
              <div
                className="gallery-card"
                onClick={() => setSelectedPhoto(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw"
                  className="gallery-thumb"
                />

                <div className="gallery-overlay">
                  {item.tag && <span className="gallery-badge">{item.tag}</span>}
                  <h4 className="gallery-caption-title">{item.title}</h4>
                  <div className="gallery-loc">
                    <MapPin size={13} style={{ display: "inline", marginRight: "4px" }} />
                    {item.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Instagram Gallery CTA */}
        <Reveal variant="fade-up" delay={0.15}>
          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <a
              href={TRAVEL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                fontSize: "0.92rem",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span>Lihat Momen & Update Kegiatan Terbaru di Instagram {TRAVEL_INFO.instagram}</span>
            </a>
          </div>
        </Reveal>

        {/* Lightbox Modal via Portal */}
        {mounted && selectedPhoto && createPortal(
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Tutup Tampilan Foto"
              >
                <X size={20} />
              </button>

              <div className="modal-img-wrap">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  width={1000}
                  height={650}
                  className="modal-img"
                  priority
                />
              </div>

              <div className="modal-body">
                {selectedPhoto.tag && (
                  <span className="badge-subtle" style={{ marginBottom: "8px" }}>
                    {selectedPhoto.tag}
                  </span>
                )}
                <h3 style={{ fontSize: "1.35rem", color: "var(--color-primary)", marginBottom: "6px" }}>
                  {selectedPhoto.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--color-gold)", marginBottom: "12px" }}>
                  <MapPin size={15} />
                  <span>{selectedPhoto.location}</span>
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--color-text-secondary)" }}>
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}

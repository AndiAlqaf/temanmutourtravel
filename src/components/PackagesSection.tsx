"use client";

import { useState } from "react";
import { Check, Sparkles, MessageCircle, Car, Hotel } from "lucide-react";
import { PACKAGES, TRAVEL_INFO, UmrahPackage } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function PackagesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPackages =
    activeFilter === "all"
      ? PACKAGES
      : PACKAGES.filter((p) => p.id === activeFilter);

  const getPackageWhatsAppUrl = (pkg: UmrahPackage) => {
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Assalamu'alaikum Temanmu Tour & Travel, saya tertarik dengan informasi lengkap mengenai: *${pkg.name} (${pkg.priceFormatted})*. Bisakah saya mendapatkan jadwal dan konsultasi rencana keberangkatannya?`
    )}`;
  };

  return (
    <section className="section bg-alt" id="paket-umrah">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Pilih Sesuai Kebutuhan Anda</h2>
            <p className="section-subtitle">
              Bukan soal paket mana yang paling mahal. Tetapi paket mana yang paling tepat dan
              nyaman mendampingi perjalanan ibadah Anda dan keluarga tercinta.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "48px",
            }}
          >
            <button
              className={`calc-chip ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              Semua Paket
            </button>
            <button
              className={`calc-chip ${activeFilter === "private-economic" ? "active" : ""}`}
              onClick={() => setActiveFilter("private-economic")}
            >
              Private Economic (35 Jt)
            </button>
            <button
              className={`calc-chip ${activeFilter === "silver" ? "active" : ""}`}
              onClick={() => setActiveFilter("silver")}
            >
              Silver (53 Jt) — Favorit
            </button>
            <button
              className={`calc-chip ${activeFilter === "platinum" ? "active" : ""}`}
              onClick={() => setActiveFilter("platinum")}
            >
              Platinum (88 Jt) — Ultimate
            </button>
          </div>
        </Reveal>

        {/* Package Grid */}
        <div key={activeFilter} className="packages-grid tab-fade-enter">
          {filteredPackages.map((pkg, idx) => (
            <Reveal key={pkg.id} variant="fade-up" delay={idx * 0.12} style={{ height: "100%" }}>
              <div
                className={`package-card ${pkg.featured ? "is-featured" : ""}`}
                style={{ height: "100%" }}
              >
              {pkg.featured && (
                <div className="featured-pill">
                  <Sparkles size={12} style={{ display: "inline", marginRight: "4px" }} />
                  Paling Diminati
                </div>
              )}

              <div className="package-header">
                <span className="badge-subtle" style={{ marginBottom: "12px" }}>
                  {pkg.badge}
                </span>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>

                <div className="package-price-wrap">
                  <span className="package-price">{pkg.priceFormatted}</span>
                  <span className="package-price-period">/ jamaah</span>
                </div>

                <div className="package-ideal">
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>Ideal untuk: </span>
                  {pkg.idealFor}
                </div>
              </div>

              {/* Highlights & Transport/Hotel */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "10px",
                  padding: "14px",
                  backgroundColor: "var(--color-bg)",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "20px",
                  fontSize: "0.84rem",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Car size={16} className="text-gold" />
                  <span>
                    <strong>Transport:</strong> {pkg.transport}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Hotel size={16} className="text-gold" />
                  <span>
                    <strong>Hotel:</strong> {pkg.hotel}
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div style={{ marginBottom: "12px", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary)" }}>
                Fasilitas & Layanan Termasuk:
              </div>
              <ul className="package-features-list">
                {pkg.inclusions.slice(0, 9).map((inclusion, idx) => (
                  <li key={idx} className="package-feature-item">
                    <Check size={16} className="feature-check-icon" />
                    <span>{inclusion}</span>
                  </li>
                ))}
                {pkg.inclusions.length > 9 && (
                  <li
                    className="package-feature-item"
                    style={{ fontStyle: "italic", color: "var(--color-text-muted)" }}
                  >
                    + {pkg.inclusions.length - 9} fasilitas pendukung lainnya
                  </li>
                )}
              </ul>

              {/* Package Footer CTA */}
              <div className="package-footer">
                <a
                  href={getPackageWhatsAppUrl(pkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${pkg.featured ? "btn-primary" : "btn-outline"}`}
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={18} />
                  <span>Pilih {pkg.name}</span>
                </a>
              </div>
            </div>
          </Reveal>
          ))}
        </div>

        {/* Note from PDF slide 13 */}
        <Reveal variant="fade-up" delay={0.2}>
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            * Pilihan tambahan opsional: <strong>Cafe Moment Clock Tower Makkah</strong> (+Rp 1.000.000/orang) &{" "}
            <strong>Upgrade Kamar View Ka&apos;bah</strong> (+Rp 3.000.000/orang). Seluruh program diselenggarakan dengan
            izin PPIU resmi dan pendampingan mutowwif berpengalaman.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

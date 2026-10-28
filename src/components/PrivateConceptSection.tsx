"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { PRIVATE_CONCEPTS, TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function PrivateConceptSection() {
  const [activeTab, setActiveTab] = useState(0);

  const currentConcept = PRIVATE_CONCEPTS[activeTab];

  const getConceptWhatsAppUrl = (conceptTitle: string) => {
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Halo Temanmu, saya tertarik untuk merencanakan Umrah Konsep Private untuk: ${conceptTitle}. Boleh berikan rincian lebih lanjut?`
    )}`;
  };

  return (
    <section className="section" id="konsep-private">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Umrah yang Lebih Personal</h2>
            <p className="section-subtitle">
              Karena setiap keluarga memiliki cerita yang berbeda. Tidak harus menunggu rombongan
              besar untuk berangkat, Anda dapat menentukan sendiri waktu dan gaya perjalanan Anda.
            </p>
          </div>

          {/* Tab Selection */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {PRIVATE_CONCEPTS.map((concept, index) => (
              <button
                key={concept.category}
                className={`calc-chip ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                style={{ padding: "12px 20px" }}
              >
                {concept.category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active Concept Showcase Card (Clean Minimalist without image) */}
        <Reveal variant="scale" delay={0.15}>
          <div
            key={activeTab}
            className="tab-fade-enter"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              maxWidth: "920px",
              margin: "0 auto",
            }}
          >
            <div style={{ padding: "clamp(32px, 5vw, 56px)" }}>
            <div
              className="tab-concept-badge"
              style={{
                display: "inline-block",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                backgroundColor: "var(--color-bg)",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                marginBottom: "16px",
                border: "1px solid var(--border-color)",
              }}
            >
              {currentConcept.tag}
            </div>

            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                marginBottom: "14px",
                color: "var(--color-primary)",
              }}
            >
              {currentConcept.title}
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                marginBottom: "32px",
                maxWidth: "760px",
              }}
            >
              {currentConcept.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "14px",
                marginBottom: "36px",
              }}
            >
              {currentConcept.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="tab-concept-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "0.95rem",
                    color: "var(--color-text-main)",
                    backgroundColor: "var(--color-bg)",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                    animationDelay: `${0.12 + idx * 0.08}s`,
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-gold-light)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={getConceptWhatsAppUrl(currentConcept.category)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle size={18} />
              <span>Konsultasi Paket {currentConcept.category}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
  );
}

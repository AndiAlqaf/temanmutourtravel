import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function TestimonialSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Cerita dari Mereka yang Telah Berangkat</h2>
            <p className="section-subtitle">
              Kekeluargaan dan ketenangan hati para jamaah adalah amanah terbesar yang senantiasa
              kami jaga dalam setiap helai langkah di Tanah Suci.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {TESTIMONIALS.map((testi, idx) => (
            <Reveal key={testi.id} variant="fade-up" delay={idx * 0.12} style={{ height: "100%" }}>
              <div
                className="card-minimal"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "3px", color: "var(--color-gold)" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="badge-subtle">{testi.type}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    color: "var(--color-text-secondary)",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "16px",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-primary)", fontSize: "1rem" }}>
                  {testi.name}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                  {testi.role} • {testi.location}
                </div>
              </div>
            </div>
          </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Building2, Train, ShieldCheck, MessageCircle } from "lucide-react";
import { PROMO_SPECIAL, TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function PromoHighlight() {
  const getPromoWhatsAppUrl = (pricingType: string, price: string) => {
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Halo Temanmu, saya ingin menanyakan Promo Umrah Privat 9D Start Makassar (${pricingType} - ${price}). Mohon info ketersediaan slot tanggal keberangkatan.`
    )}`;
  };

  return (
    <section className="section-tight" style={{ paddingTop: "0" }}>
      <div className="container">
        <Reveal variant="scale" delay={0.1}>
          <div className="promo-banner">
          <div className="promo-grid">
            <div className="promo-content">
              <h3>{PROMO_SPECIAL.title}</h3>
              <p>
                Terbang nyaman rute {PROMO_SPECIAL.route} menggunakan {PROMO_SPECIAL.airlines}.
                Fasilitas hotel ring 1 pelataran: {PROMO_SPECIAL.hotels.makkah} & {PROMO_SPECIAL.hotels.madinah}.
              </p>

              {/* Price Options Pill Grid */}
              <div className="promo-pricing-grid">
                {PROMO_SPECIAL.pricing.map((tier) => (
                  <div key={tier.type} className="price-pill">
                    <div className="price-pill-type">{tier.type}</div>
                    <div className="price-pill-val">{tier.price}</div>
                    <div className="price-pill-sub">{tier.note}</div>
                  </div>
                ))}
              </div>

              {/* Inclusions summary strip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px",
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Train size={16} className="text-gold" />
                  <span>Kereta Cepat Haramain</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Building2 size={16} className="text-gold" />
                  <span>Museum Assafiyah & Al-Wahyu</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShieldCheck size={16} className="text-gold" />
                  <span>Izin PPIU: {PROMO_SPECIAL.ppiuNumber}</span>
                </div>
              </div>
            </div>

            {/* CTA & Legal Box */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: "var(--radius-md)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.65)" }}>
                Penyelenggara Resmi:
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#ffffff" }}>
                Kolaborasi Temanmu Umrah & {PROMO_SPECIAL.partnerPpiu}
              </div>
              <div style={{ fontSize: "0.84rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.5" }}>
                {PROMO_SPECIAL.address}
                <br />
                Izin PPIU Kemenag RI: {PROMO_SPECIAL.ppiuNumber}
              </div>

              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(200, 162, 101, 0.15)",
                  border: "1px solid rgba(200, 162, 101, 0.3)",
                  fontSize: "0.82rem",
                  color: "var(--color-gold)",
                }}
              >
                {PROMO_SPECIAL.upgradeBusinessFlightNote}
              </div>

              <a
                href={getPromoWhatsAppUrl("Promo 9D Start Makassar", "Pilihan Kamar")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%", marginTop: "8px" }}
              >
                <MessageCircle size={18} />
                <span>Klaim Promo via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
}

import { Compass, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { VALUE_PROPOSITIONS } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function ValuesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass size={28} className="text-gold" />;
      case "HeartHandshake":
        return <HeartHandshake size={28} className="text-gold" />;
      case "ShieldCheck":
        return <ShieldCheck size={28} className="text-gold" />;
      case "Users":
        return <Users size={28} className="text-gold" />;
      default:
        return <Users size={28} className="text-gold" />;
    }
  };

  return (
    <section className="section bg-alt" id="mengapa-kami">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Mengapa Memilih Temanmu?</h2>
            <p className="section-subtitle">
              Kami memahami bahwa jamaah membutuhkan lebih dari sekadar tiket, hotel, dan
              transportasi. Yang Anda butuhkan adalah pendampingan, kepastian, dan rasa
              kekeluargaan agar dapat fokus beribadah sepenuhnya.
            </p>
          </div>
        </Reveal>

        {/* 4 Core Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {VALUE_PROPOSITIONS.map((item, index) => (
            <Reveal key={item.code} variant="fade-up" delay={index * 0.1}>
              <div className="card-minimal" style={{ height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                    }}
                  >
                    {item.code}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    marginBottom: "4px",
                    color: "var(--color-primary)",
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                  }}
                >
                  {item.subtitle}
                </div>

                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.65",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Philosophy Quotation Strip */}
        <Reveal variant="scale" delay={0.2}>
          <div
            style={{
              marginTop: "48px",
              backgroundColor: "#ffffff",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
                fontStyle: "italic",
                color: "var(--color-primary)",
                maxWidth: "800px",
                lineHeight: "1.5",
                marginBottom: "16px",
              }}
            >
              &ldquo;Temanmu bukan hanya mengantar jamaah sampai ke Tanah Suci. Kami menemani
              perjalanan ibadahnya.&rdquo;
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              Fokus kami adalah kekhusyukan dan kenyamanan Anda dari awal hingga kembali ke tanah air.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

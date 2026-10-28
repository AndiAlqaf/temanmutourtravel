"use client";

import { useState } from "react";
import { MessageCircle, Phone, MapPin, Send, ShieldCheck, HeartHandshake } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function ContactCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    pax: "2 Orang",
    packagePreference: "Paket Silver (53 Jt)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai perjalanan Umrah:
- Nama: ${formData.name || "-"}
- Nomor Kontak: ${formData.phone || "-"}
- Kota Asal: ${formData.city || "-"}
- Rencana Jamaah: ${formData.pax}
- Peminatan Paket: ${formData.packagePreference}
- Catatan Khusus: ${formData.notes || "-"}

Mohon informasi ketersediaan jadwal dan konsultasi selanjutnya. Terima kasih.`;

    const url = `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section" id="kontak">
      <div className="container">
        {/* Emotional Slide 12 Banner */}
        <Reveal variant="scale">
          <div
            style={{
              background: "linear-gradient(180deg, var(--color-primary-dark) 0%, #231915 100%)",
              color: "#ffffff",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(36px, 6vw, 64px)",
              textAlign: "center",
              boxShadow: "var(--shadow-lg)",
              marginBottom: "64px",
              position: "relative",
              overflow: "hidden",
            }}
          >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              backgroundColor: "rgba(200, 162, 101, 0.15)",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              marginBottom: "24px",
              border: "1px solid rgba(200, 162, 101, 0.3)",
            }}
          >
            <HeartHandshake size={14} />
            <span>Saatnya Mengundang Keluarga Menuju Baitullah</span>
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 2.8vw, 1.85rem)",
              lineHeight: "1.55",
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: "840px",
              margin: "0 auto 24px auto",
              fontStyle: "italic",
            }}
          >
            &ldquo;Mungkin selama ini kita selalu berkata: &lsquo;Nanti kalau sudah ada rezeki,&rsquo;
            &lsquo;Nanti kalau orang tua sudah siap,&rsquo; &lsquo;Nanti kalau anak-anak sudah besar.&rsquo;
            Tetapi terkadang, yang kita butuhkan bukan menunggu waktu yang sempurna, melainkan menemukan teman
            perjalanan yang tepat.&rdquo;
          </blockquote>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-gold)",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            TEMANMU TOUR & TRAVEL — Temanmu Beribadah, Temanmu Menuju Surga.
          </p>
        </div>
        </Reveal>

        {/* Contact & Consultation Form Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
          className="contact-grid"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
            }}
            className="contact-layout"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
              }}
            >
              {/* Direct Info Card */}
              <Reveal variant="fade-up" delay={0.1}>
              <div className="card-minimal" style={{ height: "100%" }}>
                <span className="badge-subtle" style={{ marginBottom: "16px" }}>
                  Layanan Konsultasi Langsung
                </span>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "12px", color: "var(--color-primary)" }}>
                  Konsultasikan Kebutuhan Anda
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--color-text-secondary)", marginBottom: "32px" }}>
                  Tim konsultan ibadah kami siap membantu Anda menyusun rencana keberangkatan umrah
                  keluarga yang nyaman, aman, dan berkesan.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <a
                    href={TRAVEL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--border-color)",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "#25d366",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        WhatsApp Resmi
                      </div>
                      <div style={{ fontWeight: 600, color: "var(--color-primary)", fontSize: "1.05rem" }}>
                        {TRAVEL_INFO.phone}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-gold)", marginTop: "2px" }}>
                        Respon Cepat & Ramah
                      </div>
                    </div>
                  </a>

                  <a
                    href={TRAVEL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--border-color)",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        Instagram Resmi
                      </div>
                      <div style={{ fontWeight: 600, color: "var(--color-primary)", fontSize: "1.05rem" }}>
                        {TRAVEL_INFO.instagram}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-gold)", marginTop: "2px" }}>
                        Dokumentasi & Live Update Jamaah
                      </div>
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        Izin Resmi PPIU Kemenag
                      </div>
                      <div style={{ fontWeight: 600, color: "var(--color-primary)", fontSize: "1rem" }}>
                        {TRAVEL_INFO.legalPartner}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                        No. PPIU: {TRAVEL_INFO.legalPpiu}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary-subtle)",
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        Alamat Kantor
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "var(--color-text-main)", lineHeight: "1.5" }}>
                        {TRAVEL_INFO.officeAddress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Reveal>

              {/* Consultation Form */}
              <Reveal variant="fade-up" delay={0.2}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  padding: "36px",
                  boxShadow: "var(--shadow-sm)",
                  height: "100%",
                }}
              >
                <h4 style={{ fontSize: "1.3rem", color: "var(--color-primary)", marginBottom: "6px" }}>
                  Formulir Konsultasi Cepat
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "24px" }}>
                  Isi data singkat berikut untuk terhubung langsung dengan konsultan kami via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                      Nama Anda *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ahmad Fauzi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        backgroundColor: "var(--color-bg)",
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                        Nomor HP / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          fontSize: "0.9rem",
                          fontFamily: "inherit",
                          backgroundColor: "var(--color-bg)",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                        Kota Asal
                      </label>
                      <input
                        type="text"
                        placeholder="Makassar / Jakarta / dll"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          fontSize: "0.9rem",
                          fontFamily: "inherit",
                          backgroundColor: "var(--color-bg)",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                        Rencana Jumlah Jamaah
                      </label>
                      <select
                        value={formData.pax}
                        onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          fontSize: "0.9rem",
                          fontFamily: "inherit",
                          backgroundColor: "var(--color-bg)",
                        }}
                      >
                        <option value="2 Orang (Pasangan)">2 Orang (Pasangan)</option>
                        <option value="3-4 Orang (Keluarga)">3 - 4 Orang (Keluarga)</option>
                        <option value="5-8 Orang">5 - 8 Orang</option>
                        <option value="Group / Komunitas (10+ Pax)">Group / Komunitas (10+)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                        Pilihan Paket
                      </label>
                      <select
                        value={formData.packagePreference}
                        onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          fontSize: "0.9rem",
                          fontFamily: "inherit",
                          backgroundColor: "var(--color-bg)",
                        }}
                      >
                        <option value="Paket Silver (53 Jt)">Silver (53 Jt) — Favorit</option>
                        <option value="Paket Private Economic (35 Jt)">Private Economic (35 Jt)</option>
                        <option value="Paket Platinum (88 Jt)">Platinum (88 Jt) — Ultimate</option>
                        <option value="Promo Privat 9D Makassar">Promo Privat 9D Makassar</option>
                        <option value="Custom Journey">Custom Sesuai Permintaan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "6px" }}>
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Ingin membawa orang tua lansia butuh kursi roda, atau rencana bulan depan..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        backgroundColor: "var(--color-bg)",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: "100%", marginTop: "8px" }}>
                    <Send size={18} />
                    <span>Mulai Konsultasi di WhatsApp</span>
                  </button>
                </form>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

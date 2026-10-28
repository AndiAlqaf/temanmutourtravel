"use client";

import { useState } from "react";
import { Calculator, MessageCircle, Check, Users, Sparkles, Building2, Coffee, Heart } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function CustomTripCalculator() {
  const [paxCount, setPaxCount] = useState<number>(2);
  const [selectedTier, setSelectedTier] = useState<"economic" | "silver" | "platinum">("silver");
  const [addons, setAddons] = useState<{
    viewKabah: boolean;
    cafeMoment: boolean;
    wheelchairAssistance: boolean;
  }>({
    viewKabah: false,
    cafeMoment: false,
    wheelchairAssistance: false,
  });

  const tierPrices = {
    economic: 35000000,
    silver: 53000000,
    platinum: 88000000,
  };

  const tierLabels = {
    economic: "Private Economic (Hyundai Privat)",
    silver: "Silver (GMC & Kereta Cepat Haramain)",
    platinum: "Platinum (Bisnis Flight & Hotel View Ka'bah)",
  };

  const addonPrices = {
    viewKabah: 3000000,
    cafeMoment: 1000000,
    wheelchairAssistance: 2500000,
  };

  const basePricePerPax = tierPrices[selectedTier];

  // If Platinum is chosen, viewKabah and cafeMoment are already included in Platinum!
  const effectiveViewKabahPrice = selectedTier === "platinum" ? 0 : addonPrices.viewKabah;
  const effectiveCafeMomentPrice = selectedTier === "platinum" ? 0 : addonPrices.cafeMoment;

  let extraPerPax = 0;
  if (addons.viewKabah && selectedTier !== "platinum") extraPerPax += effectiveViewKabahPrice;
  if (addons.cafeMoment && selectedTier !== "platinum") extraPerPax += effectiveCafeMomentPrice;
  if (addons.wheelchairAssistance) extraPerPax += addonPrices.wheelchairAssistance;

  const totalPerPax = basePricePerPax + extraPerPax;
  const grandTotal = totalPerPax * paxCount;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const generateWhatsAppMessage = () => {
    const addonList: string[] = [];
    if (addons.viewKabah) addonList.push("Upgrade Kamar View Ka'bah");
    if (addons.cafeMoment) addonList.push("Cafe Moment Clock Tower");
    if (addons.wheelchairAssistance) addonList.push("Pendampingan Kursi Roda Lansia");

    const message = `Assalamu'alaikum Temanmu Tour & Travel, saya telah membuat estimasi rencana Umrah Private di website:
- Jumlah Jamaah: ${paxCount} Orang
- Pilihan Paket: ${tierLabels[selectedTier]}
- Opsi Tambahan: ${addonList.length > 0 ? addonList.join(", ") : "Tanpa tambahan"}
- Estimasi Biaya: ${formatCurrency(grandTotal)} (${formatCurrency(totalPerPax)}/pax)

Mohon informasi ketersediaan jadwal serta langkah pendaftarannya. Terima kasih!`;

    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section" id="kalkulator">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Rencanakan Umrah Sesuai Keinginan</h2>
            <p className="section-subtitle">
              Gunakan simulasi interaktif ini untuk menghitung estimasi biaya sesuai jumlah orang,
              pilihan paket, dan kebutuhan spesifik keluarga Anda.
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={0.12}>
          <div className="calc-wrapper">
            <div className="calc-grid">
              {/* Step Controls */}
              <div>
              {/* Step 1: Pax Count */}
              <div className="calc-step-group">
                <label className="calc-label">
                  1. Berapa orang yang akan berangkat bersama Anda?
                </label>
                <div className="calc-chips">
                  {[
                    { count: 2, label: "2 Orang (Pasangan)" },
                    { count: 3, label: "3 Orang (Keluarga Kecil)" },
                    { count: 4, label: "4 Orang (Quad Family)" },
                    { count: 5, label: "5 Orang" },
                    { count: 6, label: "6 Orang" },
                    { count: 8, label: "8+ Orang (Rombongan)" },
                  ].map((item) => (
                    <button
                      key={item.count}
                      type="button"
                      className={`calc-chip ${paxCount === item.count ? "active" : ""}`}
                      onClick={() => setPaxCount(item.count)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Package Tier */}
              <div className="calc-step-group">
                <label className="calc-label">2. Pilih Kategori Pelayanan & Transportasi</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                  <button
                    type="button"
                    className={`calc-chip ${selectedTier === "economic" ? "active" : ""}`}
                    onClick={() => setSelectedTier("economic")}
                    style={{ textAlign: "left", padding: "14px 18px" }}
                  >
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      Private Economic — Rp 35.000.000 / pax
                    </div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "2px" }}>
                      Dedicated Mobil Hyundai, Hotel Bintang 3, 2x Umrah, 2x Raudhah
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`calc-chip ${selectedTier === "silver" ? "active" : ""}`}
                    onClick={() => setSelectedTier("silver")}
                    style={{ textAlign: "left", padding: "14px 18px" }}
                  >
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      Silver (Favorit) — Rp 53.000.000 / pax
                    </div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "2px" }}>
                      Dedicated SUV GMC, Kereta Cepat Haramain 1x, Akomodasi Nyaman Ring 1
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`calc-chip ${selectedTier === "platinum" ? "active" : ""}`}
                    onClick={() => setSelectedTier("platinum")}
                    style={{ textAlign: "left", padding: "14px 18px" }}
                  >
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      Platinum (Ultimate VIP) — Rp 88.000.000 / pax
                    </div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "2px" }}>
                      Tiket Bisnis Class Flight, Hotel View Ka&apos;bah, GMC, Kereta Cepat, Cafe Moment
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div className="calc-step-group" style={{ marginBottom: "0" }}>
                <label className="calc-label">3. Opsi Tambahan & Kenyamanan Ekstra</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* View Ka'bah */}
                  <div
                    onClick={() => toggleAddon("viewKabah")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      backgroundColor: addons.viewKabah ? "var(--color-gold-light)" : "var(--color-bg)",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Building2 size={18} className="text-gold" />
                      <div>
                        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>
                          Upgrade Kamar View Ka&apos;bah
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                          {selectedTier === "platinum" ? "Sudah Termasuk di Platinum" : "+Rp 3.000.000 / orang"}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                        border: "1.5px solid var(--color-primary)",
                        backgroundColor: addons.viewKabah ? "var(--color-primary)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      {addons.viewKabah && <Check size={14} />}
                    </div>
                  </div>

                  {/* Cafe Moment */}
                  <div
                    onClick={() => toggleAddon("cafeMoment")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      backgroundColor: addons.cafeMoment ? "var(--color-gold-light)" : "var(--color-bg)",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Coffee size={18} className="text-gold" />
                      <div>
                        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>
                          Cafe Moment Clock Tower Makkah
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                          {selectedTier === "platinum" ? "Sudah Termasuk di Platinum" : "+Rp 1.000.000 / orang"}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                        border: "1.5px solid var(--color-primary)",
                        backgroundColor: addons.cafeMoment ? "var(--color-primary)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      {addons.cafeMoment && <Check size={14} />}
                    </div>
                  </div>

                  {/* Wheelchair Assistance */}
                  <div
                    onClick={() => toggleAddon("wheelchairAssistance")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-color)",
                      backgroundColor: addons.wheelchairAssistance ? "var(--color-gold-light)" : "var(--color-bg)",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Heart size={18} className="text-gold" />
                      <div>
                        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>
                          Pendamping Khusus & Kursi Roda Lansia
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                          +Rp 2.500.000 / orang (Asistensi Tawaf & Sa&apos;i)
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "4px",
                        border: "1.5px solid var(--color-primary)",
                        backgroundColor: addons.wheelchairAssistance ? "var(--color-primary)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      {addons.wheelchairAssistance && <Check size={14} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Summary Card */}
            <div className="calc-summary-card">
              <div>
                <h4 className="calc-summary-title">Ringkasan Rencana Umrah</h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Jumlah Jamaah:</span>
                    <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>{paxCount} Orang</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Kategori Paket:</span>
                    <span style={{ fontWeight: 600, color: "var(--color-primary)", textAlign: "right" }}>
                      {selectedTier === "economic"
                        ? "Private Economic"
                        : selectedTier === "silver"
                        ? "Silver (GMC & Haramain)"
                        : "Platinum (Bisnis & View Ka'bah)"}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>Biaya Per Pax:</span>
                    <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                      {formatCurrency(totalPerPax)}
                    </span>
                  </div>

                  <hr className="divider-hairline" style={{ margin: "16px 0" }} />

                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Estimasi Total Investasi Ibadah
                    </span>
                    <div className="calc-est-total">{formatCurrency(grandTotal)}</div>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                      *Estimasi bersifat fleksibel, disesuaikan dengan ketersediaan kamar dan tanggal penerbangan yang Anda kehendaki.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px" }}>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={18} />
                  <span>Kirim Rencana ke WhatsApp</span>
                </a>
              </div>
            </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

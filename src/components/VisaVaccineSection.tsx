"use client";

import { useState } from "react";
import {
  FileText,
  Syringe,
  ShieldCheck,
  Check,
  Clock,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import {
  VISA_VACCINE_SERVICES,
  TRAVEL_INFO,
  VisaVaccineService,
} from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function VisaVaccineSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? VISA_VACCINE_SERVICES
      : VISA_VACCINE_SERVICES.filter((item) => item.category === activeCategory);

  const getServiceBookingWaUrl = (service: VisaVaccineService) => {
    let actionText = "pengurusan";
    if (service.category === "vaksin") {
      actionText = "penjadwalan suntik";
    }
    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai ${actionText} *${service.name}* (Biaya: ${service.priceFormatted} ${service.currencyLabel}). Mohon informasi persyaratan dokumen dan alur pendaftarannya. Terima kasih!`;
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getGeneralConsultationWaUrl = () => {
    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai pengurusan Visa perjalanan dan Vaksinasi Meningitis untuk persiapan ibadah umrah / perjalanan saya.`;
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="section bg-card" id="visa-vaksin">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">
              Pengurusan Visa & Vaksinasi Resmi
            </h2>
            <p className="section-subtitle">
              Pastikan kelengkapan dokumen perjalanan Anda terurus dengan aman, cepat, dan legal.
              Kami melayani penerbitan Visa Umrah Saudi, Visa VOA Mesir, serta Vaksinasi Meningitis bersertifikat internasional.
            </p>

            {/* Filter Chips */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "24px",
                marginBottom: "16px",
              }}
            >
              <button
                className={`calc-chip ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                Semua Layanan
              </button>
              <button
                className={`calc-chip ${activeCategory === "visa" ? "active" : ""}`}
                onClick={() => setActiveCategory("visa")}
              >
                Pengurusan Visa (Saudi & Mesir)
              </button>
              <button
                className={`calc-chip ${activeCategory === "vaksin" ? "active" : ""}`}
                onClick={() => setActiveCategory("vaksin")}
              >
                Vaksinasi Internasional (ICV)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="visa-vaksin-grid tab-fade-enter" key={activeCategory}>
          {filteredServices.map((service, idx) => (
            <Reveal key={service.id} variant="fade-up" delay={idx * 0.1} style={{ height: "100%" }}>
              <div
                className={`visa-vaksin-card ${service.featured ? "is-featured" : ""}`}
              >
                <div className="visa-vaksin-card-header">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "12px" }}>
                    <span className="badge-subtle" style={{ margin: 0, padding: "4px 10px", fontSize: "0.75rem" }}>
                      {service.category === "visa" ? "Layanan Visa" : "Layanan Vaksinasi"}
                    </span>
                    <span className="visa-badge-status">{service.badge}</span>
                  </div>

                  <h3 className="visa-service-name">{service.name}</h3>
                  <p className="visa-service-sub">{service.subtitle}</p>

                  {/* Price */}
                  <div className="visa-price-wrap">
                    <span className="visa-price-formatted">{service.priceFormatted}</span>
                    <span className="visa-price-unit">{service.currencyLabel}</span>
                  </div>

                  {/* Specs Box (Processing Time & Validity) */}
                  <div className="visa-meta-box">
                    <div className="visa-meta-item">
                      <Clock size={15} className="text-gold" />
                      <div>
                        <span className="meta-label">Estimasi Proses:</span>
                        <strong>{service.processingTime}</strong>
                      </div>
                    </div>
                    <div className="visa-meta-item">
                      <Calendar size={15} className="text-gold" />
                      <div>
                        <span className="meta-label">Masa Berlaku:</span>
                        <strong>{service.validity}</strong>
                      </div>
                    </div>
                  </div>

                  <p className="visa-service-desc">{service.description}</p>
                </div>

                <div className="visa-vaksin-card-body">
                  {/* Requirements List */}
                  <div className="visa-section-block">
                    <h4 className="visa-block-heading">
                      <FileText size={14} className="text-gold" /> Persyaratan Dokumen:
                    </h4>
                    <ul className="visa-bullet-list">
                      {service.requirements.map((req, rIdx) => (
                        <li key={rIdx}>
                          <Check size={13} className="text-gold" style={{ flexShrink: 0, marginTop: "4px" }} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits / Facilities */}
                  <div className="visa-section-block">
                    <h4 className="visa-block-heading">
                      <ShieldCheck size={14} className="text-gold" /> Keunggulan & Layanan:
                    </h4>
                    <ul className="visa-bullet-list">
                      {service.benefits.map((ben, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircle2 size={13} className="text-gold" style={{ flexShrink: 0, marginTop: "4px" }} />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="visa-vaksin-card-footer">
                  <a
                    href={getServiceBookingWaUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", gap: "8px" }}
                  >
                    <MessageCircle size={18} />
                    {service.category === "visa" ? "Konsultasi & Ajukan Visa" : "Jadwalkan Vaksinasi"}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reassurance Banner */}
        <Reveal variant="fade-up" delay={0.25}>
          <div className="visa-assurance-banner">
            <div className="visa-assurance-content">
              <div className="visa-assurance-icon-wrap">
                <ShieldCheck size={36} className="text-gold" />
              </div>
              <div>
                <h3 className="visa-assurance-title">
                  Pengecekan Dokumen Gratis & Bimbingan Lengkap
                </h3>
                <p className="visa-assurance-desc">
                  Masih ragu mengenai masa berlaku paspor, kelayakan foto, atau jadwal suntik vaksin meningitis?
                  Kirimkan berkas Anda kepada tim Temanmu Tour & Travel untuk diperiksa secara teliti sebelum pengajuan resmi.
                </p>
              </div>
            </div>
            <a
              href={getGeneralConsultationWaUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            >
              <MessageCircle size={18} /> Tanya Syarat via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


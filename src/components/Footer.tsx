"use client";

import Image from "next/image";
import { MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1.5px solid rgba(200, 162, 101, 0.4)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  flexShrink: 0,
                  backgroundColor: "var(--color-primary-dark)",
                }}
              >
                <Image
                  src="/images/Logo.jpeg"
                  alt="Logo Temanmu Tour & Travel"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 className="footer-brand-title" style={{ margin: 0, fontSize: "1.35rem" }}>
                  {TRAVEL_INFO.name}
                </h3>
                <span style={{ fontSize: "0.78rem", color: "var(--color-gold)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  Tour & Travel Umrah Private
                </span>
              </div>
            </div>

            <p className="footer-desc">
              {TRAVEL_INFO.tagline}. Melayani perjalanan Umrah Private, Keluarga, dan Group
              dengan kehangatan, kepastian, dan rasa persaudaraan sejak {TRAVEL_INFO.establishedYear}.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-gold)", fontSize: "0.85rem" }}>
              <ShieldCheck size={18} />
              <span>Izin PPIU Kemenag RI: {TRAVEL_INFO.legalPpiu}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="footer-heading">Navigasi Halaman</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#tentang">Tentang Temanmu</a>
              </li>
              <li className="footer-link-item">
                <a href="#mengapa-kami">Mengapa Temanmu</a>
              </li>
              <li className="footer-link-item">
                <a href="#konsep-private">Konsep Umrah Private</a>
              </li>
              <li className="footer-link-item">
                <a href="#paket-umrah">Pilihan Paket & Biaya</a>
              </li>
              <li className="footer-link-item">
                <a href="#kalkulator">Simulasi Rencana Perjalanan</a>
              </li>
              <li className="footer-link-item">
                <a href="#galeri">Dokumentasi Nyata Jamaah</a>
              </li>
              <li className="footer-link-item">
                <a href="#faq">Pertanyaan & Jawaban (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Col */}
          <div>
            <h4 className="footer-heading">Kontak & Kantor</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.78)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} className="text-gold" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{TRAVEL_INFO.officeAddress}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MessageCircle size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <a
                  href={TRAVEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff", fontWeight: 500 }}
                >
                  WhatsApp: {TRAVEL_INFO.phone}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
                <a
                  href={`https://instagram.com/${TRAVEL_INFO.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255, 255, 255, 0.85)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span>{TRAVEL_INFO.instagram}</span>
                </a>
                <a
                  href={`https://facebook.com/${TRAVEL_INFO.facebook.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255, 255, 255, 0.85)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {TRAVEL_INFO.name}. All rights reserved.
          </div>
          <div>
            Penyelenggara Resmi berkolaborasi dengan {TRAVEL_INFO.legalPartner} (PPIU: {TRAVEL_INFO.legalPpiu})
          </div>
        </div>
      </div>
    </footer>
  );
}

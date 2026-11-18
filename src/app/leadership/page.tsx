import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";
import { ChevronLeft, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";

export const metadata: Metadata = {
  title: "Our Leadership — Dewan Direksi & Muthawwif Profesional Temanmu Tour & Travel",
  description:
    "Profil kepemimpinan Temanmu Tour & Travel: Muh. Agung Al Mansyah (Direktur Utama & Muthawwif Tokoh Nasional) dan Andi Muhammad Akram Ibrahim, Lc. Dipl (COO). Didukung keilmuan Universitas Al-Azhar Kairo dan hafalan 30 Juz Al-Qur'an.",
  openGraph: {
    title: "Our Leadership — Dewan Direksi Temanmu Tour & Travel",
    description:
      "Dipimpin oleh generasi ahli, berilmu, dan berintegritas tinggi. Telah dipercaya mendampingi Menteri Kabinet, Ulama Nasional, dan Tokoh Bangsa beribadah di Tanah Suci.",
  },
};

export default function LeadershipPage() {
  const whatsappUrl = `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai paket Umrah Private bersama Tim Direksi & Muthawwif Profesional."
  )}`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flex: 1, paddingTop: "var(--header-height)" }} className="page-fade-in">
        {/* Breadcrumb / Top Bar */}
        <div className="leadership-page-header">
          <div className="container">
            <div className="leadership-breadcrumb">
              <Link href="/" className="breadcrumb-back-link">
                <ChevronLeft size={16} />
                <span>Kembali ke Beranda</span>
              </Link>
              <span className="breadcrumb-divider">/</span>
              <span className="breadcrumb-current">Our Leadership</span>
            </div>

            <div className="leadership-hero-banner">
              <span className="section-badge">
                <ShieldCheck size={14} className="text-gold" />
                <span>Amanah, Keilmuan, &amp; Integritas</span>
              </span>
              <h1 className="leadership-page-h1">
                Dewan Direksi &amp; Tim Kepemimpinan
              </h1>
              <p className="leadership-page-desc">
                Mengenal lebih dekat para pendiri dan penggerak di balik Temanmu Tour &amp; Travel. Mengabdi sepenuh hati menghadirkan perjalanan ibadah umrah yang personal, khusyuk, dan sesuai tuntunan syariat.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Content Section */}
        <LeadershipSection isStandalonePage={true} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi WhatsApp Direksi"
        className="floating-wa"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}

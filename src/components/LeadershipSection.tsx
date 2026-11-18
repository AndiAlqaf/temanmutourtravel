"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Quote,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  LEADERSHIP_MEMBERS,
  VIP_MENTORSHIP_FIGURES,
  LEADERSHIP_DOCUMENTATION_GALLERY,
  TRAVEL_INFO,
} from "@/data/travelData";

export default function LeadershipSection({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const directConsultationUrl = `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai paket Umrah Private dengan bimbingan langsung Direktur Utama & Muthawwif Profesional."
  )}`;

  return (
    <section className={`section leadership-section ${isStandalonePage ? "standalone-page-section" : ""}`} id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Reveal variant="fade-up">
            <span className="section-badge">
              <Sparkles size={14} className="text-gold" />
              <span>Our Leadership & Dewan Direksi</span>
            </span>
            <h2 className="section-title">
              Dipimpin oleh Generasi Ahli, Berilmu, & Berintegritas
            </h2>
            <p className="section-subtitle">
              Sinergi antara keilmuan Islam otentik lulusan Universitas Al-Azhar Kairo, hafizh 30 Juz Al-Qur&apos;an, rekam jejak bimbingan tokoh nasional, serta manajemen modern yang transparan dan amanah.
            </p>
          </Reveal>
        </div>

        {/* VIP Figures Banner */}
        <Reveal variant="fade-up" delay={0.08}>
          <div className="leadership-vip-strip">
            <div className="vip-strip-header">
              <div className="vip-badge-tag">
                <ShieldCheck size={16} />
                <span>Rekam Jejak Kepercayaan Nasional</span>
              </div>
              <p className="vip-strip-title">
                Telah Dipercaya Mendampingi Tokoh Bangsa, Menteri Kabinet, &amp; Ulama di Tanah Suci
              </p>
            </div>

            <div className="vip-figures-grid">
              {VIP_MENTORSHIP_FIGURES.map((figure, idx) => (
                <div key={idx} className="vip-figure-card">
                  <div className="vip-figure-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="vip-figure-info">
                    <h4 className="vip-figure-name">{figure.name}</h4>
                    <span className="vip-figure-role">{figure.role}</span>
                    <span className="vip-figure-note">{figure.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Executive Leaders Grid */}
        <div className="leadership-cards-grid">
          {LEADERSHIP_MEMBERS.map((leader, index) => (
            <Reveal
              key={leader.id}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={0.12 * (index + 1)}
              className="leadership-card-wrapper"
            >
              <article className="leadership-card">
                {/* Top Header Card */}
                <div className="leader-card-header">
                  <div className="leader-photo-container">
                    <div className="leader-photo-frame">
                      <Image
                        src={leader.image}
                        alt={leader.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="leader-img"
                        priority={index === 0}
                      />
                      <div className="leader-photo-overlay" />
                    </div>
                    <div className="leader-title-badge">
                      <span>{leader.title}</span>
                    </div>
                  </div>

                  <div className="leader-intro-col">
                    <div className="leader-role-tag">{leader.role}</div>
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-tagline">{leader.subtitle}</p>

                    {/* Quick Credential Chips */}
                    <div className="leader-chips-wrap">
                      {leader.credentials.map((cred, cIdx) => (
                        <span key={cIdx} className="leader-chip">
                          <CheckCircle2 size={13} className="text-gold" />
                          <span>{cred}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="leader-card-body">
                  <div className="leader-bio-block">
                    <p>{leader.bio}</p>
                  </div>

                  {leader.quote && (
                    <div className="leader-quote-box">
                      <Quote size={20} className="quote-icon" />
                      <p className="quote-text">&ldquo;{leader.quote}&rdquo;</p>
                    </div>
                  )}

                  {/* Two Column Layout: Experience & Education */}
                  <div className="leader-details-split">
                    {/* Education */}
                    <div className="leader-col-detail">
                      <h4 className="detail-col-heading">
                        <GraduationCap size={18} />
                        <span>Riwayat Pendidikan</span>
                      </h4>
                      <ul className="timeline-clean-list">
                        {leader.education.map((edu, eIdx) => (
                          <li key={eIdx} className="timeline-clean-item">
                            <span className="timeline-dot" />
                            <div className="timeline-content">
                              <span className="timeline-inst">{edu.institution}</span>
                              <span className="timeline-sub">
                                {edu.major} {edu.year ? `(${edu.year})` : ""}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Competencies / Experience */}
                    <div className="leader-col-detail">
                      <h4 className="detail-col-heading">
                        <Award size={18} />
                        <span>Keahlian &amp; Pengalaman Kunci</span>
                      </h4>
                      <ul className="checklist-clean">
                        {leader.experience.slice(0, 5).map((exp, xIdx) => (
                          <li key={xIdx} className="checklist-item">
                            <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Core Competencies Badges */}
                  <div className="competencies-block">
                    <span className="competencies-label">Kompetensi Inti:</span>
                    <div className="competencies-tags">
                      {leader.competencies.map((comp, kIdx) => (
                        <span key={kIdx} className="competency-tag">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="leader-card-footer">
                    <a
                      href={leader.socials?.whatsapp || directConsultationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm leader-cta-btn"
                    >
                      <MessageCircle size={16} />
                      <span>Konsultasi Khusus {leader.title}</span>
                    </a>

                    {leader.socials?.instagram && (
                      <a
                        href={leader.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leader-social-link"
                        aria-label="Instagram Profil"
                      >
                        <ExternalLink size={15} />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Documentation Gallery of Leaders in Tanah Suci */}
        <div className="leadership-gallery-wrapper">
          <Reveal variant="fade-up">
            <div className="gallery-header-row">
              <div>
                <span className="section-badge">
                  <Users size={14} className="text-gold" />
                  <span>Dokumentasi Nyata di Lapangan</span>
                </span>
                <h3 className="leadership-gallery-title">
                  Momen Kebersamaan &amp; Pelayanan VIP di Tanah Suci
                </h3>
              </div>
              {!isStandalonePage && (
                <Link href="/leadership" className="btn btn-outline btn-sm view-all-link">
                  <span>Halaman Lengkap Leadership</span>
                  <ChevronRight size={16} />
                </Link>
              )}
            </div>

            <div className="leadership-gallery-grid">
              {LEADERSHIP_DOCUMENTATION_GALLERY.map((item) => (
                <div
                  key={item.id}
                  className="leadership-gallery-card"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="gallery-card-img-wrap">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="gallery-card-img"
                    />
                    <div className="gallery-card-badge">{item.category}</div>
                    <div className="gallery-card-overlay">
                      <span className="gallery-view-hint">Klik untuk Perbesar</span>
                    </div>
                  </div>
                  <div className="gallery-card-content">
                    <h4 className="gallery-card-title">{item.title}</h4>
                    <p className="gallery-card-caption">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom Leadership Consultation Banner */}
        <Reveal variant="fade-up" delay={0.15}>
          <div className="leadership-bottom-cta">
            <div className="bottom-cta-content">
              <span className="cta-kicker">PELAYANAN KHUSUS &amp; PRIVATE DEDIKASI</span>
              <h3 className="cta-heading">
                Rencanakan Ibadah Umrah Bersama Pendampingan Muthawwif Profesional
              </h3>
              <p className="cta-desc">
                Konsultasikan langsung kebutuhan jadwal, akomodasi private bintang 5 view Ka&apos;bah, serta konsep ibadah bersama Direktur Utama dan jajaran manajemen Temanmu Tour &amp; Travel.
              </p>
            </div>
            <div className="bottom-cta-action">
              <a
                href={directConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageCircle size={20} />
                <span>Hubungi Direksi via WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Modal Lightbox for Gallery Photos */}
        {selectedImage && (
          <div
            className="leadership-modal-backdrop"
            onClick={() => setSelectedImage(null)}
          >
            <div className="leadership-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="leadership-modal-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Tutup foto"
              >
                &times;
              </button>
              <div className="leadership-modal-img-wrap">
                <Image
                  src={selectedImage}
                  alt="Dokumentasi Leadership Temanmu"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

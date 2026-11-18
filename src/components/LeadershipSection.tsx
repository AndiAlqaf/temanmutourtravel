"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Quote,
  Folder,
  FolderOpen,
  MapPin,
  X,
  Camera,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  LEADERSHIP_MEMBERS,
  VIP_MENTORSHIP_FIGURES,
  MUTHAWWIF_EXPERIENCE_FOLDERS,
  MuthawwifExperienceFolder,
} from "@/data/travelData";

export default function LeadershipSection() {
  const [activeFolder, setActiveFolder] = useState<MuthawwifExperienceFolder | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const openFolderModal = (folder: MuthawwifExperienceFolder) => {
    setActiveFolder(folder);
    setActivePhotoIndex(0);
  };

  const closeFolderModal = () => {
    setActiveFolder(null);
    setActivePhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!activeFolder) return;
    setActivePhotoIndex((prev) => (prev + 1) % activeFolder.allImages.length);
  };

  const prevPhoto = () => {
    if (!activeFolder) return;
    setActivePhotoIndex((prev) => (prev - 1 + activeFolder.allImages.length) % activeFolder.allImages.length);
  };

  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <Reveal variant="fade-up">
            <h2 className="section-title">
              Dipimpin oleh Generasi Ahli, Berilmu, &amp; Berintegritas
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
                      {leader.socials?.instagram && (
                        <a
                          href={leader.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leader-chip leader-social-chip"
                          aria-label="Instagram Profil"
                        >
                          <ExternalLink size={13} className="text-gold" />
                          <span>Instagram</span>
                        </a>
                      )}
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* FOLDER ALBUMS SECTION: Experience as Muthawwif (Seperti Foto Referensi) */}
        <div className="muthawwif-folders-wrapper" id="folder-dokumentasi">
          <Reveal variant="fade-up">
            <div className="folders-section-header">
              <h3 className="folders-title">
                Album Pengalaman &amp; Bimbingan Jamaah di Tanah Suci
              </h3>
              <p className="folders-subtitle">
                Buka setiap folder album di bawah ini untuk melihat arsip foto asli beserta keterangan resmi pengalaman pendampingan di setiap momentum ibadah.
              </p>
            </div>

            {/* Grid of Frosted Glass Folders */}
            <div className="folders-showcase-grid">
              {MUTHAWWIF_EXPERIENCE_FOLDERS.map((folder) => (
                <div
                  key={folder.id}
                  className="folder-card-item"
                  onClick={() => openFolderModal(folder)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Buka folder album ${folder.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openFolderModal(folder);
                    }
                  }}
                >
                  {/* Folder Container with Stacked Photos Peeking Out */}
                  <div className="folder-visual-wrap">
                    {/* Folder Back Tab */}
                    <div className="folder-back-tab" />

                    {/* Stacked Photos Peeking Out */}
                    <div className="folder-stacked-photos">
                      {folder.previewImages[2] && (
                        <div className="folder-peek-photo peek-photo-3">
                          <Image
                            src={folder.previewImages[2]}
                            alt={folder.title}
                            fill
                            sizes="180px"
                            className="peek-img"
                          />
                        </div>
                      )}
                      {folder.previewImages[1] && (
                        <div className="folder-peek-photo peek-photo-2">
                          <Image
                            src={folder.previewImages[1]}
                            alt={folder.title}
                            fill
                            sizes="180px"
                            className="peek-img"
                          />
                        </div>
                      )}
                      {folder.previewImages[0] && (
                        <div className="folder-peek-photo peek-photo-1">
                          <Image
                            src={folder.previewImages[0]}
                            alt={folder.title}
                            fill
                            sizes="180px"
                            className="peek-img"
                          />
                        </div>
                      )}
                    </div>

                    {/* Frosted Glass Folder Front Face */}
                    <div className="folder-front-pocket">
                      {/* Decorative Folder Lip */}
                      <div className="folder-front-lip" />

                      {/* Cute Stickers / Badges on Folder Surface */}
                      <div className="folder-stickers-container">
                        <span className="folder-sticker-badge sticker-flag">
                          🇸🇦 {folder.stickerText}
                        </span>
                        <span className="folder-sticker-badge sticker-icon">
                          <Camera size={12} />
                        </span>
                      </div>

                      {/* Click prompt hover indicator */}
                      <div className="folder-hover-prompt">
                        <FolderOpen size={16} />
                        <span>Buka Album</span>
                      </div>
                    </div>
                  </div>

                  {/* Folder Caption Info */}
                  <div className="folder-meta-wrap">
                    <h4 className="folder-title">{folder.title}</h4>
                    <span className="folder-count-pill">{folder.count} photos</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* INTERACTIVE FOLDER ALBUM MODAL (POPS UP WHEN FOLDER IS CLICKED) */}
        {activeFolder && (
          <div
            className="folder-modal-backdrop"
            onClick={closeFolderModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="folder-modal-window"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="folder-modal-header">
                <div className="folder-modal-title-col">
                  <div className="folder-modal-badge-row">
                    <span className="folder-active-badge">
                      <Folder size={14} />
                      <span>{activeFolder.badge}</span>
                    </span>
                    <span className="folder-active-location">
                      <MapPin size={13} />
                      <span>{activeFolder.location}</span>
                    </span>
                  </div>
                  <h3 className="folder-modal-heading">{activeFolder.title}</h3>
                  <p className="folder-modal-desc">{activeFolder.description}</p>
                </div>

                <button
                  className="folder-modal-close-btn"
                  onClick={closeFolderModal}
                  aria-label="Tutup Album"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Body: Active Large Viewer + Thumbnails */}
              <div className="folder-modal-body">
                {/* Main Large Photo Stage */}
                <div className="folder-modal-stage">
                  <div className="folder-stage-img-wrap">
                    <Image
                      src={activeFolder.allImages[activePhotoIndex].src}
                      alt={activeFolder.allImages[activePhotoIndex].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 860px"
                      className="folder-stage-img"
                      priority
                    />

                    {/* Navigation Arrows */}
                    {activeFolder.allImages.length > 1 && (
                      <>
                        <button
                          className="folder-arrow-btn arrow-prev"
                          onClick={prevPhoto}
                          aria-label="Foto Sebelumnya"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          className="folder-arrow-btn arrow-next"
                          onClick={nextPhoto}
                          aria-label="Foto Berikutnya"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    {/* Counter Indicator */}
                    <div className="folder-photo-counter">
                      {activePhotoIndex + 1} / {activeFolder.allImages.length}
                    </div>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="folder-thumbnails-row">
                  {activeFolder.allImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`folder-thumb-item ${activePhotoIndex === idx ? "is-active" : ""}`}
                      onClick={() => setActivePhotoIndex(idx)}
                    >
                      <Image
                        src={img.src}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="100px"
                        className="folder-thumb-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";
import Reveal from "@/components/Reveal";

const HERO_SLIDES = [
  {
    src: "/images/hero-kaaba.jpg",
    alt: "Suasana Khusyuk di Hadapan Ka'bah",
    title: "Temanmu Beribadah",
    subtitle: "Teman Menuju Surga • Menemani dari Hati",
    label: "Ka'bah",
  },
  {
    src: "/images/momen-keluarga-nabawi.jpg",
    alt: "Kebersamaan Jamaah Keluarga di Pelataran Masjid Nabawi",
    title: "Ibadah Keluarga Khusyuk",
    subtitle: "Kedamaian Beribadah Bersama Orang Tercinta",
    label: "Nabawi",
  },
  {
    src: "/images/hotel-view-kaaba.jpg",
    alt: "Suite Hotel Bintang 5 View Ka'bah",
    title: "Akomodasi Bintang 5 Ring 1",
    subtitle: "Kenyamanan Maksimal Berjarak Dekat dengan Masjid",
    label: "Hotel VIP",
  },
  {
    src: "/images/nabawi-group.jpg",
    alt: "Kekeluargaan Jamaah Temanmu Tour & Travel",
    title: "Pendampingan dari Hati",
    subtitle: "Ibadah Terbimbing, Nyaman & Tanpa Terburu-buru",
    label: "Jamaah",
  },
  {
    src: "/images/makkah-family-zainal.jpg",
    alt: "City Tour & Kebersamaan Jamaah Singapura",
    title: "Fleksibel & Ramah Lansia",
    subtitle: "Armada Eksklusif & Jadwal Sesuai Ritme Keluarga",
    label: "City Tour",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const whatsappUrl = `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai paket Umrah Private & Keluarga."
  )}`;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="hero-wrapper" id="tentang">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <Reveal variant="fade-up">
            <h1 className="hero-headline">
              Wujudkan Perjalanan Umrah yang Lebih <span>Personal</span>, Nyaman, & Bermakna.
            </h1>

            <p className="hero-desc">
              Umrah bukan sekadar perjalanan ke Tanah Suci. Ini adalah perjalanan hati bersama
              orang-orang yang kita cintai. Temanmu hadir untuk menemani perjalanan ibadah Anda
              dengan fleksibilitas penuh, tanpa harus menunggu rombongan besar.
            </p>

            <div className="hero-ctas">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageCircle size={20} />
                <span>Konsultasi Private</span>
              </a>

              <a href="#paket-umrah" className="btn btn-outline btn-lg">
                <span>Lihat Pilihan Paket</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-num">2021</span>
                <span className="stat-label">Mendampingi Jamaah</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Konsep Private & Fleksibel</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">PPIU</span>
                <span className="stat-label">212210042780001 Resmi</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">ASEAN</span>
                <span className="stat-label">Jejaring Layanan</span>
              </div>
            </div>
          </Reveal>

          {/* Visual Showcase: Enlarged Auto-Sliding Image Carousel */}
          <Reveal variant="scale" delay={0.15}>
            <div
              className="hero-visual-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slider Viewport with Smooth Horizontal Slide */}
              <div className="hero-slider-viewport">
                <div
                  className="hero-slider-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {HERO_SLIDES.map((slide, idx) => (
                    <div key={idx} className="hero-slide-item">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        className="hero-main-img"
                        sizes="(max-width: 992px) 100vw, 680px"
                      />
                    </div>
                  ))}
                </div>

                {/* Arrow Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="hero-slider-arrow hero-slider-prev"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="hero-slider-arrow hero-slider-next"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Slide indicator dots */}
                <div className="hero-slider-dots">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`hero-slider-dot ${idx === currentSlide ? "active" : ""}`}
                      aria-label={`Ke foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Minimalist Overlay Banner */}
              <div className="hero-floating-badge">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1.5px solid var(--color-gold)",
                      position: "relative",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "var(--color-primary-dark)",
                    }}
                  >
                    <Image
                      src="/images/Logo.jpeg"
                      alt="Logo Temanmu"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="hero-floating-badge-text" style={{ minWidth: 0 }}>
                    <h4>{HERO_SLIDES[currentSlide].title}</h4>
                    <p>{HERO_SLIDES[currentSlide].subtitle}</p>
                  </div>
                </div>

                <a
                  href="#mengapa-kami"
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    flexShrink: 0,
                  }}
                >
                  Filosofi <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Sub-strip with authentic photo thumbnails linked to slider */}
            <div className="hero-thumbnails-strip">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`hero-thumbnail-item ${idx === currentSlide ? "active" : ""}`}
                  aria-label={`Pilih foto ${slide.label}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="hero-thumbnail-overlay">
                    <span>{slide.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, Compass, PhoneCall } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Mengapa Kami", href: "#mengapa-kami" },
    { label: "Konsep Private", href: "#konsep-private" },
    { label: "Paket Umrah", href: "#paket-umrah" },
    { label: "Rencana & Biaya", href: "#kalkulator" },
    { label: "Dokumentasi", href: "#galeri" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY;

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const createWhatsAppUrl = (text: string) => {
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo-wrap" aria-label="Temanmu Tour & Travel">
          <div className="brand-logo-img-wrap">
            <Image
              src="/images/Logo.jpeg"
              alt="Logo Temanmu Tour & Travel"
              width={46}
              height={46}
              className="brand-logo-img"
              priority
            />
          </div>
          <div className="brand-text-col">
            <span className="brand-title">TEMANMU</span>
            <span className="brand-sub">Tour & Travel</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button Desktop */}
        <div className="nav-actions-desktop">
          <a
            href={createWhatsAppUrl(
              "Halo Temanmu Tour & Travel, saya ingin berkonsultasi mengenai perjalanan umrah private/keluarga."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <MessageCircle size={16} />
            <span>Konsultasi Umrah</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="nav-link"
              style={{ fontSize: "1rem", padding: "8px 0" }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href={createWhatsAppUrl(
                "Halo Temanmu Tour & Travel, saya ingin konsultasi perjalanan umrah."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={handleLinkClick}
            >
              <MessageCircle size={18} />
              <span>Hubungi WhatsApp (+62 812-1455-8707)</span>
            </a>
            <a
              href="tel:+6281214558707"
              className="btn btn-outline btn-sm"
              onClick={handleLinkClick}
            >
              <PhoneCall size={16} />
              <span>Telepon Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

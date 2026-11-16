"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, PhoneCall } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isClickScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Konsep Private", href: "#konsep-private" },
    { label: "Paket Umrah", href: "#paket-umrah" },
    { label: "Simulasi Biaya", href: "#kalkulator" },
    { label: "Transportasi", href: "#transportasi" },
    { label: "Visa & Vaksin", href: "#visa-vaksin" },
    { label: "Galeri", href: "#galeri" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Don't override active section while smooth scrolling from a user click
      if (isClickScrollingRef.current) return;

      // If near the very top of the page, clear active highlight
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // If near the very bottom of the page, activate FAQ
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("faq");
        return;
      }

      const headerOffset = 180;
      let matchedSection = "";

      // Check sections from bottom to top using getBoundingClientRect
      for (const link of [...navLinks].reverse()) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            matchedSection = id;
            break;
          }
        }
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    };

    const handleUserInteraction = () => {
      // If user manually scrolls via mousewheel or touch, cancel click lock immediately
      isClickScrollingRef.current = false;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isClickScrollingRef.current = true;
    setMobileMenuOpen(false);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      try {
        window.history.pushState(null, "", `#${sectionId}`);
      } catch (_) {}
    }

    // Release lock after smooth scroll animation completes (typically ~800ms)
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
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
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, sectionId)}
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

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-label="Menu Navigasi Mobile">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, sectionId)}
                  className={`nav-link ${activeSection === sectionId ? "active" : ""}`}
                  style={{
                    fontSize: "1.05rem",
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                    minHeight: "44px",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <div
              style={{
                paddingTop: "14px",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "4px",
              }}
            >
              <a
                href={createWhatsAppUrl(
                  "Halo Temanmu Tour & Travel, saya ingin konsultasi perjalanan umrah."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => setMobileMenuOpen(false)}
                style={{ justifyContent: "center", minHeight: "46px" }}
              >
                <MessageCircle size={18} />
                <span>Hubungi WhatsApp (+62 812-1455-8707)</span>
              </a>
              <a
                href="tel:+6281214558707"
                className="btn btn-outline btn-sm"
                onClick={() => setMobileMenuOpen(false)}
                style={{ justifyContent: "center", minHeight: "44px" }}
              >
                <PhoneCall size={16} />
                <span>Telepon Langsung</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

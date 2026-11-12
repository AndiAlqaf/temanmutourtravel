"use client";

import { useState } from "react";
import {
  Car,
  UserCheck,
  ShieldCheck,
  Clock,
  Users,
  Briefcase,
  MessageCircle,
  MapPin,
  Search,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import {
  TRANSPORT_FEATURES,
  TRANSPORT_VEHICLES,
  TRAVEL_INFO,
  TransportVehicle,
  TransportRoute,
} from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function TransportSection() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("camry");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeVehicle: TransportVehicle =
    TRANSPORT_VEHICLES.find((v) => v.id === selectedVehicleId) ||
    TRANSPORT_VEHICLES[0];

  // Filter routes by category and search term
  const filteredRoutes = activeVehicle.routes.filter((route) => {
    const matchesCategory =
      selectedCategory === "all" || route.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (route.note && route.note.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getVehicleBookingWaUrl = (vehicle: TransportVehicle) => {
    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi sewa transportasi di Arab Saudi untuk armada *${vehicle.name} (${vehicle.capacity})*. Mohon informasi ketersediaan jadwalnya.`;
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getRouteBookingWaUrl = (vehicle: TransportVehicle, route: TransportRoute) => {
    const noteText = route.note ? ` (Catatan: ${route.note})` : "";
    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin memesan transportasi di Arab Saudi:\n\n• Armada: ${vehicle.name}\n• Rute: ${route.from} -> ${route.to}\n• Tarif: ${route.priceSAR} SAR${noteText}\n\nMohon info ketersediaan dan proses pemesanannya. Terima kasih!`;
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getCustomRouteWaUrl = () => {
    const text = `Assalamu'alaikum Temanmu Tour & Travel, saya ingin menanyakan layanan transportasi custom / carter harian di Tanah Suci untuk armada ${activeVehicle.name}.`;
    return `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Car":
        return <Car size={26} className="text-gold" />;
      case "UserCheck":
        return <UserCheck size={26} className="text-gold" />;
      case "ShieldCheck":
        return <ShieldCheck size={26} className="text-gold" />;
      case "Clock":
        return <Clock size={26} className="text-gold" />;
      default:
        return <Car size={26} className="text-gold" />;
    }
  };

  return (
    <section className="section bg-alt" id="transportasi">
      <div className="container">
        {/* Section Header */}
        <Reveal variant="fade-up">
          <div className="section-header" style={{ marginBottom: "36px" }}>
            <h2 className="section-title">
              Armada Nyaman & Terawat di Makkah, Madinah & Jeddah
            </h2>
            <p className="section-subtitle">
              Pesan transportasi privat bersama sopir profesional untuk antar-jemput bandara,
              stasiun kereta cepat Haramain, mobilitas hotel, hingga ziarah Makkah, Madinah, dan Thaif.
            </p>

            {/* Badges Info */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <span className="transport-pill-tag">
                <MapPin size={14} className="text-gold" /> Berbasis di Makkah (KSA)
              </span>
              <span className="transport-pill-tag">
                <Clock size={14} className="text-gold" /> Layanan 24/7 Nonstop
              </span>
              <span className="transport-pill-tag">
                <ShieldCheck size={14} className="text-gold" /> Sopir Ramah & Tepat Waktu
              </span>
            </div>
          </div>
        </Reveal>

        {/* 4 Core Pillars */}
        <div className="transport-pillars-grid">
          {TRANSPORT_FEATURES.map((feat, idx) => (
            <Reveal key={feat.title} variant="fade-up" delay={idx * 0.08}>
              <div className="transport-pillar-card">
                <div className="transport-pillar-icon">{renderFeatureIcon(feat.icon)}</div>
                <h3 className="transport-pillar-title">{feat.title}</h3>
                <p className="transport-pillar-desc">{feat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Vehicle Selection Tabs */}
        <Reveal variant="fade-up" delay={0.15}>
          <div className="transport-vehicle-selector">
            <div className="transport-tabs-nav">
              {TRANSPORT_VEHICLES.map((vehicle) => {
                const isSelected = vehicle.id === selectedVehicleId;
                return (
                  <button
                    key={vehicle.id}
                    onClick={() => {
                      setSelectedVehicleId(vehicle.id);
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className={`transport-tab-btn ${isSelected ? "is-active" : ""}`}
                    aria-selected={isSelected}
                  >
                    <div className="transport-tab-header">
                      <div className="transport-tab-name-wrap">
                        <span className="transport-tab-name">{vehicle.name}</span>
                        <span className="transport-tab-category">{vehicle.category}</span>
                      </div>
                      {vehicle.featured && (
                        <span className="transport-featured-badge">
                          {vehicle.badge}
                        </span>
                      )}
                    </div>
                    <div className="transport-tab-meta">
                      <span>
                        <Users size={13} /> {vehicle.capacity.split("(")[0].trim()}
                      </span>
                      <span>•</span>
                      <span>
                        <Briefcase size={13} /> {vehicle.luggage}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Active Vehicle Detail & Route Rates */}
        <Reveal variant="fade-up" delay={0.2}>
          <div className="transport-showcase-box">
            {/* Top Showcase Info */}
            <div className="transport-showcase-header">
              <div className="transport-showcase-info">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <span className="transport-category-badge">{activeVehicle.category}</span>
                  <span className="badge-subtle" style={{ margin: 0, padding: "4px 10px", fontSize: "0.75rem" }}>
                    {activeVehicle.badge}
                  </span>
                </div>
                <h3 className="transport-showcase-title">{activeVehicle.name}</h3>
                <p className="transport-showcase-tagline">{activeVehicle.tagline}</p>
                <p className="transport-showcase-desc">{activeVehicle.description}</p>

                {/* Specs Pill List */}
                <div className="transport-specs-row">
                  <div className="transport-spec-pill">
                    <Users size={16} className="text-gold" />
                    <div>
                      <span className="spec-label">Kapasitas:</span>
                      <strong>{activeVehicle.capacity}</strong>
                    </div>
                  </div>
                  <div className="transport-spec-pill">
                    <Briefcase size={16} className="text-gold" />
                    <div>
                      <span className="spec-label">Kapasitas Bagasi:</span>
                      <strong>{activeVehicle.luggage}</strong>
                    </div>
                  </div>
                  <div className="transport-spec-pill">
                    <CheckCircle2 size={16} className="text-gold" />
                    <div>
                      <span className="spec-label">Rekomendasi:</span>
                      <strong>{activeVehicle.idealFor}</strong>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="transport-features-chips">
                  {activeVehicle.features.map((item, fIdx) => (
                    <span key={fIdx} className="transport-chip-item">
                      <CheckCircle2 size={13} className="text-gold" /> {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking CTA Card */}
              <div className="transport-quick-action">
                <div className="transport-quick-card">
                  <div className="transport-quick-badge">
                    <Clock size={14} /> Siap 24 Jam Nonstop
                  </div>
                  <h4>Booking {activeVehicle.name}</h4>
                  <p>
                    Butuh antar-jemput bandara, stasiun kereta, atau ziarah? Sopir kami siap menyambut Anda.
                  </p>
                  <a
                    href={getVehicleBookingWaUrl(activeVehicle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", gap: "8px" }}
                  >
                    <MessageCircle size={18} /> Hubungi via WhatsApp
                  </a>
                  <span className="transport-quick-subnote">
                    *Tarif dalam Saudi Riyal (SAR). Pembayaran praktis & fleksibel.
                  </span>
                </div>
              </div>
            </div>

            {/* Route List Filter Bar */}
            <div className="transport-routes-bar">
              <div className="transport-routes-bar-left">
                <h4 className="transport-routes-title">
                  Daftar Rute & Tarif ({activeVehicle.name})
                </h4>
                <p className="transport-routes-subtitle">
                  Tarif transparan dalam Saudi Riyal (SAR) per armada untuk sekali jalan atau ziarah.
                </p>
              </div>

              {/* Search & Filter */}
              <div className="transport-filters-wrap">
                <div className="transport-search-box">
                  <Search size={16} className="transport-search-icon" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari rute, bandara, ziarah..."
                    className="transport-search-input"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="transport-search-clear"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="transport-category-filters">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`transport-filter-chip ${selectedCategory === "all" ? "active" : ""}`}
                  >
                    Semua ({activeVehicle.routes.length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory("airport")}
                    className={`transport-filter-chip ${selectedCategory === "airport" ? "active" : ""}`}
                  >
                    Bandara
                  </button>
                  <button
                    onClick={() => setSelectedCategory("ziarah")}
                    className={`transport-filter-chip ${selectedCategory === "ziarah" ? "active" : ""}`}
                  >
                    Ziarah & Thaif
                  </button>
                  <button
                    onClick={() => setSelectedCategory("station")}
                    className={`transport-filter-chip ${selectedCategory === "station" ? "active" : ""}`}
                  >
                    Stasiun Kereta
                  </button>
                  <button
                    onClick={() => setSelectedCategory("intercity")}
                    className={`transport-filter-chip ${selectedCategory === "intercity" ? "active" : ""}`}
                  >
                    Antar Kota
                  </button>
                </div>
              </div>
            </div>

            {/* Routes Grid / Table */}
            {filteredRoutes.length === 0 ? (
              <div className="transport-empty-state">
                <HelpCircle size={36} className="text-muted" />
                <p>Tidak ada rute yang cocok dengan pencarian "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: "10px" }}
                >
                  Reset Pencarian
                </button>
              </div>
            ) : (
              <div className="transport-routes-grid">
                {filteredRoutes.map((route) => (
                  <div
                    key={route.id}
                    className={`transport-route-card ${route.highlight ? "is-highlighted" : ""}`}
                  >
                    <div className="transport-route-main">
                      <div className="transport-route-locations">
                        <span className="route-place-text">{route.from}</span>
                        <div className="transport-route-arrow-line">
                          <ArrowRight size={14} className="route-arrow-icon" />
                        </div>
                        <span className="route-place-text">{route.to}</span>
                      </div>

                      {route.note && (
                        <div className="transport-route-note">
                          <span>{route.note}</span>
                        </div>
                      )}
                    </div>

                    <div className="transport-route-price-col">
                      <div className="transport-price-wrap">
                        <span className="transport-price-num">{route.priceSAR}</span>
                        <span className="transport-price-curr">SAR</span>
                      </div>
                      <a
                        href={getRouteBookingWaUrl(activeVehicle, route)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm transport-route-btn"
                        aria-label={`Pesan rute ${route.from} ke ${route.to} dengan ${activeVehicle.name}`}
                      >
                        <MessageCircle size={14} /> Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Help & Custom Route Note */}
            <div className="transport-custom-cta-box">
              <div className="transport-custom-cta-content">
                <h4 style={{ color: "#ffffff", marginBottom: "6px", fontSize: "1.15rem" }}>
                  Butuh Rute Khusus, Carter Harian, atau Penjemputan Rombongan?
                </h4>
                <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "0.92rem", margin: 0 }}>
                  Kenyamanan Anda adalah prioritas kami! Kami melayani antar-jemput bandara/hotel, ziarah private,
                  maupun sewa harian standby dengan armada Camry, Staria, Hiace, dan GMC XL di seluruh Tanah Suci.
                </p>
              </div>
              <a
                href={getCustomRouteWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ flexShrink: 0, whiteSpace: "nowrap" }}
              >
                <MessageCircle size={18} /> Chat WhatsApp 24 Jam
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


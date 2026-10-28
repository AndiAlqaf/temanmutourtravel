import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValuesSection from "@/components/ValuesSection";
import PrivateConceptSection from "@/components/PrivateConceptSection";
import PromoHighlight from "@/components/PromoHighlight";
import PackagesSection from "@/components/PackagesSection";
import CustomTripCalculator from "@/components/CustomTripCalculator";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import ContactCtaSection from "@/components/ContactCtaSection";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { TRAVEL_INFO } from "@/data/travelData";

export default function Home() {
  const floatingWhatsAppUrl = `https://wa.me/${TRAVEL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Assalamu'alaikum Temanmu Tour & Travel, saya ingin berkonsultasi mengenai paket Umrah Private & Keluarga."
  )}`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }} className="page-fade-in">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Core Pillars & Philosophy (Mengapa Temanmu?) */}
        <ValuesSection />

        {/* 3. Umrah dengan Konsep Private (Your Journey, Your Way) */}
        <PrivateConceptSection />

        {/* 4. Special Promo Banner (9D Start Makassar Promo) */}
        <PromoHighlight />

        {/* 5. Packages Comparison (35 Jt, 53 Jt, 88 Jt) */}
        <PackagesSection />

        {/* 6. Interactive Umrah Customizer & Cost Calculator */}
        <CustomTripCalculator />

        {/* 7. Authentic Gallery & Real Pilgrim Documentation */}
        <GallerySection />

        {/* 8. Testimonials & Pilgrim Stories */}
        <TestimonialSection />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Slide 12 Emotional Quotation & Consultation Form */}
        <ContactCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button for Quick Access */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Langsung"
        className="floating-wa"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}

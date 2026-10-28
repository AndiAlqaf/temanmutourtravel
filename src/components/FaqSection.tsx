"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/travelData";
import Reveal from "@/components/Reveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section bg-alt" id="faq">
      <div className="container">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2 className="section-title">Informasi & Panduan Umrah</h2>
            <p className="section-subtitle">
              Ketahui lebih dalam mengenai tata cara persiapan, konsep perjalanan private, dan
              kepastian legalitas bersama Temanmu.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={0.15}>
          <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

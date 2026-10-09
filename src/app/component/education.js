"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./sectionHeading";

const GPA = 3.67;
const MAX = 4;
const R = 52;
const C = 2 * Math.PI * R;

const milestones = ["Kerja Praktik", "KKN", "Tugas Akhir"];

export default function Education() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="education" className="px-4 md:px-12 py-20 scroll-mt-16">
      <SectionHeading label="PENDIDIKAN" title="Latar belakang" />

      <div
        ref={ref}
        className="group flex flex-col sm:flex-row items-center gap-8 bg-[var(--bg-raised)] border border-[var(--line)] p-8 shadow-[0_10px_30px_rgba(60,70,160,0.08)] transition hover:border-[var(--accent)]"
      >
        {/* Ring IPK */}
        <div className="relative h-36 w-36 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
            <circle cx="60" cy="60" r={R} fill="none" stroke="var(--soft)" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r={R}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={seen ? C * (1 - GPA / MAX) : C}
              style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-[var(--ink)]">{GPA.toFixed(2)}</span>
            <span className="text-[10px] font-semibold tracking-widest text-[var(--muted)]">IPK / 4.00</span>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <div className="text-xs font-semibold text-[var(--accent)]">Sep 2022 — Agu 2026</div>
          <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[var(--ink)]">Universitas Atma Jaya Yogyakarta</h3>
          <div className="text-sm text-[var(--muted)]">S1 Informatika</div>

          <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">Dikerjakan selama studi</div>
          <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
            {milestones.map((m) => (
              <a
                key={m}
                href="#projects"
                className="bg-[var(--soft)] text-[var(--ink)] text-xs font-medium px-3 py-1.5 transition hover:bg-[var(--accent)] hover:text-white"
              >
                {m}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
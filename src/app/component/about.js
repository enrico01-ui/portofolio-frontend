"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./sectionHeading";

const tabs = [
  {
    id: "profil",
    label: "Profil",
    title: "S1 Informatika, UAJY",
    meta: "Sep 2022 — Agu 2026 · IPK 3.67 / 4.00",
    body: "Lulusan Informatika Universitas Atma Jaya Yogyakarta dengan pengalaman membangun aplikasi web dan mobile, dari frontend sampai backend.",
  },
  {
    id: "fokus",
    label: "Fokus",
    title: "Apa yang saya kejar",
    body: "UI yang responsif dan terintegrasi rapi dengan API, serta eksplorasi keamanan data.",
    list: ["Antarmuka React.js & Vite", "REST API dengan Laravel & Node.js", "Integritas data berbasis blockchain"],
  }
];

const stats = [
  { to: 3.67, decimals: 2, label: "IPK / 4.00" },
  { to: 3, decimals: 0, label: "Proyek utama" },
  { to: 8, decimals: 0, suffix: "+", label: "Bahasa & tools" },
];

function Stat({ to, decimals, suffix = "", label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) return setValue(to);
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1200, 1);
          setValue(to * (1 - Math.pow(1 - t, 3))); // ease-out
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <div
      ref={ref}
      className="group bg-[var(--bg-raised)] border border-[var(--line)] p-5 shadow-[0_10px_30px_rgba(60,70,160,0.08)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <span className="block text-3xl font-extrabold text-[var(--accent)] tabular-nums">
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span className="block mt-1 text-xs text-[var(--muted)]">{label}</span>
    </div>
  );
}

export default function About() {
  const [active, setActive] = useState("profil");
  const tab = tabs.find((t) => t.id === active);

  return (
    <section id="about" className="px-4 md:px-12 py-20 scroll-mt-16">
      <SectionHeading label="TENTANG" title="Sedikit tentang saya" />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-5">
          <p className="text-2xl md:text-3xl font-bold leading-snug text-[var(--ink)]">
            Membangun antarmuka yang <span className="text-[var(--accent)]">rapi</span> dan
            backend yang <span className="text-[var(--accent)]">andal</span>.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Terbiasa bekerja dengan React.js, Vite, REST API, Laravel, dan Flutter, termasuk
            membangun sistem informasi akademik lengkap dengan dashboard dan pengelolaan data.
            Tugas akhir saya membandingkan dua platform blockchain untuk menguji integritas
            data akademik.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* Kartu tab interaktif */}
        <div className="bg-[var(--bg-raised)] border border-[var(--line)] shadow-[0_10px_30px_rgba(60,70,160,0.08)]">
          <div role="tablist" className="flex border-b border-[var(--line)]">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`flex-1 px-4 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                  active === t.id
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div key={tab.id} role="tabpanel" className="p-6 min-h-[240px] animate-[fadeUp_0.35s_ease-out_both]">
            <h3 className="text-xl font-bold text-[var(--ink)]">{tab.title}</h3>
            {tab.meta && <div className="text-xs font-semibold text-[var(--accent)] mt-1">{tab.meta}</div>}
            {tab.body && <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{tab.body}</p>}
            {tab.list && (
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {tab.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-3 bg-[var(--accent)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
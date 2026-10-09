"use client";

import { useState } from "react";
import SectionHeading from "./sectionHeading";

const groups = [
  { title: "Frontend", items: ["React JSX", "Vite", "Flutter", "Bootstrap"] },
  { title: "Backend", items: ["Laravel", "Node.js", "Express.js", "REST API"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
  { title: "Bahasa", items: ["JavaScript", "Dart", "PHP", "Java", "C++", "C#"] },
  { title: "Tools", items: ["Git", "Postman", "Figma", "Firebase", "Docker"] },
  { title: "Blockchain", items: ["Ethereum", "Hyperledger Fabric"] },
];

const all = groups.flatMap((g) => g.items.map((name) => ({ name, group: g.title })));

export default function Skills({ projects = [] }) {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const visible = filter === "Semua" ? all : all.filter((s) => s.group === filter);
  const usedIn = (name) => projects.filter((p) => p.stack.includes(name));
  const detail = selected ? all.find((s) => s.name === selected) : null;
  const detailProjects = detail ? usedIn(detail.name) : [];

  const filters = [{ title: "Semua", count: all.length }, ...groups.map((g) => ({ title: g.title, count: g.items.length }))];

  return (
    <section id="skills" className="px-4 md:px-12 py-20 scroll-mt-16">
      <SectionHeading label="KEAHLIAN" title="Yang saya kuasai" />

      {/* Filter kategori */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.title}
            aria-pressed={filter === f.title}
            onClick={() => {
              setFilter(f.title);
              setSelected(null);
            }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition ${
              filter === f.title
                ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            {f.title}
            <span className="ml-2 opacity-60">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
        {/* Chip skill */}
        <div className="bg-[var(--bg-raised)] border border-[var(--line)] p-6 shadow-[0_10px_30px_rgba(60,70,160,0.08)]">
          <div key={filter} className="flex flex-wrap gap-3">
            {visible.map((s, i) => {
              const used = usedIn(s.name).length > 0;
              const on = selected === s.name;
              return (
                <button
                  key={s.name}
                  aria-pressed={on}
                  onClick={() => setSelected(on ? null : s.name)}
                  style={{ animationDelay: `${i * 30}ms` }}
                  className={`relative px-4 py-2.5 text-sm font-medium transition animate-[fadeUp_0.35s_ease-out_both] hover:-translate-y-0.5 ${
                    on
                      ? "bg-[var(--accent)] text-white shadow-[0_8px_20px_rgba(240,18,74,0.3)]"
                      : "bg-[var(--soft)] text-[var(--ink)] hover:bg-[var(--accent)] hover:text-white"
                  }`}
                >
                  {s.name}
                  {used && (
                    <span
                      aria-hidden
                      className={`absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full ${on ? "bg-white" : "bg-[var(--accent)]"}`}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-[var(--muted)] flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Titik merah = dipakai di proyek saya. Klik skill untuk melihat detailnya.
          </p>
        </div>

        {/* Panel detail */}
        <div className="bg-[var(--bg-raised)] border border-[var(--line)] border-t-2 border-t-[var(--accent)] p-6 min-h-[200px] shadow-[0_10px_30px_rgba(60,70,160,0.08)]">
          {detail ? (
            <div key={detail.name} className="animate-[fadeUp_0.35s_ease-out_both]">
              <div className="text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">{detail.group}</div>
              <h3 className="text-2xl font-extrabold text-[var(--ink)] mt-1">{detail.name}</h3>
              {detailProjects.length > 0 ? (
                <>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Dipakai di</p>
                  <ul className="mt-2 space-y-2">
                    {detailProjects.map((p) => (
                      <li key={p.title}>
                        <a href="#projects" className="block text-sm text-[var(--ink)] hover:text-[var(--accent)] transition-colors">
                          <span className="text-[var(--muted)] text-xs block">{p.label}</span>
                          {p.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-4 text-sm text-[var(--muted)]">Belum tertaut ke proyek yang ditampilkan di portofolio ini.</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-[var(--muted)]">Pilih salah satu skill di kiri untuk melihat proyek yang memakainya.</p>
          )}
        </div>
      </div>
    </section>
  );
}
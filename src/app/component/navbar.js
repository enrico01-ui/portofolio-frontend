"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#skills", label: "Keahlian" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-7 py-5">
        <a href="#home" className="text-sm font-extrabold tracking-tight text-[var(--ink)]">
          EEAW<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                active === item.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden border border-[var(--line)] rounded-md px-3 py-2 text-xs font-semibold"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-7 py-4 border-t border-[var(--line)] bg-[var(--bg-raised)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={active === link.href ? "text-[var(--accent)]" : "text-[var(--ink)]"}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
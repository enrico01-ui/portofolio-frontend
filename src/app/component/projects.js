"use client";


import { useCallback, useState } from "react";
import Image from "next/image";
import SectionHeading from "./sectionHeading";
import Lightbox from "./lightbox";
 
export default function Projects({ projects = [] }) {
  const [pIndex, setPIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [open, setOpen] = useState(false);
 
  const project = projects[pIndex];
  // hanya ambil path gambar yang valid
  const images = project.images.filter((s) => s.startsWith("/"));
  const src = images[imgIndex] ?? images[0];
 
  const choose = (i) => {
    setPIndex(i);
    setImgIndex(0);
  };
 
  const closeLightbox = useCallback(() => setOpen(false), []);
  return (
    <section id="projects" className="px-4 md:px-12 py-20 scroll-mt-16">
      <SectionHeading label="PROYEK" title="Karya terpilih" />

      <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)] gap-8 items-start">
        {/* Daftar proyek */}
        <div role="tablist" className="flex min-w-0 lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
          {projects.map((p, i) => (
            <button
              key={p.title}
              role="tab"
              aria-selected={pIndex === i}
              onClick={() => choose(i)}
              className={`shrink-0 w-64 lg:w-full text-left p-4 border-l-2 transition ${
                pIndex === i
                  ? "border-[var(--accent)] bg-[var(--bg-raised)] shadow-[0_10px_30px_rgba(60,70,160,0.08)]"
                  : "border-[var(--line)] hover:border-[var(--accent)] hover:bg-[var(--bg-raised)]/60"
              }`}
            >
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                <span className="text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                {p.label}
              </span>
              <span className="block mt-1 text-sm font-bold text-[var(--ink)] leading-snug">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase */}
        <div
          key={project.title}
          className="w-full min-w-0 bg-[var(--bg-raised)] border border-[var(--line)] shadow-[0_10px_30px_rgba(60,70,160,0.08)] animate-[fadeUp_0.35s_ease-out_both]"
        >
          <button
            onClick={() => setOpen(true)}
            aria-label="Perbesar gambar"
            className="group relative block w-full aspect-[16/10] bg-[var(--soft)] cursor-zoom-in overflow-hidden"
          >
            {src && (
              <Image
                key={src}
                src={src}
                alt={`${project.title} — tampilan ${imgIndex + 1}`}
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-contain animate-[fadeUp_0.3s_ease-out_both]"
              />
            )}
            <span className="absolute bottom-3 right-3 bg-[var(--ink)]/80 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 opacity-0 transition group-hover:opacity-100">
              Perbesar
            </span>
            <span className="absolute top-3 left-3 bg-[var(--bg)]/90 text-[var(--ink)] text-[10px] font-bold px-2.5 py-1">
              {imgIndex + 1} / {images.length}
            </span>
          </button>

          {/* strip thumbnail: selalu ada supaya tinggi kartu sama di semua proyek */}
          <div className="flex h-[72px] items-center gap-2 px-3 overflow-x-auto border-b border-[var(--line)] min-w-0">
            {images.length > 1 ? (
              images.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Tampilkan gambar ${i + 1}`}
                  aria-current={i === imgIndex}
                  className={`relative shrink-0 h-12 w-[72px] bg-[var(--soft)] border-2 transition ${
                    i === imgIndex ? "border-[var(--accent)]" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={s} alt="" fill sizes="72px" className="object-cover" />
                </button>
              ))
            ) : (
              <span className="text-xs text-[var(--muted)]">Klik gambar untuk memperbesar.</span>
            )}
          </div>

          <div className="p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">{project.label}</div>
            <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[var(--ink)]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="bg-[var(--soft)] text-[var(--ink)] text-xs font-medium px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-[var(--ink)] text-[var(--ink)] text-xs font-bold uppercase tracking-wider px-6 py-3 transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
            >
              Lihat repository ↗
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && src && (
        <Lightbox images={images} alt={project.title} startIndex={imgIndex} onClose={closeLightbox} />
      )}
    </section>
  );
}
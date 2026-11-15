"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./sectionHeading";
import Lightbox from "./lightbox";

const section = "px-4 md:px-12 py-20 scroll-mt-16";

export default function Certificates({ certificates }) {
  const [openIndex, setOpenIndex] = useState(null);
  const images = certificates.map((c) => c.image);

  return (
    <section id="sertifikat" className={section}>
      <SectionHeading label="SERTIFIKAT" title="Kemampuan yang tervalidasi" />

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c, i) => (
          <article
            key={c.title}
            className="group relative flex flex-col sm:flex-row border border-[var(--line)] bg-[var(--bg-raised)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(42,43,61,0.08)]"
          >
            <span className="absolute left-0 top-0 z-10 h-full w-0.5 bg-[var(--accent)]" />

            {/* Thumbnail: klik untuk memperbesar */}
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Perbesar sertifikat ${c.title}`}
              className="relative aspect-[4/3] w-full shrink-0 cursor-zoom-in overflow-hidden border-b border-[var(--line)] sm:w-48 sm:border-b-0 sm:border-r"
            >
              <Image
                src={c.image}
                alt={`Sertifikat ${c.title}`}
                fill
                sizes="(min-width: 640px) 192px, 100vw"
                className="object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </button>

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                {c.issuer}
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-[var(--ink)]">
                {c.title}
              </h3>
              <p className="mb-4 text-sm text-[var(--muted)]">{c.description}</p>

              <div className="mt-auto flex items-center justify-between text-xs font-semibold text-[var(--muted)]">
                <span>{c.date ?? ""}</span>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    Verifikasi →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          alt="Sertifikat"
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
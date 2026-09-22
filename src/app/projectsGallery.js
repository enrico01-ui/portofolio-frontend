"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "./lightbox";

export default function ProjectGallery({ images, alt }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="relative w-full aspect-video overflow-hidden border-b border-[var(--line)] cursor-zoom-in group"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={images[index]}
          alt={`${alt} — tampilan ${index + 1}`}
          fill
          className="object-cover transition group-hover:scale-105 duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
              aria-label="Sebelumnya"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
              aria-label="Berikutnya"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          alt={alt}
          startIndex={index}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
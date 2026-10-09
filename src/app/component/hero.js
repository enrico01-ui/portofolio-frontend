import Image from "next/image";
import { GitBranchIcon, icons, Mail } from "lucide-react";

const socials = [
  {
    href: "https://github.com/enrico01-ui",
    label: "GitHub",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/emanuel-enrico-681084377/",
    label: "LinkedIn",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=emanuelenrico100@gmail.com&su=Halo%20Emanuel",
    label: "Email",
    stroke: true,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid md:grid-cols-2 items-center gap-6 md:gap-10 px-4 md:px-6 lg:px-12 py-12 md:py-14 md:min-h-[560px] lg:min-h-[640px] overflow-hidden"
    >
      {/* TEKS */}
      <div className="flex flex-col gap-6 max-w-xl order-2 md:order-1">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[var(--ink)]">
          <span className="w-8 h-px bg-[var(--muted)]" />
          HALO, SAYA
        </div>
 
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--ink)]">
          <span className="text-[var(--accent)]">Emanuel Enrico</span>
          <br />
          Anindya Wibawa
        </h1>
 
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          <span className="text-[var(--accent)]">Frontend developer</span> lulusan Informatika
          UAJY, berbasis di Yogyakarta. Membangun antarmuka React.js &amp; Vite yang
          tersambung rapi ke backend Laravel dan Node.js — dari dashboard akademik sampai
          sistem verifikasi data berbasis blockchain.
        </p>
 
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href="/cv/CV_Emanuel_Enrico.pdf"
            download
            className="bg-[var(--accent)] text-white text-xs font-bold tracking-wider uppercase px-7 py-3.5 shadow-[0_8px_20px_rgba(240,18,74,0.3)] transition hover:-translate-y-0.5"
          >
            Unduh CV
          </a>
          <a
            href="#projects"
            className="border border-[var(--ink)] text-[var(--ink)] text-xs font-bold tracking-wider uppercase px-7 py-3.5 transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          >
            Lihat proyek
          </a>
        </div>
 
        <ul className="flex gap-3 mt-1">
            {socials.map((s) => (
                <li key={s.label}>
                <a
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                    <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill={s.stroke ? "none" : "currentColor"}
                    stroke={s.stroke ? "currentColor" : "none"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    >
                    {s.icon}
                    </svg>
                </a>
                </li>
            ))}
            </ul>
      </div>
 
      {/* FOTO */}
      <div className="relative flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-full max-w-[300px] md:max-w-[380px]">
          {/* cahaya halus di dekat kepala */}
          <span className="absolute top-[10%] left-[6%] w-24 h-24 rounded-full bg-white/90 blur-xl" />

          {/* bentuk organik, kompak, berpusat di belakang torso */}
          <svg
            aria-hidden
            viewBox="0 0 400 400"
            className="absolute left-[47%] top-[58%] -translate-x-1/2 -translate-y-1/2 w-[106%] aspect-square text-[#d6daf5]"
          >
            <path
              fill="currentColor"
              d="M205 38C295 28 372 105 358 200C346 292 285 372 190 364C98 356 34 290 44 198C54 108 118 48 205 38Z"
            />
          </svg>

          <Image
            src="/Photo/meRemoveBG2.png"
            alt="Emanuel Enrico Anindya Wibawa"
            width={520}
            height={800}
            sizes="(min-width: 768px) 380px, 300px"
            priority
            className="relative z-10 w-full h-auto grayscale"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.92) 60%, rgba(0,0,0,.72) 70%, rgba(0,0,0,.42) 80%, rgba(0,0,0,.16) 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,.92) 60%, rgba(0,0,0,.72) 70%, rgba(0,0,0,.42) 80%, rgba(0,0,0,.16) 90%, transparent 100%)",
            }}
          />
        </div>
      </div>
      
      {/* indikator scroll */}
      <a
        href="#about"
        className="hidden lg:flex absolute right-2 bottom-24 items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[var(--ink)] [writing-mode:vertical-rl]"
      >
        GULIR KE BAWAH
        <span className="w-px h-8 bg-[var(--ink)]" />
      </a>
    </section>
  );
}
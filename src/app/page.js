import Reveal from "@/app/reveal";
import Hero from "./component/hero";
import ProjectCard from "./component/projectCard";
import About from "./component/about";
import Skills from "./component/skills";
import SectionHeading from "./component/sectionHeading";
import Projects from "./component/projects";
import Education from "./component/education";

const projects = [
  {
    label: "Tugas Akhir",
    title: "Academic Data Security Testing System",
    description: "Aplikasi pengujian keamanan dan integritas data akademik, membandingkan Ethereum Sepolia Testnet dan Hyperledger Fabric dengan JWT, RBAC, dan verifikasi SHA-256.",
    stack: ["React.jsx", "Node.js", "PostgreSQL", "Ethereum", "Hyperledger Fabric", "Git", "Postman","Docker", "JavaScript", "Express.js"],
    images: ["/ui/tugasakhir/dashboard.png", "/ui/tugasakhir/input.png", "/ui/tugasakhir/verif.png", "REST API"],
    repo: "https://github.com/enrico01-ui/academic-blockchain",
  },
  {
    label: "Kerja Praktik",
    title: "SIAKAD — Hagios School of Life",
    description: "Sistem informasi akademik web dan mobile untuk presensi, SPP, rapor digital, dan pengumuman sekolah.",
    stack: ["React.jsx", "Vite", "Laravel", "Flutter", "MySQL", "Dart", "Git", "REST API", "Postman", "PHP", "Firebase", "JavaScript"],
    images: [
      "/ui/kp/login.png", "/ui/kp/dashboardadmin.png", "/ui/kp/dashboardmobile.jpg", "/ui/kp/datamaster.png",
      "/ui/kp/loginmobile.jpg", "/ui/kp/pengumuman.png",
      "/ui/kp/presensiguru.jpg", "/ui/kp/rapor.png", "/ui/kp/riwayatpresensi.jpg",
      "/ui/kp/tagihan.png", "/ui/kp/tagihanmobile.jpg", "/ui/kp/verifikasispp.png",
    ],
    repo: "https://github.com/enrico01-ui/siakad-frontend",
  },
  {
    label: "KKN",
    title: "Website UMKM & Potensi Padukuhan Sumber",
    description: "Website responsif untuk informasi UMKM dan potensi padukuhan, dengan CRUD dan dashboard admin.",
    stack: ["React.jsx", "Bootstrap", "Laravel", "JavaScript", "PHP", "MySQL"],
    images: ["/ui/kkn/home.png"],
    repo: "https://github.com/enrico01-ui/WebsitePadukuhanSumber",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["React.js", "React JSX", "Vite", "Flutter", "Bootstrap"] },
  { title: "Backend", items: ["Laravel", "Node.js", "Express.js", "REST API"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
  { title: "Bahasa", items: ["JavaScript", "Dart", "PHP", "Java", "C++", "C#"] },
  { title: "Tools", items: ["Git", "Postman", "Figma", "Firebase", "Docker"] },
  { title: "Blockchain", items: ["Ethereum", "Hyperledger Fabric"] },
];

const stats = [
  { value: "3.67", label: "IPK / 4.00" },
  { value: "3", label: "Proyek utama" },
  { value: "8+", label: "Bahasa & tools" },
];



const section = "px-4 md:px-12 py-20 scroll-mt-16";

export default function Home() {
  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-8">
      <Hero />

      {/* ABOUT */}
      <Reveal>
        <About />
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal>
        <section id="pengalaman" className={section}>
          <SectionHeading label="PENGALAMAN" title="Tempat saya bekerja" />
          <div className="relative pl-8 border-l border-[var(--line)]">
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" />
            <div className="text-xs font-semibold text-[var(--muted)] mb-1">Jan — Mar 2026</div>
            <h3 className="text-xl font-bold text-[var(--ink)]">Hagios School of Life</h3>
            <div className="text-[var(--accent)] text-sm font-semibold mb-4">Software Developer (Kerja Praktik)</div>
            <ul className="space-y-2 text-sm text-[var(--muted)] max-w-2xl">
              {[
                "Mengembangkan sistem informasi akademik (SIAKAD) berbasis web dan mobile untuk pengelolaan data akademik sekolah.",
                "Membangun aplikasi web dengan React.js dan Vite, terhubung ke backend Laravel REST API.",
                "Membangun fitur presensi, SPP, rapor digital, pengumuman, dan laporan.",
                "Mengembangkan aplikasi mobile pendamping menggunakan Flutter.",
                "Bekerja dengan pendekatan Agile-Iterative sepanjang proses pengembangan.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-px bg-[var(--accent)] shrink-0 scale-x-[2]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <Projects projects={projects} />
      </Reveal>

      {/* SKILLS */}
      <Reveal>
        <Skills projects={projects} />
      </Reveal>

      {/* EDUCATION */}
      <section id="education" className={section}>
        <Education />

      </section>

      {/* CONTACT */}
      <footer id="contact" className={`${section} text-center`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--ink)] mb-4">
          Ayo terhubung<span className="text-[var(--accent)]">.</span>
        </h2>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-md mx-auto">
          Terbuka untuk peluang sebagai full stack developer.
        </p>
        <a
          href= "https://mail.google.com/mail/?view=cm&fs=1&to=emanuelenrico100@gmail.com&su=Halo%20Emanuel"
          className="inline-block bg-[var(--accent)] text-white text-xs font-bold tracking-wider uppercase px-8 py-4 shadow-[0_8px_20px_rgba(240,18,74,0.3)] transition hover:-translate-y-0.5"
        >
          Kirim email
        </a>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-semibold text-[var(--muted)]">
          <a href="tel:087834010711" className="hover:text-[var(--accent)] transition-colors">087834010711</a>
          <a href="https://github.com/enrico01-ui" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/emanuel-enrico-681084377/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
        </div>
        <div className="mt-16 pt-6 border-t border-[var(--line)] text-xs text-[var(--muted)]">
          © 2026 Emanuel Enrico Anindya Wibawa
        </div>
      </footer>
    </div>
  );
}
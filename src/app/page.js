  import Reveal from "@/app/reveal";
  import TerminalCard from "./terminal";
  import ProjectGallery from "./projectsGallery";

  export default function Home() {
    return (
      <div  className="max-w-[1080px] mx-auto px-4 md:px-8">
        {/* HERO */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-12 px-4 md:px-12 py-12">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--muted)]">
              <span>Yogyakarta, Indonesia</span>
              <span className="w-10 h-px bg-[var(--line)]" />
              <span>Tersedia untuk kerja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--ink)]">
              Emanuel Enrico<br />Anindya Wibawa
            </h1>

            <p className="text-lg text-[var(--muted)]">
              Frontend developer lulusan Informatika UAJY. Membangun antarmuka
              React.js &amp; Vite yang tersambung rapi ke backend Laravel dan
              Node.js — dari dashboard akademik sampai sistem verifikasi data
              berbasis blockchain.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects">
                <button  className="rounded-md text-[var(--bg)] bg-[var(--accent)] font-semibold px-5 py-3 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md">
                Lihat proyek
              </button>
              </a>
              <a href="public/cv/CV_Emanuel_Enrico_2026_Frontend_Job_Matched.pdf" download="public/cv/CV_Emanuel_Enrico_2026_Frontend_Job_Matched.pdf">
                <button className="rounded-md border border-[var(--line)] text-[var(--ink)] px-5 py-3 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md">
                  Unduh CV
                </button>
              </a>
            </div>

            <div className="flex gap-8 mt-2">
              <div>
                <span className="block font-bold text-[var(--ink)] text-xl">3.67</span>
                <span className="text-[var(--muted)] text-xs font-mono">IPK / 4.00</span>
              </div>
              <div>
                <span className="block font-bold text-[var(--ink)] text-xl">3</span>
                <span className="text-[var(--muted)] text-xs font-mono">Proyek Utama</span>
              </div>
              <div>
                <span className="block font-bold text-[var(--ink)] text-xl">8+</span>
                <span className="text-[var(--muted)] text-xs font-mono">Bahasa &amp; tools</span>
              </div>
            </div>
          </div>

          <TerminalCard />
        </section>
        <Reveal>
        {/* ABOUT */}
        <section id="about" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-9">Tentang</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-[var(--muted)]">
              Lulusan S1 Informatika Universitas Atma Jaya Yogyakarta dengan pengalaman
              membangun aplikasi web dan mobile dari sisi frontend hingga backend.
              Terbiasa bekerja dengan React.js, Vite, REST API, Laravel, dan Flutter —
              termasuk membangun sistem informasi akademik lengkap dengan dashboard dan
              pengelolaan data.
            </p>
            <div>
              <p className="text-[var(--muted)] mb-5">
                Minat khusus di pengembangan UI yang responsif dan terintegrasi rapi dengan
                API, serta eksplorasi keamanan data — dibuktikan lewat tugas akhir yang
                menguji integritas data akademik menggunakan dua platform blockchain berbeda.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Vite", "Laravel", "Node.js", "Flutter", "PostgreSQL"].map((tag) => (
                  <span key={tag} className="font-mono text-xs border border-[var(--line)] rounded px-2 py-1 text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        </Reveal>    
        <Reveal>    
        {/* EXPERIENCE */}
        <section id="pengalaman" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-9">Pengalaman</h2>
          <div className="grid md:grid-cols-[160px_1fr] gap-7">
            <div className="font-mono text-sm text-[var(--muted)]">Jan — Mar 2026</div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--ink)]">Hagios School of Life</h3>
              <div className="text-[var(--accent)] text-sm font-semibold mb-3">Software Developer (Kerja Praktik)</div>
              <ul className="list-disc list-inside text-[var(--muted)] text-sm space-y-1.5">
                <li>Mengembangkan sistem informasi akademik (SIAKAD) berbasis web dan mobile untuk pengelolaan data akademik sekolah.</li>
                <li>Membangun aplikasi web dengan React.js dan Vite, terhubung ke backend Laravel REST API.</li>
                <li>Membangun fitur presensi, SPP, rapor digital, pengumuman, dan laporan.</li>
                <li>Mengembangkan aplikasi mobile pendamping menggunakan Flutter.</li>
                <li>Bekerja dengan pendekatan Agile-Iterative sepanjang proses pengembangan.</li>
              </ul>
            </div>
          </div>
        </section>
          </Reveal>        
        {/* PROJECTS */}
        <Reveal>
        <section id="projects" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-9">Proyek</h2>
          <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2 border border-[var(--line)] bg-[var(--bg-raised)] rounded-lg p-7 flex flex-col transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md">
                <ProjectGallery
                    images={[
                      "/ui/tugasakhir/dashboard.png",
                      "/ui/tugasakhir/input.png",
                      "/ui/tugasakhir/verif.png",
                    ]}
                    alt="Academic Data Security Testing System"
                  />
                <div className="p-7 flex flex-col flex-grow">
                <span className="self-start font-mono text-xs bg-[var(--accent)]/10 text-[var(--accent)] rounded px-2 py-1 mb-4">
                  Tugas Akhir
                </span>
                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">
                  Academic Data Security Testing System
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4 flex-grow">
                  Aplikasi pengujian keamanan dan integritas data akademik, membandingkan
                  performa Ethereum Sepolia Testnet dan Hyperledger Fabric. Autentikasi JWT,
                  role-based access control, dan verifikasi integritas menggunakan SHA-256.
                </p>
                <p className="font-mono text-xs text-[var(--muted)] mb-4">
                  React.js · Vite · Node.js · Express.js · PostgreSQL · Ethereum Sepolia · Hyperledger Fabric
                </p>
                <div className="flex gap-4 text-sm mt-auto">
                  <a href="https://github.com/enrico01-ui/academic-blockchain" className="text-[var(--ink)] border-b border-[var(--accent)]">Kode sumber</a>
                </div>
                </div>
              </div>

            <div className="border border-[var(--line)] bg-[var(--bg-raised)] rounded-lg p-7 flex flex-col">
              <ProjectGallery
                    images={[
                      "/ui/kp/dashboardadmin.png",
                      "/ui/kp/dashboardmobile.jpg",
                      "/ui/kp/datamaster.png",
                      "/ui/kp/login.png",
                      "/ui/kp/loginmobile.jpg",
                      "/ui/kp/pengumuman.png",
                      "/ui/kp/presensiguru.jpg",
                      "/ui/kp/rapor.png",
                      "/ui/kp/riwayatpresensi.jpg",
                      "/ui/kp/tagihan.png",
                      "/ui/kp/tagihanmobile.jpg",
                      "/ui/kp/verifikasispp.png",
                    ]}
                    alt="Siakad Hagios School of Life"
                  />
              <div className="p-7 flex flex-col flex-grow">
                <span className="self-start font-mono text-xs bg-[var(--accent)]/10 text-[var(--accent)] rounded px-2 py-1 mb-4">
                  Kerja Praktik
                </span>
                <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">SIAKAD — Hagios School of Life</h3>
                <p className="text-sm text-[var(--muted)] mb-4 flex-grow">
                  Sistem informasi akademik web &amp; mobile untuk presensi, SPP, rapor digital, dan pengumuman sekolah.
                </p>
                <p className="font-mono text-xs text-[var(--muted)] mb-4">React.js · Vite · Laravel · Flutter</p>
                <a href="https://github.com/enrico01-ui/siakad-frontend" className="text-sm text-[var(--ink)] border-b border-[var(--accent)] mt-auto self-start">Kode sumber</a>
                </div>
              </div>
                    
            <div className="border border-[var(--line)] bg-[var(--bg-raised)] rounded-lg p-7 flex flex-col">
              <ProjectGallery
                  images={[
                    "/ui/kkn/home.png"
                  ]}
                  alt="Website Padukuhan Sumber"
                />
              <div className="p-7 flex flex-col flex-grow">
              <span className="self-start font-mono text-xs bg-[var(--accent)]/10 text-[var(--accent)] rounded px-2 py-1 mb-4">
                KKN
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">Website UMKM &amp; Potensi Padukuhan Sumber</h3>
              <p className="text-sm text-[var(--muted)] mb-4 flex-grow">
                Website responsif untuk informasi UMKM dan potensi padukuhan, dengan CRUD dan dashboard admin.
              </p>
              <p className="font-mono text-xs text-[var(--muted)] mb-4">React.js · Bootstrap · Laravel REST API</p>
              <div className="flex gap-4 text-sm mt-auto">
                <a href="https://github.com/enrico01-ui/WebsitePadukuhanSumber" className="text-[var(--ink)] border-b border-[var(--accent)]">Kode sumber</a>
                
              </div>
              </div>
            </div>
          </div>
        </section>
        </Reveal>          
        {/* SKILLS */}
        <Reveal>
        <section id="skills" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-9">Keahlian</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden">
            {[
              { title: "Frontend", items: ["React.js", "React JSX", "Vite", "Flutter", "Bootstrap"] },
              { title: "Backend", items: ["Laravel", "Node.js", "Express.js", "REST API"] },
              { title: "Database", items: ["PostgreSQL", "MySQL"] },
              { title: "Bahasa Pemrograman", items: ["JavaScript", "Dart", "PHP", "Java", "C++", "C#"] },
              { title: "Tools", items: ["Git", "Postman", "Figma", "Firebase", "Docker"] },
              { title: "Blockchain", items: ["Ethereum", "Hyperledger Fabric"] },
            ].map((group) => (
              <div key={group.title} className="bg-[var(--bg-raised)] p-6">
                <h4 className="text-xs font-semibold text-[var(--muted)] mb-3">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="font-mono text-xs border border-[var(--line)] rounded px-2 py-1 text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        </Reveal>      
        {/* EDUCATION */}
        <section id="education" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-9">Pendidikan</h2>
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <h3 className="text-lg font-semibold text-[var(--ink)]">
              Universitas Atma Jaya Yogyakarta — S1 Informatika
            </h3>
            <div className="font-mono text-sm text-[var(--muted)] text-right">
              Sep 2022 — Agu 2026<br />IPK 3.67 / 4.00
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="px-4 md:px-12 py-12 border-t border-[var(--line)]">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-3">Ayo terhubung</h2>
          <p className="text-[var(--muted)] mb-9 max-w-md">
            Terbuka untuk peluang sebagai full stack developer.
          </p>
          <div className="flex flex-wrap gap-3 mb-14">
            <a href="mailto:emanuelenrico100@gmail.com" className="border border-[var(--line)] rounded-md px-4 py-3 text-sm text-[var(--ink)] hover:border-[var(--accent)]">
              emanuelenrico100@gmail.com
            </a>
            <a href="tel:087834010711" className="border border-[var(--line)] rounded-md px-4 py-3 text-sm text-[var(--ink)] hover:border-[var(--accent)]">
              087834010711
            </a>
            <a href="https://github.com/enrico01-ui" target="_blank" rel="noopener noreferrer" className="border border-[var(--line)] rounded-md px-4 py-3 text-sm text-[var(--ink)] hover:border-[var(--accent)]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/emanuel-enrico-681084377/" target="_blank" rel="noopener noreferrer" className="border border-[var(--line)] rounded-md px-4 py-3 text-sm text-[var(--ink)] hover:border-[var(--accent)]">
              LinkedIn
            </a>
          </div>
          <div className="flex justify-between border-t border-[var(--line)] pt-6 font-mono text-xs text-[var(--muted)]">
            <span>© 2026 Emanuel Enrico Anindya Wibawa</span>
            
          </div>
        </footer>
      </div>
    );
  }
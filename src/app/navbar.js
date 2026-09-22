"use client";  


import { useState } from "react";

const links = [
    {
        href: "#about", label: "Tentang"
    },
    {
        href: "#experience", label: "Pengalaman"
    },
    {
        href: "#projects", label: "Proyek"
    },
    {
        href: "#skills", label: "Keahlian"
    },
    {
        href: "#contact", label: "Kontak"
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-20 border-(--line) bg-[var(--bg)]/75 backdrop-blur border-b-1">
            <div className="max-w-[1080px] mx-auto flex items-center justify-between px-7 py-4 ">
                <div className="flex items-center gap-2 font-mono text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
                    EEAW / portfolio
                </div>
                
                <nav className="hidden md:flex gap-7 text-[15px]">
                    {links.map((item) => (
                        <a href={item.href} key={item.href} className="text-[var(--muted)] hover:text-[var(--ink)] border-b border-transparent hover:border-[var(--accent)] pb-0.5 transition">{item.label}</a>
                    ))}
                </nav>

                <button className="md:hidden border border-[var(--line)] rounded-md px-3 py-2 font-mono text-sm" onClick={() => setIsOpen(!isOpen)}>
                    menu
                </button>
                
            </div>
            {isOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-7 py-4 border-t border-[var(--line)] bg-[var(--bg-raised)]">
                {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[var(--ink)]"
                    >
                    {link.label}
                    </a>
                ))}
                </nav>
            )}
        </header>
    );
}
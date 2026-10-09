export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-[var(--ink)] mb-3">
        <span className="w-8 h-px bg-[var(--muted)]" />
        {label}
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
        {title}
        <span className="text-[var(--accent)]">.</span>
      </h2>
    </div>
  );
}
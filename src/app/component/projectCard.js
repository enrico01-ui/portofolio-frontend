import ProjectGallery from "./projectsGallery";

export default function ProjectCard({ label, title, description, stack, images, repo, demo }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-raised)] shadow-[0_6px_24px_rgba(60,40,20,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(60,40,20,0.12)]">
      <ProjectGallery images={images} alt={title} />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="self-start rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
          {label}
        </span>
        <h3 className="font-display text-xl font-semibold leading-snug">{title}</h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {stack.map((s) => (
            <li key={s} className="rounded-full bg-[var(--soft)] px-2.5 py-1 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--accent)] hover:text-white">
              {s}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 pt-3 text-sm font-medium">
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline-offset-4 hover:underline">
            Kode sumber
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[var(--warm)] underline-offset-4 hover:underline">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
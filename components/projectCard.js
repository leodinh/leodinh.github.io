function ProjectCard({ project, priority = false }) {
    return (
        <article className="surface-card group overflow-hidden">
            <div
                className={`relative flex min-h-56 items-end overflow-hidden bg-gradient-to-br p-6 ${project.accent}`}
                aria-hidden="true">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/20 blur-sm" />
                <div className="absolute -bottom-24 left-10 h-56 w-80 rotate-[-12deg] rounded-[50%] bg-indigo-950/20" />
                <div className="absolute top-8 right-8 h-24 w-24 rounded-full border border-white/25 bg-white/10" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_25%,rgb(255_255_255/0.18)_50%,transparent_75%)] opacity-0 transition duration-500 group-hover:translate-x-8 group-hover:opacity-100" />
                <span className="relative text-5xl font-semibold tracking-[-0.06em] text-white drop-shadow-sm">
                    {project.mark}
                </span>
            </div>
            <div className="p-6 lg:p-7">
                <div className="mb-5 text-xs font-semibold tracking-[0.08em] text-muted uppercase dark:text-muted-dark">
                    <span>{project.eyebrow}</span>
                </div>
                <h3
                    className={`${
                        priority ? 'text-2xl lg:text-3xl' : 'text-2xl'
                    } font-semibold tracking-[-0.035em] text-ink dark:text-ink-dark`}>
                    {project.title}
                </h3>
                <p className="mt-3 leading-7 text-muted dark:text-muted-dark">{project.summary}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink dark:text-ink-dark">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-xs text-accent">
                        {project.mark}
                    </span>
                    {project.category}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((technology) => (
                        <li className="ui-badge" key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ProjectCard;

function ProjectCard({ project, priority = false, onOpen }) {
    return (
        <article className="surface-card group overflow-hidden transition-[box-shadow] duration-200">
            <button
                type="button"
                className="project-card-button block w-full cursor-pointer text-left"
                onClick={onOpen}
                aria-label={`Open ${project.title} gallery`}>
                <div
                    className={`relative flex min-h-56 items-end overflow-hidden bg-gradient-to-br p-6 ${project.accent}`}
                    aria-hidden="true">
                    <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/20 blur-sm" />
                    <div className="absolute -bottom-24 left-10 h-56 w-80 rotate-[-12deg] rounded-[50%] bg-indigo-950/20" />
                    <div className="absolute top-8 right-8 h-24 w-24 rounded-full border border-white/25 bg-white/10" />
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
                    <p className="mt-3 leading-7 text-muted dark:text-muted-dark">
                        {project.summary}
                    </p>
                    <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink dark:text-ink-dark">
                        <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent/10 text-xs text-accent">
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
            </button>
        </article>
    );
}

export default ProjectCard;

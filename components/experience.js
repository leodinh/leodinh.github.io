import { EXPERIENCE } from '../constants/experience';

function Experience() {
    return (
        <section className="section-shell" aria-labelledby="experience-title">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
                <div>
                    <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                        Where I&apos;ve worked
                    </p>
                    <h2 id="experience-title" className="section-title">
                        Experience
                    </h2>
                    <p className="mt-5 max-w-sm leading-7 text-muted dark:text-muted-dark">
                        Building digital products across frontend, backend, and blockchain systems.
                    </p>
                </div>
                <ol className="relative border-l border-line dark:border-line-dark">
                    {EXPERIENCE.map((experience, index) => (
                        <li
                            className={`${
                                index === EXPERIENCE.length - 1 ? 'pb-0' : 'pb-12'
                            } relative pl-7 sm:pl-10`}
                            key={`${experience.company}-${experience.role}`}>
                            <span
                                className="absolute top-2 -left-[0.42rem] h-3 w-3 rounded-full border-2 border-page bg-accent ring-4 ring-page dark:border-page-dark dark:ring-page-dark"
                                aria-hidden="true"
                            />
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink dark:text-ink-dark">
                                        {experience.role}
                                    </h3>
                                    <p className="mt-1 font-semibold text-accent">
                                        {experience.company}
                                    </p>
                                </div>
                                <time className="shrink-0 text-sm font-medium text-muted dark:text-muted-dark">
                                    {experience.period}
                                </time>
                            </div>
                            <p className="mt-5 leading-7 text-muted dark:text-muted-dark">
                                {experience.summary}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted dark:text-muted-dark">
                                {experience.highlights.map((highlight) => (
                                    <li className="flex gap-3" key={highlight}>
                                        <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Relevant skills">
                                {experience.technologies.map((technology) => (
                                    <li className="ui-badge" key={technology}>
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Experience;

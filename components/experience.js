'use client';

import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { EXPERIENCE } from '../constants/experience';

function Experience({ revealed = false }) {
    const [activeExperience, setActiveExperience] = useState(0);

    return (
        <section className="section-shell" aria-labelledby="experience-title">
            <div className="experience-layout">
                <div className="experience-intro">
                    <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                        The path so far
                    </p>
                    <h2 id="experience-title" className="section-title">
                        Experience tree
                    </h2>
                    <p className="mt-5 max-w-sm leading-7 text-muted dark:text-muted-dark">
                        Select a role to uncover the work, outcomes, and tools behind it.
                    </p>
                </div>
                <ol className={`experience-timeline ${revealed ? 'is-revealed' : ''}`}>
                    {EXPERIENCE.map((experience, index) => {
                        const isActive = activeExperience === index;
                        const detailsId = `experience-details-${index}`;

                        return (
                            <li
                                className={`experience-node ${
                                    experience.isBranch ? 'experience-node-branch' : ''
                                }`}
                                style={{ '--experience-delay': `${index * 90}ms` }}
                                key={`${experience.company}-${experience.role}`}>
                                <button
                                    type="button"
                                    className="experience-node-button"
                                    aria-expanded={isActive}
                                    aria-controls={detailsId}
                                    onClick={() => setActiveExperience(isActive ? -1 : index)}>
                                    <span className="experience-node-heading">
                                        <span className="experience-company">
                                            {experience.company}
                                        </span>
                                        <span className="experience-role">{experience.role}</span>
                                        {experience.branchLabel && (
                                            <span className="experience-branch-label">
                                                {experience.branchLabel}
                                            </span>
                                        )}
                                    </span>
                                    <span className="experience-node-meta">
                                        <time>{experience.period}</time>
                                        <PlusIcon
                                            className={`experience-toggle-icon ${
                                                isActive ? 'is-active' : ''
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </button>

                                <div
                                    id={detailsId}
                                    className={`experience-details ${isActive ? 'is-open' : ''}`}
                                    aria-hidden={!isActive}>
                                    <div className="experience-details-inner">
                                        <p className="leading-7 text-muted dark:text-muted-dark">
                                            {experience.summary}
                                        </p>
                                        {experience.highlights.length > 0 && (
                                            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted dark:text-muted-dark">
                                                {experience.highlights.map((highlight) => (
                                                    <li className="flex gap-3" key={highlight}>
                                                        <span
                                                            className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                                                            aria-hidden="true"
                                                        />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <ul
                                            className="mt-5 flex flex-wrap gap-2"
                                            aria-label="Relevant skills">
                                            {experience.technologies.map((technology) => (
                                                <li className="ui-badge" key={technology}>
                                                    {technology}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

export default Experience;

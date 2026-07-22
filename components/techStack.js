import { marginSection, titleText } from '../constants/styling';
import { BACK_END, FRONT_END, OTHERS } from '../constants/tech';

function techStack() {
    const capabilities = [
        {
            number: '01',
            title: 'Product interfaces',
            description:
                'Accessible, responsive experiences that make complex products feel clear and intuitive.',
            technologies: FRONT_END
        },
        {
            number: '02',
            title: 'Backend systems',
            description:
                'Reliable APIs, data models, caching, and services designed to evolve with the product.',
            technologies: BACK_END
        },
        {
            number: '03',
            title: 'Blockchain applications',
            description:
                'On-chain logic and Web3 integrations connected to practical, user-focused applications.',
            technologies: OTHERS
        }
    ];

    return (
        <section className={marginSection} aria-labelledby="capabilities-title">
            <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                    How I contribute
                </p>
                <h2 id="capabilities-title" className={titleText}>
                    Capabilities
                </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {capabilities.map((capability) => (
                    <article
                        className="surface-card flex h-full flex-col p-6"
                        key={capability.number}>
                        <span className="font-mono text-xs font-semibold text-accent">
                            {capability.number}
                        </span>
                        <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-ink dark:text-ink-dark">
                            {capability.title}
                        </h3>
                        <p className="mt-3 leading-7 text-muted dark:text-muted-dark">
                            {capability.description}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                            {capability.technologies.map((technology) => (
                                <li className="ui-badge" key={technology}>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default techStack;

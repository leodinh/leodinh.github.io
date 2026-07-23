import Image from 'next/image';
import Avatar from '../../assets/chibi-version.png';
import Feedbacks from '../../components/feedbacks';

export const metadata = {
    title: 'About Leo Tuan Dinh',
    description:
        'The story, experience, and recommendations behind Leo Tuan Dinh, a full-stack engineer building thoughtful web and blockchain products.'
};

const journey = [
    {
        label: 'Foundation',
        title: 'Computer science in Vietnam',
        description:
            'I grew up in Vietnam and studied Computer Science at HCMC University of Technology, where I learned to turn curiosity into working software.'
    },
    {
        label: 'Exploration',
        title: 'Blockchain in Toronto',
        description:
            'At George Brown College, I focused on blockchain development and explored how decentralized systems can support useful, human-centred products.'
    },
    {
        label: 'Today',
        title: 'Building across the stack',
        description:
            'I build web and Web3 experiences from interface to infrastructure, and I am looking for ambitious teams where craft, learning, and impact matter.'
    }
];

function About() {
    return (
        <div className="pb-8">
            <section
                className="section-shell grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:gap-16"
                aria-labelledby="about-title">
                <div className="order-2 lg:order-1">
                    <span className="ui-badge mb-5">About me</span>
                    <h1
                        id="about-title"
                        className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl dark:text-ink-dark">
                        I turn complex technology into products people can understand and enjoy.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-muted dark:text-muted-dark">
                        I&apos;m Leo, a full-stack software engineer shaped by two homes: Vietnam,
                        where my curiosity for technology began, and Toronto, where I deepened my
                        practice in blockchain development.
                    </p>
                    <p className="mt-4 max-w-2xl leading-7 text-muted dark:text-muted-dark">
                        This site is a living record of that journey—the products I have shipped,
                        the experiments that sharpened my thinking, and the lessons I am carrying
                        into whatever I build next.
                    </p>
                </div>

                <figure className="order-1 mx-auto w-full max-w-[20rem] lg:order-2 lg:max-w-none">
                    <div className="surface-card relative aspect-square overflow-hidden">
                        <div
                            className="absolute inset-5 rounded-full bg-accent/10 dark:bg-accent/15"
                            aria-hidden="true"
                        />
                        <Image
                            src={Avatar}
                            alt="Illustrated portrait of Leo Tuan Dinh"
                            priority
                            sizes="(min-width: 1024px) 320px, 80vw"
                            className="relative h-full w-full object-contain p-3"
                        />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-muted dark:text-muted-dark">
                        Engineer, lifelong learner, occasional pixel-self.
                    </figcaption>
                </figure>
            </section>

            <section className="section-shell" aria-labelledby="journey-title">
                <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
                    <div>
                        <span className="ui-badge mb-4">The journey</span>
                        <h2 id="journey-title" className="section-title">
                            A path guided by curiosity
                        </h2>
                        <p className="mt-4 max-w-md text-muted dark:text-muted-dark">
                            Each step expanded what I could build—and, just as importantly, how I
                            work with people.
                        </p>
                    </div>
                    <ol className="grid gap-4">
                        {journey.map((item, index) => (
                            <li
                                key={item.title}
                                className="surface-card grid gap-4 p-5 sm:grid-cols-[3rem_1fr] sm:p-6">
                                <span
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white"
                                    aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent dark:text-indigo-300">
                                        {item.label}
                                    </p>
                                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink dark:text-ink-dark">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-muted dark:text-muted-dark">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <Feedbacks />
        </div>
    );
}

export default About;

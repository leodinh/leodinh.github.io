import Image from 'next/image';
import Avatar from '../../assets/chibi-version.png';
import Feedbacks from '../../components/feedbacks';
import ExperienceExplorer from '../../components/experienceExplorer';
import '../page.css';

export const metadata = {
    title: 'About Leo Tuan Dinh',
    description:
        'The story, experience, and recommendations behind Leo Tuan Dinh, a full-stack engineer building thoughtful web and blockchain products.'
};

function About() {
    return (
        <div className="pb-8">
            <section
                className="about-intro section-shell grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.6fr)] lg:gap-16"
                aria-labelledby="about-title">
                <div>
                    <span className="ui-badge mb-5">About me</span>
                    <h1
                        id="about-title"
                        className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl dark:text-ink-dark">
                        I turn complex technology into products people can understand and enjoy.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-muted dark:text-muted-dark">
                        Vietnam gave me my foundation in computer science; Toronto deepened my
                        practice in blockchain. Today I work across interfaces, APIs, and
                        infrastructure to build products that feel clear and dependable.
                    </p>
                </div>

                <figure className="mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:max-w-[17rem]">
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

            <ExperienceExplorer />

            <Feedbacks />
        </div>
    );
}

export default About;

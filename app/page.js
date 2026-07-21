import Image from 'next/image';
import Avatar from '../assets/my-photo-night.jpg';
import './page.css';
import TechStack from '../components/techStack';
import AccordionExperience from '../components/accordion';
import Link from 'next/link';
import { ArrowRightIcon, DocumentArrowDownIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { marginSection, titleText } from '../constants/styling';
import { PROJECTS } from '../constants/projects';
import ProjectShowcase from '../components/projectShowcase';
export const metadata = {
    title: 'Leo',
    description: 'Leo Tuan Dinh - Web3 Fullstack Developer'
};
function App() {
    return (
        <div className="flex w-full flex-col">
            <section className="grid min-h-[calc(100vh-3.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
                <div className="order-2 flex flex-col items-start lg:order-1">
                    <div className="ui-badge mb-6 gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                        Available for thoughtful collaborations
                    </div>
                    <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                        Full-stack · Web3 · Toronto
                    </p>
                    <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-ink dark:text-ink-dark">
                        I build reliable products across web and blockchain.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-muted dark:text-muted-dark">
                        I&apos;m Leo, a full-stack engineer turning complex product ideas into
                        clear, scalable experiences—from polished interfaces to backend and on-chain
                        systems.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link href="/project" className="ui-button ui-button-primary">
                            View selected work
                            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link href="/cv.pdf" className="ui-button ui-button-secondary">
                            <DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" />
                            Download résumé
                        </Link>
                    </div>
                    <p className="mt-6 flex items-center gap-2 text-sm text-muted dark:text-muted-dark">
                        <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                        Based in Toronto, working with teams worldwide
                    </p>
                </div>
                <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                    <div className="relative">
                        <div
                            className="absolute inset-4 -z-10 rounded-full bg-accent/15 blur-3xl"
                            aria-hidden="true"
                        />
                        <Image
                            src={Avatar}
                            priority
                            sizes="(min-width: 1024px) 320px, 208px"
                            className="h-52 w-52 rounded-[2rem] border border-line object-cover grayscale shadow-2xl shadow-indigo-950/10 transition duration-500 hover:-rotate-1 hover:scale-[1.02] hover:grayscale-0 lg:h-80 lg:w-80 dark:border-line-dark"
                            alt="Leo Tuan Dinh"
                        />
                    </div>
                </div>
            </section>
            <section className={marginSection} aria-labelledby="selected-work-title">
                <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                            Selected work
                        </p>
                        <h2 id="selected-work-title" className="section-title max-w-xl">
                            Products shaped from interface to infrastructure.
                        </h2>
                    </div>
                    <Link href="/project" className="ui-button ui-button-secondary shrink-0">
                        All projects
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
                <ProjectShowcase
                    projects={PROJECTS.slice(0, 2)}
                    priority
                    className="grid gap-6 md:grid-cols-2"
                />
            </section>
            <div className={`animate-fade-up flex w-full flex-col ${marginSection}`}>
                <h1 className={titleText}> Experience</h1>
                <div>
                    <AccordionExperience
                        roleType="Fullstack Developer"
                        company="SIE"
                        date="2024 - Present"
                        content="Supported a revamp of the NFT marketplace across frontend, backend and smart contracts
infrastructure, and liaised with Product leaders to evaluate feasibility, capacity and technical debt"
                    />
                    <AccordionExperience
                        roleType="Fullstack Developer"
                        company="Gaia Labs"
                        date="2022 - 2023"
                        content="Developed a decentralized application and added new functionality alongside
UI/UX Designers based on solution requirements while ensuring technical feasibility and scalability"
                    />
                    <AccordionExperience
                        roleType="Frontend Developer"
                        company="Capital Methods"
                        date="2021 - 2023"
                        content="Developed seamless user interfaces from ground-up for a next-gen yield aggregator (DeFi system)
on Ethereum using React"
                    />
                    <AccordionExperience
                        roleType="Student Researcher"
                        company="George Brown College"
                        date="2020 - 2021"
                        content="Researched and implemented a Blockchain network"
                    />
                </div>
            </div>
            <TechStack />
        </div>
    );
}

export default App;

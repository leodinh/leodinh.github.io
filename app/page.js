import Image from 'next/image';
import Avatar from '../assets/my-photo-night.jpg';
import './page.css';
import AccordionExperience from '../components/accordion';
import { InfiniteLoopSlider, Tag } from '../components/infiniteLoopSlider';
import { BACK_END, FRONT_END, OTHERS } from '../constants/tech';
import { random } from '../utils';
function App() {
    const boldText = 'bold dark:text-white text-black';
    const titleText = 'text-black dark:text-white bold mb-5';
    return (
        <div className="flex flex-col mt-10 w-full">
            <div className="w-full flex flex-col items-center justify-center overflow-hidden mb-20">
                <Image
                    src={Avatar}
                    className="w-40 animate-fade-down animate-once animate-duration-1000 animate-ease-in-out rounded-full animation ring-2 ring-(--text-dark-color) dark:ring-(--text-light-color) p-1 m-4  transition-all duration-200 cursor-pointer whitescal grayscale hover:scale-110 hover:grayscale-0"
                    alt="my avatar"
                />
                <h1 className="text-2xl text-(--text-dark-color) dark:text-(--text-light-color) cursor typewriter-animation">
                    Hello there, I&apos;m <span className={boldText}>Leo</span>, a{' '}
                    <span className={boldText}>Fullstack</span> developer based in{' '}
                    <span className={boldText}> Toronto </span>
                </h1>
            </div>
            <div className="animate-fade-up mb-20">
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
            <div className="animate-fade-up flex flex-col items-center">
                <h1 className={`${titleText} self-start`}>My Tech Stack</h1>
                <div className="relative w-full lg:w-auto max-w-200 flex flex-col items-center justify-center gap-1 p-1 overflow-hidden">
                    <InfiniteLoopSlider duration={random(14000, 15000)}>
                        {FRONT_END.map((tag) => (
                            <Tag text={tag} key={tag} />
                        ))}
                    </InfiniteLoopSlider>
                    <InfiniteLoopSlider duration={random(14000, 15000)} reverse>
                        {BACK_END.map((tag) => (
                            <Tag text={tag} key={tag} />
                        ))}
                    </InfiniteLoopSlider>
                    <InfiniteLoopSlider duration={random(14000, 15000)}>
                        {OTHERS.map((tag) => (
                            <Tag text={tag} key={tag} />
                        ))}
                    </InfiniteLoopSlider>
                    <div className="fade" />
                </div>
            </div>
        </div>
    );
}

export default App;

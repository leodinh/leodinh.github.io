import Image from 'next/image';
import Avatar from '../assets/my-photo-night.jpg';
import './page.css';
import TechStack from '../components/techStack';
import AccordionExperience from '../components/accordion';
import { boldText, marginSection, titleText } from '../constants/styling';
export const metadata = {
    title: 'Leo',
    description: 'Leo Tuan Dinh - Web3 Fullstack Developer'
};
function App() {
    return (
        <div className={`flex flex-col mt-10 w-full ${marginSection}`}>
            <div className="w-full flex flex-col items-center justify-center overflow-hidden mb-20">
                <Image
                    src={Avatar}
                    className="w-40 animate-fade-down animate-once animate-duration-1000 animate-ease-in-out rounded-full animation ring-2 ring-(--text-dark-color) dark:ring-(--text-light-color) p-1 m-4  transition-all duration-200 cursor-pointer whitescal grayscale hover:scale-110 hover:grayscale-0"
                    alt="my avatar"
                />
                <h1 className="text-2xl text-(--text-dark-color) dark:text-(--text-light-color) cursor animate-fade-up animate-once animate-duration-1000 animate-ease-in-out typewriter-animation">
                    Hello there, I&apos;m <span className={boldText}>Leo</span>, a{' '}
                    <span className={boldText}>Fullstack</span> developer based in{' '}
                    <span className={boldText}> Toronto </span>
                </h1>
            </div>
            <div className={`animate-fade-up w-full flex flex-col`}>
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

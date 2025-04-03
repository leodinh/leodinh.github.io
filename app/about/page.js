import Image from 'next/image';
import Avatar from '../../assets/chibi-version.png';
import Feedbacks from '../../components/feedbacks';
import { boldText, marginSection } from '../../constants/styling';
export const metadata = {
    title: 'About me',
    description: 'Leo Tuan Dinh - Web3 Fullstack Developer'
};
function about() {
    return (
        <div className="flex flex-col mt-0 lg:mt-10 w-full">
            <div className={`flex flex-col  lg:flex-row ${marginSection}`}>
                <div className="w-40 lg:w-100 overflow-hidden border-0">
                    <Image
                        src={Avatar}
                        // priority={true}
                        alt="my avatar"
                        className={`w-full scale-110 hover:scale-150 cursor-pointer transition-all ease-in-out duration-100
                            animate-jump-in
                         animate-duration-1000 animate-once animate-ease-in-out border-0`}
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <p className="mb-5 text-(--text-dark-color) dark:text-(--text-light-color) animate-fade-up animate-once animate-duration-1000 animate-ease-in-out">
                        I was born and grew up in Vietnam, where I developed a passion for
                        technology from a young age. I graduated with a degree in
                        <span className={boldText}> Computer Science </span>
                        from HCMC University of Technology, which laid the foundation for my journey
                        in software development. Eager to expand my skillset, I pursued{' '}
                        <span className={boldText}>Blockchain development</span> at George Brown
                        College to explore the cutting-edge possibilities within this field.
                    </p>
                    <p className="mb-5 text-(--text-dark-color) dark:text-(--text-light-color) animate-fade-up animate-delay-500 animate-once animate-duration-1000 animate-ease-in-out">
                        As a software engineer, I specialize in building{' '}
                        <span className={boldText}>web3 applications</span>. I am currently{' '}
                        <span className={boldText}>seeking opportunities</span> to work on
                        innovative projects that challenge me and help me grow as a developer,
                        particularly in the rapidly evolving world of Blockchain and web
                        development.
                    </p>
                    <p className="text-(--text-dark-color) dark:text-(--text-light-color) animate-fade-up animate-delay-1000 animate-once animate-duration-1000 animate-ease-in-out">
                        <span className={boldText}>This site</span> is a reflection of my journey,
                        where I share my <span className={boldText}>experiments and projects</span>,
                        highlighting both achievements and the lessons learned throughout the
                        process.
                    </p>
                </div>
            </div>
            <Feedbacks />
        </div>
    );
}

export default about;

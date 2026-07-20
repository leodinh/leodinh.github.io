import ProjectCard from '../../components/projectCard';
import { PROJECTS } from '../../constants/projects';
export const metadata = {
    title: 'My Projects',
    description: 'Selected full-stack and Web3 work by Leo Tuan Dinh.'
};
function page() {
    return (
        <div className="py-20 lg:py-28">
            <header className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                    Selected work
                </p>
                <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-ink dark:text-ink-dark">
                    Things I&apos;ve built and explored.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted dark:text-muted-dark">
                    A growing collection of experiments, products, and ideas. Real projects will
                    replace these placeholders over time.
                </p>
            </header>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={project.slug} />
                ))}
            </div>
        </div>
    );
}

export default page;

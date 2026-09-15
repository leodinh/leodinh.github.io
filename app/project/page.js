import ProjectShowcase from '../../components/projectShowcase';
import { PROJECTS } from '../../constants/projects';
export const metadata = {
    title: 'My Projects',
    description: 'Selected full-stack and Web3 work by Leo Tuan Dinh.'
};
function page() {
    return (
        <div className="py-20 lg:py-28">
            <header className="max-w-3xl">
                <p className="mb-4 text-sm text-muted dark:text-muted-dark">Selected work</p>
                <h1 className="display-title text-[clamp(2.4rem,6vw,4rem)] leading-[1.08] tracking-[-0.03em] text-ink dark:text-ink-dark">
                    Things I&apos;ve built and explored.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted dark:text-muted-dark">
                    A growing collection of experiments, products, and ideas. Real projects will
                    replace these placeholders over time.
                </p>
            </header>
            <ProjectShowcase
                projects={PROJECTS}
                className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20"
            />
        </div>
    );
}

export default page;

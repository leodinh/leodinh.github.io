import PhotographyGallery from './_components/photographyGallery';
import '@/styles/photography.css';

export const metadata = {
    title: 'Photography — Leo Tuan Dinh',
    description: 'A collection of photographs by Leo Tuan Dinh.'
};

function Photography() {
    return (
        <div className="w-full py-photo max-md:py-6">
            <div className="mb-8 flex items-baseline justify-between gap-8 max-md:flex-col max-md:gap-2">
                <h1 className="font-[family-name:var(--font-display),Georgia,serif] text-display font-normal tracking-[-0.03em] text-ink dark:text-ink-dark">
                    Photography
                </h1>
                <p className="text-ui text-muted dark:text-muted-dark">
                    Frames from the way around.
                </p>
            </div>
            <PhotographyGallery />
        </div>
    );
}

export default Photography;

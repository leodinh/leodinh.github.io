import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ABOUT_CHAPTERS } from '@/utils/aboutPage';
import { HEADING, INLINE_LINK, MUTED, RULE, SECTION } from './aboutUi';

const CHAPTER = ABOUT_CHAPTERS[3];

function OfflineSection() {
    return (
        <section id={CHAPTER.id} className={SECTION} aria-labelledby="offline-title">
            <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-center gap-x-[clamp(3.5rem,8vw,7rem)] gap-y-6 max-md:grid-cols-1 max-md:gap-6">
                <div>
                    <h2 id="offline-title" className={`${HEADING} text-balance`}>
                        {CHAPTER.label}
                    </h2>
                    <p
                        className={`mt-10 max-w-[34rem] text-body leading-loose ${MUTED} max-md:mt-5`}>
                        Photography slows me down. It makes me notice the overlooked corners,
                        strange shadows, and small details that give a place its character.
                    </p>
                    <Link href="/photography" className={`${INLINE_LINK} mt-7`}>
                        See my photography
                        <ArrowUpRightIcon aria-hidden="true" />
                    </Link>
                </div>
                <figure
                    className={`relative aspect-[4/5] max-h-[28rem] rotate-[1.5deg] overflow-hidden rounded-[1.75rem] border ${RULE} bg-surface dark:bg-surface-dark max-md:aspect-[16/10] max-md:max-h-none max-md:w-full max-md:rotate-0 max-md:rounded-2xl`}>
                    <Image
                        src="/images/optimized/port-hope-flower.webp"
                        fill
                        sizes="(min-width: 768px) 52vw, 100vw"
                        className="object-cover"
                        priority
                        data-intro-critical
                        alt="A pink flower installation catching afternoon light on a brick wall in Port Hope, Ontario"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent to-[32%]" />
                    <figcaption className="absolute right-6 bottom-5 left-6 z-[1] flex justify-between gap-4 text-meta text-white max-md:flex-col max-md:gap-0.5">
                        <span>Port Hope, Ontario</span>
                        <span>Following the afternoon light.</span>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}

export default OfflineSection;

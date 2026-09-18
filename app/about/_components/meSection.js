import Image from 'next/image';
import Phrase from '@/components/phrase';
import { ABOUT_CHAPTERS, ABOUT_ME } from '@/utils/aboutPage';
import {
    DISPLAY,
    HEADING,
    INTRO,
    MUTED,
    PORTRAIT_SCALE,
    PORTRAIT_STAGE,
    SECTION_FRAME
} from './aboutUi';

const CHAPTER = ABOUT_CHAPTERS[0];

function MeSection() {
    return (
        <section
            id={CHAPTER.id}
            className={`${SECTION_FRAME} relative flex ${PORTRAIT_STAGE} flex-col justify-end overflow-hidden pb-0 max-md:h-auto max-md:overflow-visible max-md:pt-5 max-md:pb-0`}
            aria-labelledby="me-title">
            <div className="grid min-h-0 flex-1 grid-cols-[minmax(8rem,18rem)_auto_minmax(8rem,20rem)] items-end justify-center gap-x-4 gap-y-3.5 [grid-template-areas:'copy-left_portrait_copy-right'] max-[90rem]:grid-cols-[minmax(7rem,15rem)_auto_minmax(7rem,16rem)] max-md:h-auto max-md:w-full max-md:flex-none max-md:grid-cols-1 max-md:items-start max-md:gap-2.5 max-md:[grid-template-areas:'copy-left'_'copy-right'_'portrait'] [@media(height<52rem)_and_(width>=48rem)]:grid-cols-[minmax(7rem,14rem)_auto_minmax(7rem,15rem)]">
                <div className="relative z-10 mb-[22%] max-w-[22rem] [grid-area:copy-left] justify-self-end max-md:mb-0 max-md:max-w-none max-md:justify-self-start">
                    <Phrase
                        as="h1"
                        id="me-title"
                        afterIntro
                        interactive
                        italicLast={3}
                        text={ABOUT_ME.title}
                        className={`${HEADING} text-right leading-[1.1] pb-1 text-balance max-md:text-left`}
                    />
                    {ABOUT_ME.left ? (
                        <p className={`mt-2.5 text-body ${MUTED}`}>{ABOUT_ME.left}</p>
                    ) : null}
                </div>
                <figure
                    className={`${INTRO} ${PORTRAIT_STAGE} [grid-area:portrait] m-0 flex min-w-0 items-end justify-center max-md:h-[60dvh] max-md:w-auto max-md:max-w-full max-md:justify-self-center`}>
                    {/* ponytail: next optimizer palettized this cutout and dropped the figure */}
                    <Image
                        src={ABOUT_ME.photo}
                        alt={ABOUT_ME.photoAlt}
                        width={1254}
                        height={1254}
                        priority
                        unoptimized
                        sizes="(min-width: 768px) 42vw, 92vw"
                        className={`${PORTRAIT_SCALE} block object-contain object-bottom`}
                    />
                </figure>
                <Phrase
                    afterIntro
                    from="right"
                    stagger={false}
                    text={ABOUT_ME.right}
                    className={`${DISPLAY} relative z-10 mb-[8%] max-w-[22rem] [grid-area:copy-right] justify-self-start text-title leading-[1.35] tracking-[-0.02em] ${MUTED} max-md:mb-0 max-md:max-w-none`}
                />
            </div>
        </section>
    );
}

export default MeSection;

'use client';

import { useEffect, useState } from 'react';
import { ABOUT_CHAPTERS, shouldFadeChapterIndex } from '@/utils/aboutPage';
import { CHAPTER_ACTIVE, CHAPTER_BTN } from './aboutUi';

function ChapterIndex() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const sections = ABOUT_CHAPTERS.map(({ id }) => document.getElementById(id)).filter(
            Boolean
        );

        const update = () => {
            const readingLine = window.innerHeight * 0.36;
            let nextIndex = 0;
            sections.forEach((section, index) => {
                if (section.getBoundingClientRect().top <= readingLine) nextIndex = index;
            });
            setActiveIndex(nextIndex);

            const contact = document.getElementById('contact');
            if (contact) {
                const rect = contact.getBoundingClientRect();
                setFade(shouldFadeChapterIndex(rect.bottom, window.innerHeight));
                const chapter = ABOUT_CHAPTERS[nextIndex];
                if (chapter && window.location.hash !== `#${chapter.id}`) {
                    window.history.replaceState(null, '', `#${chapter.id}`);
                }
            }
        };

        const initialId = window.location.hash.slice(1);
        const initial = sections.find((section) => section.id === initialId);
        if (initial) initial.scrollIntoView({ behavior: 'auto', block: 'start' });
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const goToChapter = (index) => {
        const chapter = ABOUT_CHAPTERS[index];
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById(chapter.id)?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start'
        });
        window.history.replaceState(null, '', `#${chapter.id}`);
        setActiveIndex(index);
    };

    return (
        <nav
            className={`fixed top-1/2 left-[max(0.75rem,calc((100vw-var(--page-scroll-bar-gap,0px)-64rem)/2-9.75rem))] z-20 grid w-[8.75rem] -translate-y-1/2 rounded-2xl border border-line bg-page/88 p-1.5 shadow-[0_1rem_3rem_rgb(23_23_23/9%)] backdrop-blur-md transition-opacity duration-[240ms] ease-[var(--ease-out)] dark:border-line-dark dark:bg-page-dark/88 dark:shadow-[0_1rem_3rem_rgb(0_0_0/28%)] max-[90rem]:hidden ${
                fade ? 'pointer-events-none opacity-0' : ''
            }`}
            aria-label="About page chapters">
            {ABOUT_CHAPTERS.map((chapter, index) => (
                <button
                    type="button"
                    className={`${CHAPTER_BTN}${index === activeIndex ? ` ${CHAPTER_ACTIVE}` : ''}`}
                    aria-current={index === activeIndex ? 'location' : undefined}
                    onClick={() => goToChapter(index)}
                    key={chapter.id}>
                    <span className="text-accent tabular-nums">{chapter.number}</span>
                    {chapter.label}
                </button>
            ))}
        </nav>
    );
}

export default ChapterIndex;

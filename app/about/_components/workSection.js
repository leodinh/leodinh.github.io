'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { EXPERIENCE } from '@/constants/experience';
import { ABOUT_CHAPTERS, workLogStatus } from '@/utils/aboutPage';
import VintageModal from '@/components/vintageModal';
import {
    ACCENT_WASH,
    DISPLAY,
    HEADING,
    INK,
    INLINE_LINK,
    META,
    MUTED,
    RULE,
    SECTION
} from './aboutUi';

const CHAPTER = ABOUT_CHAPTERS[2];

function WorkSection() {
    const [selectedWork, setSelectedWork] = useState(null);

    return (
        <section id={CHAPTER.id} className={SECTION} aria-labelledby="work-title">
            <div className="mb-12 flex items-end justify-between gap-8 max-md:items-start">
                <h2 id="work-title" className={HEADING}>
                    {CHAPTER.label}
                </h2>
                <Link href="/resume.pdf" className={INLINE_LINK}>
                    Full résumé
                    <ArrowUpRightIcon aria-hidden="true" />
                </Link>
            </div>
            <div className="relative grid grid-cols-3 gap-3.5 max-md:grid-cols-1 max-md:gap-2.5">
                {EXPERIENCE.map((item, index) => (
                    <button
                        type="button"
                        className={`group relative grid min-h-36 cursor-pointer rounded border ${RULE} bg-surface px-4 pt-4 pb-8 text-left transition-[border-color,background-color,transform] duration-[160ms] ease-[var(--ease-out)] [-webkit-tap-highlight-color:transparent] hover:border-accent ${ACCENT_WASH} focus-visible:border-accent focus-visible:outline-none active:scale-[0.97] dark:bg-surface-dark max-md:min-h-28 max-md:p-3.5`}
                        onClick={() => setSelectedWork(item)}
                        key={`${item.company}-${item.role}`}>
                        <span className={META}>{String(index + 1).padStart(2, '0')}</span>
                        <span
                            className={`${DISPLAY} self-center pr-[5.5rem] text-mark ${INK} transition-colors duration-[160ms] ease-[var(--ease-out)]  max-md:max-w-none max-md:text-title`}>
                            {item.company}
                        </span>
                        <span className={`self-end pr-20 text-meta leading-snug ${MUTED}`}>
                            {item.role}
                        </span>
                        <span
                            className={`${META} absolute top-4 right-4 max-md:top-3.5 max-md:right-3.5 max-md:max-w-36 max-md:text-right`}>
                            {item.period}
                        </span>
                        <span
                            className={`${META} absolute right-4 bottom-4 text-accent max-md:right-3.5 max-md:bottom-3.5`}>
                            Open log
                        </span>
                    </button>
                ))}
            </div>
            <VintageModal
                open={Boolean(selectedWork)}
                onClose={() => setSelectedWork(null)}
                eyebrow={selectedWork ? `WORK LOG // ${selectedWork.period}` : 'WORK LOG'}
                title={selectedWork?.company}
                bottomSheet>
                {selectedWork ? (
                    <>
                        <p className={`mt-2 text-ui ${MUTED}`}>{selectedWork.role}</p>
                        <p className={`mt-8 max-w-[34rem] text-ui leading-relaxed ${INK}`}>
                            {selectedWork.summary}
                        </p>
                        <div className="mt-10 grid gap-4 border-t border-line pt-5 dark:border-line-dark">
                            <div className="grid gap-1.5">
                                <span className={`text-meta ${MUTED}`}>STATUS</span>
                                <strong className="text-meta font-normal leading-normal">
                                    {workLogStatus(selectedWork.period)}
                                </strong>
                            </div>
                            <div className="grid gap-1.5">
                                <span className={`text-meta ${MUTED}`}>STACK</span>
                                <strong className="text-meta font-normal leading-normal">
                                    {selectedWork.technologies.join(' · ')}
                                </strong>
                            </div>
                        </div>
                    </>
                ) : null}
            </VintageModal>
        </section>
    );
}

export default WorkSection;

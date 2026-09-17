'use client';

import Link from 'next/link';
import { HOME_INTRO, HOME_MASCOT } from '@/constants/content';
import {
    SHORT_SLIDE,
    shortSlideLineDelayMs,
    shortSlideStaggerMs,
    shortSlideWordDelayMs,
    splitPhraseUnits
} from '@/utils/shortSlide';
import Mascot from './mascot';

const DISPLAY =
    'font-[family-name:var(--font-display),Georgia,serif] font-normal tracking-[-0.03em] text-ink dark:text-ink-dark';
const ACTION_CLASS = ['ui-button ui-button-primary', 'ui-button ui-button-secondary'];

function Phrase({ text, className, as: Tag = 'p', line = 0, id }) {
    const units = splitPhraseUnits(text);
    const words = units.filter((unit) => unit.type === 'word');
    const staggerMs = shortSlideStaggerMs(words.length);
    let wordIndex = 0;

    return (
        <Tag
            id={id}
            className={`inline-block text-left max-w-full [animation:home-short-slide_var(--slide-ms)_var(--slide-ease)_var(--line-delay)_both] motion-reduce:animate-none ${className}`}
            style={{
                '--line-delay': `${shortSlideLineDelayMs(line)}ms`,
                '--slide-ms': `${SHORT_SLIDE.enterMs}ms`,
                '--word-ms': `${SHORT_SLIDE.wordOpacityMs}ms`,
                '--slide-x': `${SHORT_SLIDE.fromXPx}px`,
                '--slide-blur': `${SHORT_SLIDE.blurPx}px`,
                '--slide-ease': SHORT_SLIDE.easing
            }}>
            {units.map((unit, index) => {
                if (unit.type === 'space') {
                    return (
                        <span key={index} className="whitespace-pre">
                            {unit.text}
                        </span>
                    );
                }

                const i = wordIndex;
                wordIndex += 1;
                return (
                    <span
                        key={index}
                        className="inline-block opacity-0 [animation:home-word-in_var(--word-ms)_var(--slide-ease)_calc(var(--line-delay)+var(--word-delay))_both] motion-reduce:animate-none motion-reduce:opacity-100"
                        style={{ '--word-delay': `${shortSlideWordDelayMs(i, staggerMs)}ms` }}>
                        {unit.text}
                    </span>
                );
            })}
        </Tag>
    );
}

function HomeIntro() {
    return (
        <section
            className="relative isolate flex flex-col items-center justify-center py-[clamp(2.5rem,8vw,5.5rem)] max-md:pt-6 max-md:pb-10"
            aria-labelledby="home-intro-title">
            <Mascot
                directions={HOME_MASCOT.directions}
                reactions={HOME_MASCOT.reactions}
                size={300}
                label={HOME_MASCOT.label}
            />
            <Phrase
                as="h1"
                id="home-intro-title"
                className={`${DISPLAY} text-display`}
                line={0}
                text={HOME_INTRO.greeting}
            />
            <Phrase
                className={`${DISPLAY} mt-5 max-w-[34rem] text-title`}
                line={1}
                text={HOME_INTRO.display}
            />
            <Phrase
                className="mt-4 max-w-[34rem] text-mark tracking-[-0.02em] text-muted dark:text-muted-dark"
                line={2}
                text={HOME_INTRO.craft}
            />
            <div
                className="mt-8 flex flex-wrap justify-center gap-3"
                style={{ '--line-delay': `${shortSlideLineDelayMs(3)}ms` }}>
                {HOME_INTRO.actions.map((action, index) => (
                    <Link
                        key={action.href}
                        href={action.href}
                        {...(action.href.endsWith('.pdf')
                            ? { target: '_blank', rel: 'noreferrer' }
                            : {})}
                        className={`${ACTION_CLASS[index]} opacity-0 [animation:site-fade_280ms_var(--ease-out)_calc(var(--line-delay)+var(--word-delay))_both] motion-reduce:animate-none motion-reduce:opacity-100`}
                        style={{
                            '--word-delay': `${shortSlideWordDelayMs(
                                index,
                                SHORT_SLIDE.staggerMs
                            )}ms`
                        }}>
                        {action.label}
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default HomeIntro;

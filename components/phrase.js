import {
    isPhraseWordEmphasized,
    splitPhraseUnits,
    shortSlideFromXPx,
    shortSlideStaggerMs,
    shortSlideLineDelayMs,
    shortSlideWordDelayMs,
    SHORT_SLIDE
} from '@/utils/shortSlide';

const SLIDE =
    '[animation:home-short-slide_var(--slide-ms)_var(--slide-ease)_var(--line-delay)_both]';
const SLIDE_AFTER =
    '[html.site-intro-done_&]:[animation:home-short-slide_var(--slide-ms)_var(--slide-ease)_var(--line-delay)_both]';
const WORD =
    'opacity-0 [animation:home-word-in_var(--word-ms)_var(--slide-ease)_calc(var(--line-delay)+var(--word-delay))_both]';
const WORD_AFTER =
    'opacity-0 [html.site-intro-done_&]:[animation:home-word-in_var(--word-ms)_var(--slide-ease)_calc(var(--line-delay)+var(--word-delay))_both]';
const WORD_HOVER =
    'transition-colors duration-[160ms] [transition-timing-function:var(--ease-out)] pointer-fine:hover:italic pointer-fine:hover:text-ink dark:pointer-fine:hover:text-ink-dark';

export default function Phrase({
    text,
    className,
    as: Tag = 'p',
    line = 0,
    id,
    from = 'left',
    afterIntro = false,
    interactive = false,
    stagger = true,
    italicLast = 0
}) {
    const units = splitPhraseUnits(text);
    const words = units.filter((unit) => unit.type === 'word');
    const staggerMs = stagger ? shortSlideStaggerMs(words.length) : 0;
    const slideClass = afterIntro ? SLIDE_AFTER : SLIDE;
    const fadeClass =
        afterIntro && !stagger ? 'opacity-0 [html.site-intro-done_&]:opacity-100' : '';

    const slideStyle = {
        '--line-delay': `${shortSlideLineDelayMs(line)}ms`,
        '--slide-ms': `${SHORT_SLIDE.enterMs}ms`,
        '--word-ms': `${SHORT_SLIDE.wordOpacityMs}ms`,
        '--slide-x': `${shortSlideFromXPx(from)}px`,
        '--slide-blur': `${SHORT_SLIDE.blurPx}px`,
        '--slide-ease': SHORT_SLIDE.easing
    };

    if (!stagger) {
        return (
            <Tag
                id={id}
                className={`max-w-full motion-reduce:animate-none motion-reduce:opacity-100 ${slideClass} ${fadeClass} ${className}`}
                style={slideStyle}>
                {text}
            </Tag>
        );
    }

    let wordIndex = 0;

    return (
        <Tag
            id={id}
            className={`inline-block max-w-full motion-reduce:animate-none ${slideClass} ${className}`}
            style={slideStyle}>
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
                const italic = isPhraseWordEmphasized(i, words.length, italicLast);

                return (
                    <span
                        key={index}
                        className={`inline-block motion-reduce:animate-none motion-reduce:opacity-100 ${
                            afterIntro ? WORD_AFTER : WORD
                        } ${interactive ? WORD_HOVER : ''} ${italic ? 'italic' : ''}`}
                        style={{ '--word-delay': `${shortSlideWordDelayMs(i, staggerMs)}ms` }}>
                        {unit.text}
                    </span>
                );
            })}
        </Tag>
    );
}

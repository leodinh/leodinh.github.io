export const SHORT_SLIDE = {
    enterMs: 520,
    staggerMs: 92,
    longStaggerMs: 66,
    wordOpacityMs: 210,
    lineDelayMs: 140,
    fromXPx: -24,
    blurPx: 1.2,
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
};

export function splitPhraseUnits(text) {
    return [...text.matchAll(/(\S+|\s+)/g)].map(([part]) => ({
        type: /^\s+$/.test(part) ? 'space' : 'word',
        text: part
    }));
}

export function shortSlideStaggerMs(wordCount) {
    return wordCount > 5 ? SHORT_SLIDE.longStaggerMs : SHORT_SLIDE.staggerMs;
}

export function shortSlideWordDelayMs(index, staggerMs) {
    return index * staggerMs;
}

export function shortSlideLineDelayMs(line) {
    return line * SHORT_SLIDE.lineDelayMs;
}

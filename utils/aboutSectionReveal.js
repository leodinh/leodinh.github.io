export const ABOUT_REVEAL_INSET_PX = 100;

export function aboutSectionIsInView(rect, viewportHeight, insetPx = ABOUT_REVEAL_INSET_PX) {
    return rect.top < viewportHeight - insetPx && rect.bottom > insetPx;
}

export function aboutSectionReveal({
    primed = false,
    inView = false,
    reduceMotion = false,
    alreadyShown = false
} = {}) {
    if (reduceMotion || alreadyShown || !primed) {
        return 'shown';
    }

    if (inView) {
        return 'opening';
    }

    return 'pending';
}

export function scrollbarGap(innerWidth, clientWidth) {
    return Math.max(0, innerWidth - clientWidth);
}

export function lockPageScroll(body, html, gap) {
    const previous = {
        bodyOverflow: body.style.overflow,
        bodyPaddingRight: body.style.paddingRight,
        htmlPaddingRight: html.style.paddingRight
    };
    const pad = `${gap}px`;
    body.style.overflow = 'hidden';
    body.style.paddingRight = pad;
    html.style.paddingRight = pad;
    html.style.setProperty('--page-scroll-bar-gap', pad);
    return previous;
}

export function unlockPageScroll(body, html, previous) {
    body.style.overflow = previous.bodyOverflow;
    body.style.paddingRight = previous.bodyPaddingRight;
    html.style.paddingRight = previous.htmlPaddingRight;
    html.style.removeProperty('--page-scroll-bar-gap');
}

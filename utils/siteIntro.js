export const SITE_INTRO_DONE_CLASS = 'site-intro-done';

export function isIntroCurtainFinished(animationName) {
    return (
        animationName === 'site-intro-curtain-out' ||
        animationName === 'site-intro-curtain-fade'
    );
}

export function markSiteIntroDone(root) {
    root.classList.add(SITE_INTRO_DONE_CLASS);
}

export function isSiteContentRevealed(root) {
    return root.classList.contains(SITE_INTRO_DONE_CLASS);
}

export function siteShellPhase(introFinished) {
    return introFinished ? 'content' : 'intro';
}

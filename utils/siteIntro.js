import { introCurtainFadeDelayMs, introLogoExitDelayMs } from './mascotLoad.js';

export const SITE_INTRO_DONE_CLASS = 'site-intro-done';
export const INTRO_IMAGE_TIMEOUT_MS = 5000;
export const INTRO_PROGRESS_MS = 200;
export const INTRO_FADE_MS = 200;
export const initialIntroState = {
    phase: 'preparing',
    imagesReady: false,
    reducedMotion: false
};

export function introReducer(state, event) {
    if (state.phase === 'done') return state;

    if (event.type === 'images-ready' || event.type === 'timeout') {
        const next = { ...state, imagesReady: true };
        if (state.phase === 'waiting') {
            next.phase = state.reducedMotion ? 'done' : 'completing';
        } else if (event.type === 'timeout' && state.phase === 'preparing') {
            next.reducedMotion = Boolean(event.reducedMotion);
            next.phase = next.reducedMotion ? 'done' : 'showcase';
        }
        return next;
    }

    if (event.type === 'greeting-ready' && state.phase === 'preparing') {
        const reducedMotion = Boolean(event.reducedMotion);
        return {
            ...state,
            reducedMotion,
            phase: reducedMotion ? (state.imagesReady ? 'done' : 'waiting') : 'showcase'
        };
    }

    if (event.type === 'elapsed') {
        const nextPhase = {
            showcase: state.imagesReady ? 'completing' : 'waiting',
            completing: 'words-out',
            'words-out': 'fading',
            fading: 'done'
        }[state.phase];
        if (nextPhase) return { ...state, phase: nextPhase };
    }
    return state;
}

export function introPhaseDuration({ phase }) {
    return (
        {
            showcase: introLogoExitDelayMs(),
            completing: INTRO_PROGRESS_MS,
            'words-out': introCurtainFadeDelayMs() - introLogoExitDelayMs(),
            fading: INTRO_FADE_MS
        }[phase] ?? null
    );
}

export function markSiteIntroDone(root) {
    root.classList.add(SITE_INTRO_DONE_CLASS);
}

export function isSiteContentRevealed(root) {
    return root.classList.contains(SITE_INTRO_DONE_CLASS);
}

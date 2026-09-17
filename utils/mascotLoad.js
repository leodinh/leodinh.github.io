export const MASCOT_LOAD_BEATS = [
    { at: 0, direction: 'left', reaction: null },
    { at: 200, direction: 'right', reaction: null },
    { at: 400, direction: 'center', reaction: null },
    { at: 560, direction: 'center', reaction: 'delighted' }
];

const SMILE_HOLD_MS = 800;

export function introCurtainFadeDelayMs() {
    return MASCOT_LOAD_BEATS[MASCOT_LOAD_BEATS.length - 1].at + SMILE_HOLD_MS;
}

export function mascotLoadFrameAt(ms, { reduceMotion = false } = {}) {
    if (reduceMotion) {
        return { direction: 'center', reaction: null, playing: false };
    }

    let frame = MASCOT_LOAD_BEATS[0];

    for (const beat of MASCOT_LOAD_BEATS) {
        if (ms >= beat.at) {
            frame = beat;
        }
    }

    const last = MASCOT_LOAD_BEATS[MASCOT_LOAD_BEATS.length - 1];

    return {
        direction: frame.direction,
        reaction: frame.reaction,
        playing: ms < last.at
    };
}

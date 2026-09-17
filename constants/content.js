export const INTRO_LOCKUP = {
    given: 'Leo',
    family: 'Dinh'
};

export const HOME_MASCOT = {
    directions: '/mascots/tu-an-glasses-directions.webp',
    reactions: '/mascots/tu-an-glasses-reactions.webp',
    label: 'Leo'
};

export function lockupLabel() {
    return `${INTRO_LOCKUP.given} ${INTRO_LOCKUP.family}`;
}

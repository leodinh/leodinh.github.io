export const INTRO_LOCKUP = {
    given: 'Leo',
    family: 'Dinh'
};

export const HOME_INTRO = {
    greeting: "Hey, I'm Leo.",
    display: 'Full-stack developer',
    craft: 'I build things for the web',
    actions: [
        { href: '/about', label: 'Get to know me' },
        { href: '/cv.pdf', label: 'Résumé' }
    ]
};

export const HOME_MASCOT = {
    directions: '/mascots/tu-an-glasses-directions.webp',
    reactions: '/mascots/tu-an-glasses-reactions.webp',
    label: 'Leo'
};

export function lockupLabel() {
    return `${INTRO_LOCKUP.given} ${INTRO_LOCKUP.family}`;
}

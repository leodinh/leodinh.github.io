export const ABOUT_CHAPTERS = [
    { id: 'me', number: '01', label: 'Me' },
    { id: 'how-i-work', number: '02', label: 'How I work' },
    { id: 'experience', number: '03', label: 'Experience' },
    { id: 'outside', number: '04', label: 'Outside work' },
    { id: 'contact', number: '05', label: 'Contact' }
];

export const ABOUT_ME = {
    title: 'I enjoying building things end to end',
    left: '',
    right:
        'from figuring out the problem to shaping the experience and making sure everything works properly behind the scenes.',
    photo: '/images/about/my-photo.png',
    photoAlt: 'Black and white portrait of Leo looking to the side'
};

export const HOW_I_WORK = {
    stack: 'Full-stack · React · Next.js · Node.js',
    body:
        'I like figuring things out. I stay curious about systems, comfortable with complexity, and always looking for a clearer way forward.'
};

export const ABOUT_CONTACT = [
    { href: 'https://github.com/leodinh', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/leotuandinh/', label: 'LinkedIn' },
    { href: 'mailto:leo.atdinh@gmail.com', label: 'Email' },
    { href: '/cv.pdf', label: 'Résumé' }
];

export const ABOUT_RECOMMENDATION = {
    name: 'Dhruvin Parikh',
    role: 'CTO at OptyFi',
    quote:
        'Leo is a highly skilled full-stack blockchain developer who consistently delivers excellent results. He is a valuable asset to any team seeking expertise across front-end, back-end, and on-chain business logic.'
};

export function workLogStatus(period) {
    return /\bPresent\b/i.test(period) ? 'CURRENT / LOGGED' : 'LOGGED';
}

export function contactLinkAttrs(href) {
    return /^https?:\/\//i.test(href) ? { target: '_blank', rel: 'noreferrer' } : {};
}

export function shouldFadeChapterIndex(contactBottom, viewportHeight) {
    return contactBottom < viewportHeight * 0.92;
}

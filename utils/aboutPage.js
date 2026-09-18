export const ABOUT_CHAPTERS = [
    { id: 'me', number: '01', label: 'Me' },
    { id: 'how-i-work', number: '02', label: 'How I work' },
    { id: 'experience', number: '03', label: 'Experience' },
    { id: 'outside', number: '04', label: 'Outside work' },
    { id: 'kind-words', number: '05', label: 'Kind words' }
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
    { href: '/resume.pdf', label: 'Résumé' }
];

export const ABOUT_RECOMMENDATION = {
    name: 'Dhruvin Parikh',
    role: 'CTO at OptyFi',
    href: 'https://www.linkedin.com/in/leotuandinh/',
    moreLabel: 'Read more on LinkedIn',
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

export const STACK = [
    ['nodedotjs', 'Node.js'],
    ['typescript', 'TypeScript'],
    ['nextdotjs', 'Next.js'],
    ['nestjs', 'NestJS'],
    ['react', 'React'],
    ['solidity', 'Solidity'],
    ['postgresql', 'PostgreSQL'],
    ['mongodb', 'MongoDB'],
    ['svelte', 'SvelteKit']
];
export const STACK_WORK = [
    {
        id: 'marketplace',
        label: 'digital marketplaces',
        skills: ['nodedotjs', 'typescript', 'nextdotjs', 'react', 'nestjs', 'postgresql', 'mongodb']
    },
    {
        id: 'dashboard',
        label: 'admin dashboards',
        skills: ['nodedotjs', 'typescript', 'react', 'nestjs', 'postgresql']
    },
    {
        id: 'web3',
        label: 'Web3 applications',
        skills: ['nodedotjs', 'typescript', 'nextdotjs', 'react', 'solidity', 'svelte', 'mongodb']
    }
];

export const STACK_COPY = {
    intro: 'My current work includes',
    ending: 'Each project has added something new to my stack.'
};

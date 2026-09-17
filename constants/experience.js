export const EXPERIENCE = [
    {
        role: 'Full-Stack Developer',
        company: 'Fullstock Media',
        period: 'Mar 2026 - Present',
        summary:
            'Worked on Wondermint, an AI creator marketplace: React-to-Next.js migration, Stripe and PayPal billing, HttpOnly session cookies, and marketplace reviews.',
        highlights: [
            'Contributed to migrating a React application to Next.js, adding server-side rendering and improving the homepage’s Lighthouse performance score from 41 to 70.',
            'Developed subscription and purchase flows with Stripe and PayPal across the frontend and NestJS APIs, including plan changes, failed-payment handling, and refunds.',
            'Moved authentication to HttpOnly cookies, updated password reset to revoke other sessions, and kept account changes in sync across browser tabs.',
            'Built marketplace reviews and ratings across the frontend and API, including seller replies and review eligibility rules.'
        ],
        technologies: ['Next.js', 'NestJS', 'Stripe', 'PayPal']
    },
    {
        role: 'Full-Stack Web3 Developer',
        company: 'Macroscope',
        period: 'Apr 2025 - Feb 2026',
        summary:
            'Built the Next.js frontend for a Web3 game with claiming, trading, leaderboards, and profiles, plus NestJS claim/trade APIs, SvelteKit admin tools, and a Shopify storefront.',
        highlights: [
            'Built the Next.js frontend for a Web3 game with asset claiming, trading, leaderboards and user profiles.',
            'Contributed to NestJS APIs for asset claims and trading, adding claim limits, ownership checks, and signed minting requests.',
            'Implemented wallet authentication, Google and Discord sign-in, account linking, and email verification.',
            'Built SvelteKit admin tools to view user activity, manage allowlists, and configure referral rewards.',
            'Built and deployed a SvelteKit storefront using Shopify’s Storefront API for product browsing, cart management, and checkout.'
        ],
        technologies: ['Next.js', 'NestJS', 'SvelteKit', 'Shopify']
    },
    {
        role: 'Full-Stack Developer, Contract',
        company: 'Source Independent Entertainment',
        shortCompany: 'SIE',
        period: 'Jan 2024 - Mar 2025',
        summary:
            'Built the React frontend and dashboard for an NFT marketplace, including wallet and smart-contract integrations.',
        highlights: [
            'Co-developed NestJS and GraphQL APIs to process smart-contract events, update marketplace records and send user notifications.'
        ],
        technologies: ['React', 'NestJS', 'GraphQL', 'Web3']
    },
    {
        role: 'Full-Stack Developer, Contract',
        company: 'Gaia Labs (via Capital Methods)',
        shortCompany: 'Gaia Labs',
        period: 'Oct 2022 - Oct 2023',
        isBranch: true,
        branchLabel: 'Contract branch through Capital Methods',
        summary:
            'Built Next.js features and REST APIs for NFT management and event tracking, then fixed security-audit and KYC issues and added lazy loading for heavier UI.',
        highlights: [
            'Fixed security-audit and KYC issues, expanded unit tests, and added lazy loading for heavier UI components.'
        ],
        technologies: ['Next.js', 'REST APIs', 'Smart contracts', 'Testing']
    },
    {
        role: 'Full-Stack Developer, Full-time',
        company: 'Capital Methods',
        period: 'Feb 2021 - Sep 2023',
        summary:
            'Built OptyFi’s DeFi yield-optimization application and company website with Next.js and TypeScript; the protocol reached a $2M+ peak TVL.',
        highlights: [
            'Developed Node.js and PostgreSQL APIs, integrated smart contracts, deployed AWS services, and implemented on-chain data indexing.'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
        role: 'Student Researcher',
        company: 'George Brown College',
        shortCompany: 'GBC',
        period: 'Jun 2020 - Jan 2021',
        summary: 'Researched and implemented a blockchain network using Go and React.',
        highlights: [],
        technologies: ['Go', 'React', 'Blockchain']
    }
];

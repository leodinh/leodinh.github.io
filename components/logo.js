import { INTRO_LOCKUP } from '@/constants/content';

const LOGO =
    'site-logo inline-flex items-center font-[family-name:var(--font-display),Georgia,serif] font-normal leading-none tracking-[-0.03em] transition-transform duration-160 ease-out group-hover:scale-logo';

const SIZES = {
    header: 'gap-logo-dot text-mark text-ink dark:text-ink-dark',
    hero: 'site-logo--hero gap-logo-dot-hero text-lockup text-ink dark:text-ink-dark'
};

const DOTS = {
    header: 'size-logo-dot',
    hero: 'size-logo-dot-hero'
};

function Logo({ size = 'header' }) {
    return (
        <span className={`${LOGO} ${SIZES[size]}`}>
            <span className="inline-block">{INTRO_LOCKUP.given}</span>
            <span
                className={`site-logo-dot ${DOTS[size]} block shrink-0 rounded-full bg-accent transition-transform duration-160 ease-out group-hover:scale-logo-dot`}
                aria-hidden="true"
            />
            <span className="inline-block">{INTRO_LOCKUP.family}</span>
        </span>
    );
}

export default Logo;

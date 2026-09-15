import { INTRO_LOCKUP } from '@/constants/content';

function Logo({ size = 'header' }) {
    return (
        <span className={`site-logo site-logo--${size}`}>
            <span>{INTRO_LOCKUP.given}</span>
            <span className="site-logo-dot" aria-hidden="true" />
            <span>{INTRO_LOCKUP.family}</span>
        </span>
    );
}

export default Logo;

'use client';

import Logo from './logo';

function SiteIntro() {
    return (
        <div className="site-intro-curtain" aria-hidden="true">
            <Logo size="hero" />
            <span className="site-intro-line" />
        </div>
    );
}

export default SiteIntro;

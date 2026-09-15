'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo';

function SiteIntro() {
    const pathname = usePathname();

    return (
        <div key={pathname} className="site-intro-curtain" aria-hidden="true">
            <Logo size="hero" />
            <span className="site-intro-line" />
        </div>
    );
}

export default SiteIntro;

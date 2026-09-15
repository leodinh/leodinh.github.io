'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from './toggleTheme';
import NavMobile from './navMobile';
import Logo from './logo';
import SiteNav from './siteNav';
import { lockupLabel } from '../constants/content';

function Header() {
    const pathname = usePathname();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/photography', label: 'Photography' }
    ];

    return (
        <header className="site-header">
            <Link href="/" className="site-header-logo" aria-label={`${lockupLabel()} — home`}>
                <Logo size="header" />
            </Link>
            <SiteNav links={links} pathname={pathname} />
            <div className="site-header-end">
                <ToggleTheme />
            </div>
            <NavMobile links={links} pathname={pathname} />
        </header>
    );
}

export default Header;

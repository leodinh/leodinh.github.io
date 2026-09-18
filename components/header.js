'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from './toggleTheme';
import NavMobile from './navMobile';
import Logo from './logo';
import SiteNav from './siteNav';
import { lockupLabel } from '@/constants/content';

function Header() {
    const pathname = usePathname();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' }
    ];

    return (
        <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between opacity-0 transition-opacity delay-0 duration-240 ease-out [html.site-intro-done_&]:opacity-100 motion-reduce:duration-200">
            <Link
                href="/"
                className="group inline-flex w-fit shrink-0 transition-transform duration-160 ease-out active:scale-press"
                aria-label={`${lockupLabel()} — home`}>
                <Logo size="header" />
            </Link>
            <SiteNav links={links} pathname={pathname} />
            <div className="hidden justify-end lg:flex">
                <ToggleTheme />
            </div>
            <NavMobile links={links} pathname={pathname} />
        </header>
    );
}

export default Header;

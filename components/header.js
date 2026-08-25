'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from './toggleTheme';
import HeaderBackground from './headerBackground';
import NavMobile from './navMobile';
function Header() {
    const pathname = usePathname();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About me' }
    ];

    return (
        <header className="sticky inset-x-0 top-0 z-30 w-full max-w-[1296px] transition-all">
            <div className="relative z-10 h-14 items-center justify-between">
                <div className="flex h-14 items-center justify-between">
                    <Link
                        href="/"
                        className="relative z-50 block w-fit lg:z-10 lg:grow lg:basis-0"
                        aria-label="Leo Tuan Dinh — home">
                        <span
                            className={`header-expression-avatar ${
                                mobileNavOpen ? 'is-menu-open' : ''
                            }`}
                            aria-hidden="true"
                        />
                    </Link>
                    <nav className="relative hidden lg:block" aria-label="Primary navigation">
                        <div className="relative">
                            <ul className="relative flex flex-row gap-2 px-2 py-0.5">
                                <HeaderBackground />
                                {links.map(({ href, label }) => {
                                    const isActive = pathname === href;
                                    return (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                aria-current={isActive ? 'page' : undefined}
                                                className={`block rounded-full px-3 py-1.5 text-sm transition-colors ease-out ${
                                                    isActive
                                                        ? 'bg-ink text-white dark:bg-white dark:text-ink'
                                                        : 'text-muted hover:text-ink dark:text-muted-dark dark:hover:text-white'
                                                }`}>
                                                {label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </nav>
                    <div className="hidden grow basis-0 justify-end lg:flex">
                        <ToggleTheme />
                    </div>
                    <NavMobile links={links} pathname={pathname} onOpenChange={setMobileNavOpen} />
                </div>
            </div>
        </header>
    );
}

export default Header;

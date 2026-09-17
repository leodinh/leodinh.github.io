'use client';
import { useEffect, useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
import VintageModal from './vintageModal';

function NavMobile({ links, pathname, onOpenChange }) {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        onOpenChange?.(openNav);
    }, [onOpenChange, openNav]);

    return (
        <>
            <button
                type="button"
                className="nav-mobile-toggle fixed top-2 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-line bg-page/90 text-ink shadow-lg shadow-zinc-950/5 backdrop-blur-xl lg:hidden dark:border-line-dark dark:bg-page-dark/90 dark:text-ink-dark"
                onClick={() => setOpenNav((prev) => !prev)}
                aria-label={openNav ? 'Close navigation' : 'Open navigation'}
                aria-expanded={openNav}
                aria-controls="mobile-navigation">
                {openNav ? <XMarkIcon className="h-5 w-5" /> : <Bars2Icon className="h-5 w-5" />}
            </button>
            <VintageModal
                id="mobile-navigation"
                open={openNav}
                onClose={() => setOpenNav(false)}
                eyebrow="Menu"
                bottomSheet>
                <ul className="nav-sheet-list">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`nav-sheet-link ${isActive ? 'is-active' : ''}`}
                                    onClick={() => setOpenNav(false)}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="nav-sheet-appearance">
                    <span>Appearance</span>
                    <ToggleTheme />
                </div>
            </VintageModal>
        </>
    );
}

export default NavMobile;

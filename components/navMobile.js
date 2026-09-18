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
                className="nav-mobile-toggle fixed top-2 z-50 flex size-10 cursor-pointer items-center justify-center rounded-control border border-line bg-page/90 text-ink shadow-lg shadow-zinc-950/5 backdrop-blur-xl transition-[transform,border-color] duration-160 ease-out active:scale-press lg:hidden dark:border-line-dark dark:bg-page-dark/90 dark:text-ink-dark"
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
                <ul className="mt-6 grid gap-1">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`block rounded-lg px-4 py-3.5 text-mark tracking-[-0.02em] transition-[transform,background-color,color] duration-160 ease-out active:scale-press ${
                                        isActive
                                            ? 'bg-ink text-white dark:bg-white dark:text-ink'
                                            : 'text-ink hover:bg-ink/6 dark:text-ink-dark dark:hover:bg-white/8'
                                    }`}
                                    onClick={() => setOpenNav(false)}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-3 flex items-center justify-between border-t border-line px-1 pt-4 pb-1 text-ui text-muted dark:border-line-dark dark:text-muted-dark">
                    <span>Appearance</span>
                    <ToggleTheme />
                </div>
            </VintageModal>
        </>
    );
}

export default NavMobile;

'use client';
import { useEffect, useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';

function NavMobile({ links, pathname }) {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        if (!openNav) return;

        const previousBodyOverflow = document.body.style.overflowY;
        const previousHtmlOverflow = document.documentElement.style.overflowY;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setOpenNav(false);
        };

        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
        window.addEventListener('keydown', closeOnEscape);

        return () => {
            document.body.style.overflowY = previousBodyOverflow;
            document.documentElement.style.overflowY = previousHtmlOverflow;
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [openNav]);

    return (
        <>
            <button
                type="button"
                className="fixed top-2 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-page/90 text-ink shadow-lg shadow-zinc-950/5 backdrop-blur-xl transition hover:border-accent/40 lg:hidden dark:border-line-dark dark:bg-page-dark/90 dark:text-ink-dark"
                onClick={() => setOpenNav((prev) => !prev)}
                aria-label={openNav ? 'Close navigation' : 'Open navigation'}
                aria-expanded={openNav}
                aria-controls="mobile-navigation">
                {openNav ? <XMarkIcon className="h-5 w-5" /> : <Bars2Icon className="h-5 w-5" />}
            </button>
            <button
                type="button"
                className={`fixed inset-0 z-30 cursor-default bg-ink/12 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden dark:bg-black/35 ${
                    openNav ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
                }`}
                aria-label="Close navigation menu"
                tabIndex={openNav ? 0 : -1}
                onClick={() => setOpenNav(false)}
            />
            <nav
                id="mobile-navigation"
                className={`fixed right-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-3 z-40 mx-auto max-w-sm origin-bottom rounded-[1.75rem] border border-line bg-page/95 p-3 shadow-2xl shadow-zinc-950/15 backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden dark:border-line-dark dark:bg-page-dark/95 ${
                    openNav
                        ? 'visible translate-y-0 scale-100 opacity-100'
                        : 'invisible pointer-events-none translate-y-8 scale-[0.98] opacity-0'
                }`}
                aria-label="Mobile navigation"
                aria-hidden={!openNav}
                inert={!openNav}>
                <ul className="space-y-1">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold tracking-[-0.025em] transition-colors ${
                                        isActive
                                            ? 'bg-ink text-white dark:bg-white dark:text-ink'
                                            : 'text-ink hover:bg-surface dark:text-ink-dark dark:hover:bg-surface-dark'
                                    }`}
                                    onClick={() => setOpenNav(false)}>
                                    {label}
                                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-3 flex items-center justify-between border-t border-line px-3 pt-4 pb-2 dark:border-line-dark">
                    <span className="text-sm text-muted dark:text-muted-dark">Appearance</span>
                    <ToggleTheme />
                </div>
            </nav>
        </>
    );
}

export default NavMobile;

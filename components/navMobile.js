'use client';
import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
function navMobile({ links, pathname }) {
    const [openNav, setOpenNav] = useState(false);
    const iconItem =
        'h-6 w-6 fill-zinc-700 stroke-zinc-500 dark:fill-zinc-100 dark:stroke-zinc-300';
    return (
        <>
            <button
                type="button"
                className="fixed top-5 right-[0.7rem] z-50 rounded-md lg:hidden"
                onClick={() => setOpenNav((prev) => !prev)}
                aria-label={openNav ? 'Close navigation' : 'Open navigation'}
                aria-expanded={openNav}
                aria-controls="mobile-navigation">
                {openNav ? <XMarkIcon className={iconItem} /> : <Bars2Icon className={iconItem} />}
            </button>
            <div
                id="mobile-navigation"
                className={`lg:hidden absolute top-0 left-0 w-screen  bg-white dark:bg-gray-950 z-45 px-4 py-12 transition-all ${
                    openNav
                        ? 'visible h-screen opacity-100'
                        : 'invisible h-0 overflow-hidden opacity-0'
                }`}
                aria-hidden={!openNav}>
                <ul className="mt-20 divide-y divide-gray-75 grid ">
                    {links.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`block rounded-md px-3 py-5 text-lg font-semibold ${
                                        isActive
                                            ? 'text-accent'
                                            : 'text-muted hover:text-ink dark:text-muted-dark dark:hover:text-white'
                                    }`}
                                    onClick={() => setOpenNav(false)}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex items-center w-full justify-center">
                    <ToggleTheme />
                </div>
            </div>
        </>
    );
}

export default navMobile;

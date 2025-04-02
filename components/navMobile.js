'use client';
import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
function navMobile() {
    const [openNav, setOpenNav] = useState(false);
    const linkStyle =
        'block rounded-md px-3 py-5 text-sm text-gray-900/60 dark:text-white/70 font-bold';
    const iconItem =
        'h-6 w-6 fill-zinc-700 stroke-zinc-500 dark:fill-zinc-100 dark:stroke-zinc-300';
    return (
        <>
            <button
                className="fixed right-[0.7rem] top-5 z-50 lg:hidden"
                onClick={() => setOpenNav((prev) => !prev)}>
                {openNav ? <XMarkIcon className={iconItem} /> : <Bars2Icon className={iconItem} />}
            </button>
            <div
                className={`lg:hidden absolute top-0 left-0 w-screen  bg-white dark:bg-gray-950 z-45 px-4 py-12 transition-all ${
                    openNav ? 'h-screen opacity-100' : 'h-0 opacity-0'
                }`}>
                <ul className="mt-20 divide-y divide-gray-75 grid ">
                    <li>
                        <Link href="/" className={linkStyle} onClick={() => setOpenNav(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={linkStyle} onClick={() => setOpenNav(false)}>
                            {' '}
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/project"
                            className={linkStyle}
                            onClick={() => setOpenNav(false)}>
                            {' '}
                            Projects
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center w-full justify-center">
                    <ToggleTheme />
                </div>
            </div>
        </>
    );
}

export default navMobile;

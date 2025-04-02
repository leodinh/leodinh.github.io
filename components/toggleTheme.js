'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

function toggleTheme() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            type="button"
            className="group rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
            onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}>
            <MoonIcon className="hidden h-4 w-4 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:block" />
            <SunIcon className="h-4 w-4 fill-zinc-700 stroke-zinc-500 transition group-hover:fill-zinc-500 group-hover:stroke-zinc-700 dark:hidden" />
        </button>
    );
}

export default toggleTheme;

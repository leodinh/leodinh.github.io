'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

function toggleTheme() {
    const { setTheme } = useTheme();
    return (
        <button
            type="button"
            className="theme-toggle group cursor-pointer rounded-sm bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
            aria-label="Toggle color theme"
            onClick={() => {
                const isDark = document.documentElement.classList.contains('dark');
                setTheme(isDark ? 'light' : 'dark');
            }}>
            <MoonIcon className="hidden h-4 w-4 fill-zinc-100 stroke-zinc-500 dark:block" />
            <SunIcon className="h-4 w-4 fill-zinc-700 stroke-zinc-500 dark:hidden" />
        </button>
    );
}

export default toggleTheme;

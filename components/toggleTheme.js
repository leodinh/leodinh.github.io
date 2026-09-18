'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

function ToggleTheme() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        setIsDark(resolvedTheme === 'dark');
    }, [resolvedTheme]);

    return (
        <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-control border border-line bg-surface text-ink transition-[transform,background-color,border-color] duration-160 ease-out active:scale-press dark:border-line-dark dark:bg-surface-dark dark:text-ink-dark"
            aria-label="Toggle color theme"
            aria-pressed={isDark ?? undefined}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            <span className="grid size-4">
                <SunIcon
                    className="col-start-1 row-start-1 size-4 transition-opacity duration-160 dark:opacity-0"
                    aria-hidden="true"
                />
                <MoonIcon
                    className="col-start-1 row-start-1 size-4 opacity-0 transition-opacity duration-160 dark:opacity-100"
                    aria-hidden="true"
                />
            </span>
        </button>
    );
}

export default ToggleTheme;

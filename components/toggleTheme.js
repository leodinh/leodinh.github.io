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
            className="theme-toggle"
            aria-label="Toggle color theme"
            aria-pressed={isDark ?? undefined}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            <span className="theme-toggle-icons">
                <SunIcon className="theme-toggle-sun" aria-hidden="true" />
                <MoonIcon className="theme-toggle-moon" aria-hidden="true" />
            </span>
        </button>
    );
}

export default ToggleTheme;

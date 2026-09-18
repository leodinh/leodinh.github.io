'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { tabClipPath } from '@/utils/tabClip';

function SiteNav({ links, pathname }) {
    const trackRef = useRef(null);
    const clipRef = useRef(null);
    const [clipPath, setClipPath] = useState('inset(0 100% 0 0 round 999px)');

    useLayoutEffect(() => {
        const track = trackRef.current;
        const clipList = clipRef.current;
        if (!track || !clipList) return;

        const update = () => {
            const item = track.querySelector(`[data-nav-tab="${pathname}"] .site-nav-link`);
            if (!item) return;
            const listBox = clipList.getBoundingClientRect();
            const itemBox = item.getBoundingClientRect();
            const radius = Number.parseFloat(getComputedStyle(item).borderRadius) || 999;
            setClipPath(
                tabClipPath({
                    trackWidth: listBox.width,
                    itemLeft: itemBox.left - listBox.left,
                    itemWidth: itemBox.width,
                    radius
                })
            );
        };

        update();
        const observer = new ResizeObserver(update);
        observer.observe(track);
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <nav className="hidden lg:block" aria-label="Primary navigation">
            <div
                className="relative grid rounded-full border border-line bg-surface p-0.5 dark:border-line-dark dark:bg-surface-dark"
                ref={trackRef}>
                <ul className="col-start-1 row-start-1 m-0 flex list-none gap-0.5 p-0">
                    {links.map(({ href, label }) => (
                        <li key={href} data-nav-tab={href}>
                            <Link
                                href={href}
                                aria-current={pathname === href ? 'page' : undefined}
                                className="site-nav-link block rounded-full px-3.5 py-1.5 text-ui text-muted transition-[transform,color] duration-160 ease-out hover:text-ink active:scale-press dark:text-muted-dark dark:hover:text-ink-dark">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul
                    className="pointer-events-none col-start-1 row-start-1 m-0 flex list-none gap-0.5 p-0 transition-[clip-path] duration-180 ease-out motion-reduce:transition-none"
                    aria-hidden="true"
                    ref={clipRef}
                    style={{ clipPath }}>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <span className="site-nav-link block rounded-full bg-ink px-3.5 py-1.5 text-ui text-white dark:bg-white dark:text-ink">
                                {label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default SiteNav;

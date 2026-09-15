'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { tabClipPath } from '../utils/tabClip';

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
        <nav className="site-nav" aria-label="Primary navigation">
            <div className="site-nav-track" ref={trackRef}>
                <ul className="site-nav-list">
                    {links.map(({ href, label }) => (
                        <li key={href} data-nav-tab={href}>
                            <Link
                                href={href}
                                aria-current={pathname === href ? 'page' : undefined}
                                className="site-nav-link">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul
                    className="site-nav-list site-nav-list-active"
                    aria-hidden="true"
                    ref={clipRef}
                    style={{ clipPath }}>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <span className="site-nav-link">{label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default SiteNav;

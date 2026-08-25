'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer() {
    const pathname = usePathname();
    const links = [
        { href: 'https://www.linkedin.com/in/leotuandinh/', label: 'LinkedIn' },
        { href: 'https://github.com/leodinh', label: 'GitHub' },
        { href: 'https://x.com/dinh_leo57974', label: 'X' }
    ];

    if (pathname === '/about') {
        return (
            <footer className="about-contact-footer">
                <p>Say hi.</p>
                <ul>
                    <li>
                        <Link href="https://github.com/leodinh" target="_blank" rel="noreferrer">
                            GitHub ↗
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/leotuandinh/"
                            target="_blank"
                            rel="noreferrer">
                            LinkedIn ↗
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:leo.atdinh@gmail.com">Email ↗</Link>
                    </li>
                </ul>
            </footer>
        );
    }

    return (
        <footer className="flex h-16 w-full shrink-0 items-center justify-between border-t border-line text-sm text-muted dark:border-line-dark dark:text-muted-dark">
            <span>Find me on</span>
            <ul className="flex items-center gap-5">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-ink dark:hover:text-white">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;

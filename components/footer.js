import Link from 'next/link';

function Footer() {
    const links = [
        { href: 'https://www.linkedin.com/in/leotuandinh/', label: 'LinkedIn' },
        { href: 'https://github.com/leodinh', label: 'GitHub' },
        { href: 'mailto:leo.atdinh@gmail.com', label: 'Email' }
    ];

    return (
        <footer className="flex h-16 w-full shrink-0 items-center justify-between border-t border-line text-sm text-muted opacity-0 transition-opacity delay-80 duration-240 ease-out [html.site-intro-done_&]:opacity-100 motion-reduce:delay-0 motion-reduce:duration-200 dark:border-line-dark dark:text-muted-dark">
            <span>© 2026 Leo Dinh </span>
            <ul className="flex items-center gap-5">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-[color,transform] duration-160 ease-out hover:text-ink active:scale-press dark:hover:text-white">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;

import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import {
    ABOUT_CHAPTERS,
    ABOUT_CONTACT,
    ABOUT_RECOMMENDATION,
    contactLinkAttrs
} from '@/utils/aboutPage';
import { DISPLAY, HEADING, INLINE_LINK, MUTED, RULE, SECTION } from './aboutUi';

const CHAPTER = ABOUT_CHAPTERS[4];

function ContactSection() {
    return (
        <section
            id={CHAPTER.id}
            className={`${SECTION} border-b-0`}
            aria-labelledby="contact-title">
            <h2 id="contact-title" className={HEADING}>
                {CHAPTER.label}
            </h2>
            <blockquote className={`${DISPLAY} mt-7 max-w-[40rem] text-title italic`}>
                {ABOUT_RECOMMENDATION.quote}
                <footer className="mt-6 grid gap-0.5 text-ui not-italic">
                    <strong>{ABOUT_RECOMMENDATION.name}</strong>
                    <span className={`text-meta ${MUTED}`}>{ABOUT_RECOMMENDATION.role}</span>
                </footer>
            </blockquote>
            <ul
                className={`mt-10 flex flex-wrap gap-x-7 gap-y-5 border-t ${RULE} pt-6 max-md:flex-col max-md:items-start max-md:gap-3.5`}>
                {ABOUT_CONTACT.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={INLINE_LINK}
                            {...contactLinkAttrs(item.href)}>
                            {item.label}
                            <ArrowUpRightIcon aria-hidden="true" />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ContactSection;

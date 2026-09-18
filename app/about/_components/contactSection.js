import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ABOUT_CHAPTERS, ABOUT_RECOMMENDATION, contactLinkAttrs } from '@/utils/aboutPage';
import { DISPLAY, HEADING, INK, INLINE_LINK, SECTION } from './aboutUi';

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
            <blockquote className={`${DISPLAY} mt-7 max-w-[40rem] text-title italic ${INK}`}>
                {ABOUT_RECOMMENDATION.quote}
                <footer className={`mt-6 grid gap-1 text-ui not-italic ${INK}`}>
                    <strong className="font-semibold">{ABOUT_RECOMMENDATION.name}</strong>
                    <span>{ABOUT_RECOMMENDATION.role}</span>
                </footer>
            </blockquote>
            <Link
                href={ABOUT_RECOMMENDATION.href}
                className={`${INLINE_LINK} mt-7`}
                {...contactLinkAttrs(ABOUT_RECOMMENDATION.href)}>
                {ABOUT_RECOMMENDATION.moreLabel}
                <ArrowUpRightIcon aria-hidden="true" />
            </Link>
        </section>
    );
}

export default ContactSection;

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { EXPERIENCE } from '@/constants/experience';
import { ABOUT_PORTRAITS } from '@/constants/aboutPortraits';
import {
    ABOUT_CHAPTERS,
    ABOUT_CONTACT,
    ABOUT_RECOMMENDATION,
    HOW_I_WORK,
    contactLinkAttrs,
    mePortraits,
    shouldFadeChapterIndex,
    workLogStatus
} from '@/utils/aboutPage';
import VintageModal from './vintageModal';

const ME_STILLS = mePortraits(ABOUT_PORTRAITS);

function SectionMark({ chapter }) {
    return (
        <p className="about-section-mark">
            {chapter.number} / {chapter.label.toUpperCase()}
        </p>
    );
}

function ChapterIndex() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const sections = ABOUT_CHAPTERS.map(({ id }) => document.getElementById(id)).filter(
            Boolean
        );

        const update = () => {
            const readingLine = window.innerHeight * 0.36;
            let nextIndex = 0;
            sections.forEach((section, index) => {
                if (section.getBoundingClientRect().top <= readingLine) nextIndex = index;
            });
            setActiveIndex(nextIndex);

            const contact = document.getElementById('contact');
            if (contact) {
                const rect = contact.getBoundingClientRect();
                setFade(shouldFadeChapterIndex(rect.bottom, window.innerHeight));
                const chapter = ABOUT_CHAPTERS[nextIndex];
                if (chapter && window.location.hash !== `#${chapter.id}`) {
                    window.history.replaceState(null, '', `#${chapter.id}`);
                }
            }
        };

        const initialId = window.location.hash.slice(1);
        const initial = sections.find((section) => section.id === initialId);
        if (initial) initial.scrollIntoView({ behavior: 'auto', block: 'start' });
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const goToChapter = (index) => {
        const chapter = ABOUT_CHAPTERS[index];
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById(chapter.id)?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start'
        });
        window.history.replaceState(null, '', `#${chapter.id}`);
        setActiveIndex(index);
    };

    return (
        <nav
            className={`about-chapter-index${fade ? ' is-fading' : ''}`}
            aria-label="About page chapters">
            {ABOUT_CHAPTERS.map((chapter, index) => (
                <button
                    type="button"
                    className={index === activeIndex ? 'is-active' : ''}
                    aria-current={index === activeIndex ? 'location' : undefined}
                    onClick={() => goToChapter(index)}
                    key={chapter.id}>
                    <span>{chapter.number}</span>
                    {chapter.label}
                </button>
            ))}
        </nav>
    );
}

function AboutStory() {
    const [selectedWork, setSelectedWork] = useState(null);
    const me = ABOUT_CHAPTERS[0];
    const howIWork = ABOUT_CHAPTERS[1];
    const experience = ABOUT_CHAPTERS[2];
    const outside = ABOUT_CHAPTERS[3];
    const contact = ABOUT_CHAPTERS[4];

    return (
        <div className="about-editorial-page">
            <ChapterIndex />

            <section
                id={me.id}
                className="about-editorial-section about-me"
                aria-labelledby="me-title">
                <SectionMark chapter={me} />
                <div className="about-me-layout">
                    <div className="about-me-copy">
                        <h1 id="me-title">I like figuring things out.</h1>
                        <p>
                            Sometimes that means building a product. Sometimes it means following a
                            new idea—or wandering somewhere with a camera.
                        </p>
                        <p className="about-location">Probably somewhere in Canada</p>
                    </div>
                    <figure className="about-me-stills" aria-label="Photographs of Leo">
                        {ME_STILLS.map((portrait) => (
                            <span className="about-me-still" key={portrait.file}>
                                <Image
                                    src={`/images/about/${portrait.file}`}
                                    alt={portrait.alt}
                                    fill
                                    priority={portrait.file === ME_STILLS[0].file}
                                    sizes="(min-width: 768px) 220px, 40vw"
                                    className="about-me-still-image"
                                    style={{ objectPosition: portrait.objectPosition }}
                                />
                            </span>
                        ))}
                    </figure>
                </div>
            </section>

            <section
                id={howIWork.id}
                className="about-editorial-section about-how"
                aria-labelledby="how-title">
                <SectionMark chapter={howIWork} />
                <h2 id="how-title">{howIWork.label}</h2>
                <p className="about-how-stack">{HOW_I_WORK.stack}</p>
                <p className="about-how-body">{HOW_I_WORK.body}</p>
            </section>

            <section
                id={experience.id}
                className="about-editorial-section about-work"
                aria-labelledby="work-title">
                <SectionMark chapter={experience} />
                <div className="about-work-heading">
                    <h2 id="work-title">{experience.label}</h2>
                    <Link href="/cv.pdf" className="about-inline-link">
                        Full résumé
                        <ArrowUpRightIcon aria-hidden="true" />
                    </Link>
                </div>
                <div className="about-work-grid">
                    {EXPERIENCE.map((item, index) => (
                        <button
                            type="button"
                            className="about-work-card"
                            onClick={() => setSelectedWork(item)}
                            key={`${item.company}-${item.role}`}>
                            <span className="about-work-card-index">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="about-work-card-company">{item.company}</span>
                            <span className="about-work-card-role">{item.role}</span>
                            <span className="about-work-card-period">{item.period}</span>
                            <span className="about-work-card-hint">Open log</span>
                        </button>
                    ))}
                </div>
            </section>

            <section
                id={outside.id}
                className="about-editorial-section about-offline"
                aria-labelledby="offline-title">
                <SectionMark chapter={outside} />
                <div className="about-offline-layout">
                    <div>
                        <h2 id="offline-title">{outside.label}</h2>
                        <p>
                            Photography slows me down. It makes me notice the overlooked corners,
                            strange shadows, and small details that give a place its character.
                        </p>
                        <Link
                            href="/photography"
                            className="about-inline-link about-photography-link">
                            See my photography
                            <ArrowUpRightIcon aria-hidden="true" />
                        </Link>
                    </div>
                    <figure className="about-photography-frame">
                        <Image
                            src="/images/port-hope-flower.jpg"
                            fill
                            sizes="(min-width: 768px) 52vw, 100vw"
                            className="object-cover"
                            alt="A pink flower installation catching afternoon light on a brick wall in Port Hope, Ontario"
                        />
                        <figcaption>
                            <span>Port Hope, Ontario</span>
                            <span>Following the afternoon light.</span>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section
                id={contact.id}
                className="about-editorial-section about-contact"
                aria-labelledby="contact-title">
                <SectionMark chapter={contact} />
                <h2 id="contact-title">{contact.label}</h2>
                <blockquote>
                    {ABOUT_RECOMMENDATION.quote}
                    <footer>
                        <strong>{ABOUT_RECOMMENDATION.name}</strong>
                        <span>{ABOUT_RECOMMENDATION.role}</span>
                    </footer>
                </blockquote>
                <ul className="about-contact-links">
                    {ABOUT_CONTACT.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="about-inline-link"
                                {...contactLinkAttrs(item.href)}>
                                {item.label}
                                <ArrowUpRightIcon aria-hidden="true" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <VintageModal
                open={Boolean(selectedWork)}
                onClose={() => setSelectedWork(null)}
                eyebrow={selectedWork ? `WORK LOG // ${selectedWork.period}` : 'WORK LOG'}
                title={selectedWork?.company}
                bottomSheet>
                {selectedWork ? (
                    <>
                        <p className="about-work-modal-role">{selectedWork.role}</p>
                        <p className="about-work-modal-summary">{selectedWork.summary}</p>
                        <div className="about-work-modal-details">
                            <div>
                                <span>STATUS</span>
                                <strong>{workLogStatus(selectedWork.period)}</strong>
                            </div>
                            <div>
                                <span>STACK</span>
                                <strong>{selectedWork.technologies.join(' · ')}</strong>
                            </div>
                        </div>
                    </>
                ) : null}
            </VintageModal>
        </div>
    );
}

export default AboutStory;

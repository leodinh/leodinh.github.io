'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { EXPERIENCE } from '../constants/experience';
import VintageModal from './vintageModal';

const CHAPTERS = [
    { id: 'hello', number: '01', label: 'Hello' },
    { id: 'story', number: '02', label: 'Story' },
    { id: 'work', number: '03', label: 'Work' },
    { id: 'offline', number: '04', label: 'Offline' },
    { id: 'people', number: '05', label: 'People' }
];

const recommendation = {
    name: 'Dhruvin Parikh',
    role: 'CTO at OptyFi',
    quote:
        'Leo is a highly skilled full-stack blockchain developer who consistently delivers excellent results. He is a valuable asset to any team seeking expertise across front-end, back-end, and on-chain business logic.'
};

function SectionHeading({ chapter, title }) {
    return (
        <div className="about-editorial-heading">
            <span>{title}</span>
            <span className="about-editorial-index">
                {chapter.number} / {chapter.label}
            </span>
        </div>
    );
}

function ChapterNavigator({ containerRef }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [chapterListOpen, setChapterListOpen] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        const sections = CHAPTERS.map(({ id }) => document.getElementById(id)).filter(Boolean);
        let frame;

        const updateActiveChapter = () => {
            const readingLine = container.clientHeight * 0.36;
            let nextIndex = 0;

            sections.forEach((section, index) => {
                if (section.offsetTop - container.scrollTop <= readingLine) nextIndex = index;
            });

            setActiveIndex(nextIndex);
            frame = undefined;
        };

        const scheduleUpdate = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(updateActiveChapter);
        };

        const initialId = window.location.hash.slice(1);
        const initialSection = sections.find((section) => section.id === initialId);
        if (initialSection) container.scrollTop = initialSection.offsetTop;
        updateActiveChapter();
        container.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            container.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [containerRef]);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setChapterListOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    const goToChapter = (index) => {
        const chapter = CHAPTERS[index];
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const container = containerRef.current;
        const section = document.getElementById(chapter.id);

        if (container && section) {
            container.scrollTo({
                top: section.offsetTop,
                behavior: reduceMotion ? 'auto' : 'smooth'
            });
        }
        window.history.replaceState(null, '', `#${chapter.id}`);
        setActiveIndex(index);
        setChapterListOpen(false);
    };

    const activeChapter = CHAPTERS[activeIndex];

    return (
        <aside className="about-chapter-navigator" aria-label="About page chapters">
            <div
                id="about-chapter-list"
                className={`about-chapter-list ${chapterListOpen ? 'is-open' : ''}`}
                hidden={!chapterListOpen}>
                {CHAPTERS.map((chapter, index) => (
                    <button
                        type="button"
                        className={index === activeIndex ? 'is-active' : ''}
                        aria-current={index === activeIndex ? 'step' : undefined}
                        onClick={() => goToChapter(index)}
                        key={chapter.id}>
                        <span>{chapter.number}</span>
                        {chapter.label}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className="about-chapter-current"
                aria-expanded={chapterListOpen}
                aria-controls="about-chapter-list"
                onClick={() => setChapterListOpen((open) => !open)}>
                <span>
                    {activeChapter.number} / {String(CHAPTERS.length).padStart(2, '0')}
                </span>
                <strong>{activeChapter.label}</strong>
                <ChevronDownIcon className={chapterListOpen ? 'is-open' : ''} aria-hidden="true" />
            </button>
        </aside>
    );
}

function AboutStory() {
    const pageRef = useRef(null);
    const [selectedWork, setSelectedWork] = useState(null);

    useEffect(() => {
        const container = pageRef.current;
        const story = document.getElementById('story');
        const work = document.getElementById('work');
        const offline = document.getElementById('offline');
        const people = document.getElementById('people');
        if (!container || !story || !work || !offline || !people) return undefined;

        const targets = [story, work, offline, people];
        let frame;
        const updateVisibility = () => {
            const rootRect = container.getBoundingClientRect();
            targets.forEach((target) => {
                const rect = target.getBoundingClientRect();
                const visibleHeight =
                    Math.min(rect.bottom, rootRect.bottom) - Math.max(rect.top, rootRect.top);
                target.classList.toggle('is-visible', visibleHeight >= rootRect.height * 0.55);
            });
            frame = undefined;
        };
        const scheduleUpdate = () => {
            if (!frame) frame = window.requestAnimationFrame(updateVisibility);
        };

        updateVisibility();
        container.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        return () => {
            container.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div ref={pageRef} className="about-editorial-page">
            <ChapterNavigator containerRef={pageRef} />

            <section
                id="hello"
                className="about-editorial-section about-hello"
                aria-labelledby="hello-title">
                <SectionHeading chapter={CHAPTERS[0]} title="About" />
                <div className="about-hello-layout">
                    <div className="about-hello-copy">
                        <h1 id="hello-title">I like figuring things out.</h1>
                        <p>
                            Sometimes that means building a product. Sometimes it means following a
                            new idea—or wandering somewhere with a camera.
                        </p>
                    </div>

                    <div>
                        <figure
                            className="about-expression-stage"
                            aria-label="Illustrated expressions of Leo">
                            <span className="about-expression about-expression-smile" />
                            <span className="about-expression about-expression-camera" />
                            <span className="about-expression about-expression-thinking" />
                            <figcaption>Code, cameras, questions—and usually coffee.</figcaption>
                        </figure>
                        <p className="about-location">
                            <span>Probably somewhere in</span>
                            <span>Toronto</span>
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="story"
                className="about-editorial-section about-story"
                aria-labelledby="story-title">
                <SectionHeading chapter={CHAPTERS[1]} title="A bit of a journey" />
                <h2 id="story-title" className="sr-only">
                    From Vietnam to Canada
                </h2>
                <div className="about-route" aria-label="From Vietnam to Canada">
                    <div className="about-route-stop">
                        <strong>Vietnam</strong>
                        <span>Foundation in computer science.</span>
                    </div>
                    <span className="about-route-line" aria-hidden="true" />
                    <div className="about-route-stop">
                        <strong>Canada</strong>
                        <span>Room to explore blockchain.</span>
                    </div>
                </div>
                <p className="about-story-conclusion">
                    Eventually, it shaped who I am as a builder: curious about systems, comfortable
                    with complexity, and always looking for a clearer way forward.
                </p>
            </section>

            <section
                id="work"
                className="about-editorial-section about-work"
                aria-labelledby="work-title">
                <SectionHeading chapter={CHAPTERS[2]} title="Things I’ve worked on" />
                <div className="about-work-heading">
                    <h2 id="work-title">The path so far.</h2>
                    <Link
                        href="/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="about-inline-link">
                        Full résumé
                        <ArrowUpRightIcon aria-hidden="true" />
                    </Link>
                </div>
                <div className="about-work-grid">
                    {EXPERIENCE.map((experience) => (
                        <button
                            type="button"
                            className="about-work-card"
                            onClick={() => setSelectedWork(experience)}
                            key={`${experience.company}-${experience.role}`}>
                            <span className="about-work-card-index">
                                {String(EXPERIENCE.indexOf(experience) + 1).padStart(2, '0')}
                            </span>
                            <span className="about-work-card-company about-work-card-company-full">
                                {experience.company}
                            </span>
                            <span className="about-work-card-company about-work-card-company-short">
                                {experience.shortCompany || experience.company}
                            </span>
                            <span className="about-work-card-role">{experience.role}</span>
                            <span className="about-work-card-period">{experience.period}</span>
                            <span className="about-work-card-hint">Open log ↗</span>
                        </button>
                    ))}
                </div>
            </section>

            <section
                id="offline"
                className="about-editorial-section about-offline"
                aria-labelledby="offline-title">
                <SectionHeading chapter={CHAPTERS[3]} title="When I’m not here" />
                <div className="about-offline-layout">
                    <div>
                        <h2 id="offline-title">
                            <span className="about-offline-heading-full">
                                I’m usually wandering somewhere with a camera, following the light.
                            </span>
                            <span className="about-offline-heading-short">
                                Wandering with a camera.
                            </span>
                        </h2>
                        <p>
                            Photography slows me down. It makes me notice the overlooked corners,
                            strange shadows, and small details that give a place its character.
                        </p>
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
                <Link href="/photography" className="about-inline-link about-photography-link">
                    See my photography
                    <ArrowUpRightIcon aria-hidden="true" />
                </Link>
            </section>

            <section
                id="people"
                className="about-editorial-section about-people"
                aria-labelledby="people-title">
                <SectionHeading chapter={CHAPTERS[4]} title="Kind words" />
                <h2 id="people-title" className="sr-only">
                    A recommendation from {recommendation.name}
                </h2>
                <blockquote>
                    <span aria-hidden="true">“</span>
                    {recommendation.quote}
                </blockquote>
                <div className="about-recommendation-credit">
                    <p>
                        <strong>{recommendation.name}</strong>
                        <span>{recommendation.role}</span>
                    </p>
                    <Link
                        href="https://www.linkedin.com/in/leotuandinh/"
                        target="_blank"
                        rel="noreferrer"
                        className="about-inline-link">
                        More kind words
                        <ArrowUpRightIcon aria-hidden="true" />
                    </Link>
                </div>
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
                                <strong>ARCHIVED / LOGGED</strong>
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

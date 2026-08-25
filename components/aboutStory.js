'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowUpRightIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';
import NightPortrait from '../assets/my-photo-night.jpg';
import { EXPERIENCE } from '../constants/experience';

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

function ChapterNavigator() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [chapterListOpen, setChapterListOpen] = useState(false);

    useEffect(() => {
        const sections = CHAPTERS.map(({ id }) => document.getElementById(id)).filter(Boolean);
        let frame;

        const updateActiveChapter = () => {
            const readingLine = window.innerHeight * 0.36;
            let nextIndex = 0;

            sections.forEach((section, index) => {
                if (section.getBoundingClientRect().top <= readingLine) nextIndex = index;
            });

            setActiveIndex(nextIndex);
            frame = undefined;
        };

        const scheduleUpdate = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(updateActiveChapter);
        };

        updateActiveChapter();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

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

        document.getElementById(chapter.id)?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start'
        });
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

            <div className="about-chapter-arrows">
                <button
                    type="button"
                    aria-label="Previous About section"
                    disabled={activeIndex === 0}
                    onClick={() => goToChapter(activeIndex - 1)}>
                    <ArrowUpIcon aria-hidden="true" />
                </button>
                <button
                    type="button"
                    aria-label="Next About section"
                    disabled={activeIndex === CHAPTERS.length - 1}
                    onClick={() => goToChapter(activeIndex + 1)}>
                    <ArrowDownIcon aria-hidden="true" />
                </button>
            </div>
        </aside>
    );
}

function AboutStory() {
    return (
        <div className="about-editorial-page">
            <ChapterNavigator />

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

            <section id="story" className="about-editorial-section" aria-labelledby="story-title">
                <SectionHeading chapter={CHAPTERS[1]} title="A bit of a journey" />
                <h2 id="story-title" className="sr-only">
                    From Vietnam to Canada
                </h2>
                <div className="about-route" aria-label="From Vietnam to Canada">
                    <span>Vietnam</span>
                    <span className="about-route-line" aria-hidden="true" />
                    <span>Canada</span>
                </div>
                <p className="about-story-intro">
                    Vietnam gave me a foundation in computer science. Canada gave me room to explore
                    blockchain—and eventually a broader way of building products.
                </p>
                <div className="about-story-layout">
                    <ol className="about-path">
                        <li>Computer science</li>
                        <li>Blockchain</li>
                        <li>Web3</li>
                        <li>Full-stack / product engineering</li>
                    </ol>
                    <figure className="about-life-photo">
                        <Image
                            src={NightPortrait}
                            fill
                            sizes="(min-width: 768px) 300px, 75vw"
                            className="object-cover"
                            alt="Leo outside at night in Toronto"
                        />
                        <figcaption>Toronto, after dark.</figcaption>
                    </figure>
                </div>
            </section>

            <section id="work" className="about-editorial-section" aria-labelledby="work-title">
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
                <ol className="about-work-list">
                    {EXPERIENCE.map((experience) => (
                        <li
                            className="about-work-row"
                            key={`${experience.company}-${experience.role}`}>
                            <div>
                                <h3>{experience.company}</h3>
                                <p className="about-work-role">{experience.role}</p>
                            </div>
                            <p className="about-work-summary">{experience.summary}</p>
                            <time>{experience.period}</time>
                        </li>
                    ))}
                </ol>
            </section>

            <section
                id="offline"
                className="about-editorial-section"
                aria-labelledby="offline-title">
                <SectionHeading chapter={CHAPTERS[3]} title="When I’m not here" />
                <div className="about-offline-layout">
                    <div>
                        <h2 id="offline-title">
                            I’m usually wandering somewhere with a camera, following the light.
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
        </div>
    );
}

export default AboutStory;

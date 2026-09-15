'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline';
import ProjectCard from './projectCard';
import { dampedDragOffset, shouldDismissDrawer } from '../utils/drawerDismiss.js';

function GalleryArtwork({ project, slide }) {
    const layouts = [
        'grid-cols-[0.7fr_1.3fr]',
        'grid-cols-2',
        'grid-cols-[1.3fr_0.7fr]',
        'grid-cols-3'
    ];

    return (
        <div
            className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${project.accent}`}
            aria-label={`${project.title} placeholder screen ${slide + 1}`}>
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="relative flex h-full gap-3 p-5 sm:gap-5 sm:p-8">
                <div className="hidden w-16 shrink-0 flex-col gap-3 rounded-2xl bg-slate-950/45 p-3 sm:flex">
                    {[0, 1, 2, 3, 4].map((item) => (
                        <span
                            key={item}
                            className={`h-8 rounded-lg ${
                                item === slide ? 'bg-white/80' : 'bg-white/15'
                            }`}
                        />
                    ))}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-5">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-white sm:text-2xl">
                            {project.title}
                        </span>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/80">
                            Screen {slide + 1}
                        </span>
                    </div>
                    <div className={`grid flex-1 gap-3 sm:gap-5 ${layouts[slide]}`}>
                        {Array.from({ length: slide === 3 ? 3 : 2 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/35 p-4">
                                <div className="h-2 w-16 rounded-full bg-white/25" />
                                <div className="mt-4 h-8 w-24 rounded-lg bg-white/75" />
                                <div className="absolute right-3 bottom-4 left-3 flex h-1/2 items-end gap-1.5">
                                    {[35, 58, 42, 72, 55, 84, 68].map((height, bar) => (
                                        <span
                                            key={bar}
                                            className="flex-1 rounded-t bg-white/35"
                                            style={{ height: `${(height + slide * 7) % 90}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectModal({ project, onClose, openerRef }) {
    const [slide, setSlide] = useState(0);
    const dialogRef = useRef(null);
    const startPoint = useRef(null);
    const dragStartTime = useRef(null);
    const currentY = useRef(0);
    const isDragging = useRef(false);
    const slideStart = useRef(null);
    const slideCount = 4;

    const changeSlide = (direction) => {
        setSlide((current) => (current + direction + slideCount) % slideCount);
    };

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialogRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowRight') changeSlide(1);
            if (event.key === 'ArrowLeft') changeSlide(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            openerRef.current?.focus();
        };
    }, [onClose, openerRef]);

    const beginDrag = (event) => {
        if (isDragging.current) return;
        isDragging.current = true;
        startPoint.current = event.clientY;
        dragStartTime.current = Date.now();
        currentY.current = 0;
        event.currentTarget.setPointerCapture(event.pointerId);
        if (dialogRef.current) dialogRef.current.style.transition = 'none';
    };

    const moveDrag = (event) => {
        if (startPoint.current === null || !dialogRef.current) return;
        currentY.current = dampedDragOffset(event.clientY - startPoint.current);
        dialogRef.current.style.transform = `translateY(${currentY.current}px)`;
    };

    const endDrag = () => {
        if (startPoint.current === null) return;
        const elapsedMs = Date.now() - (dragStartTime.current || Date.now());
        if (dialogRef.current) {
            dialogRef.current.style.transition = 'transform 160ms var(--ease-out)';
        }
        if (shouldDismissDrawer({ distance: currentY.current, elapsedMs })) {
            onClose();
        } else if (dialogRef.current) {
            dialogRef.current.style.transform = 'translateY(0px)';
        }
        startPoint.current = null;
        isDragging.current = false;
    };

    const beginSlide = (event) => {
        slideStart.current = event.clientX;
    };

    const endSlide = (event) => {
        if (slideStart.current === null) return;
        const distance = event.clientX - slideStart.current;
        if (Math.abs(distance) > 55) changeSlide(distance < 0 ? 1 : -1);
        slideStart.current = null;
    };

    return createPortal(
        <div className="project-modal-backdrop fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
            <button
                type="button"
                className="absolute inset-0 cursor-default bg-slate-950/60 backdrop-blur-md"
                onClick={onClose}
                aria-label="Close project gallery"
            />
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                tabIndex={-1}
                className="project-modal-panel relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:max-w-5xl sm:rounded-[2rem] dark:bg-surface-dark">
                <div
                    className="flex touch-none justify-center py-3 sm:hidden"
                    onPointerDown={beginDrag}
                    onPointerMove={moveDrag}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    aria-label="Drag down to close">
                    <span className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
                <div className="flex items-center justify-between px-5 pb-4 sm:px-8 sm:pt-7 sm:pb-6">
                    <h2
                        id="project-modal-title"
                        className="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl dark:text-ink-dark">
                        {project.title}
                    </h2>
                    <span className="ui-badge">
                        {slide + 1} / {slideCount}
                    </span>
                </div>
                <div className="px-4 sm:px-8">
                    <div
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video"
                        onPointerDown={beginSlide}
                        onPointerUp={endSlide}>
                        <div className="h-full">
                            <GalleryArtwork project={project} slide={slide} />
                        </div>
                        <button
                            type="button"
                            onClick={() => changeSlide(-1)}
                            className="project-modal-control absolute top-1/2 left-4 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm bg-white/90 text-ink shadow-lg sm:flex"
                            aria-label="Previous slide">
                            <ArrowLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => changeSlide(1)}
                            className="project-modal-control absolute top-1/2 right-4 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm bg-white/90 text-ink shadow-lg sm:flex"
                            aria-label="Next slide">
                            <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="mt-4 hidden grid-cols-4 gap-3 sm:grid">
                        {Array.from({ length: slideCount }).map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => setSlide(index)}
                                className={`project-modal-control aspect-video cursor-pointer overflow-hidden rounded-sm border-2 ${
                                    slide === index
                                        ? 'border-accent opacity-100'
                                        : 'border-transparent opacity-55'
                                }`}
                                aria-label={`Show slide ${index + 1}`}
                                aria-current={slide === index}>
                                <GalleryArtwork project={project} slide={index} />
                            </button>
                        ))}
                    </div>
                    <div className="mt-5 flex gap-2 sm:hidden" aria-label="Gallery progress">
                        {Array.from({ length: slideCount }).map((_, index) => (
                            <span
                                key={index}
                                className={`h-1 flex-1 rounded-full transition-colors ${
                                    slide === index ? 'bg-accent' : 'bg-zinc-200 dark:bg-zinc-700'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="sticky bottom-0 mt-5 grid gap-3 border-t border-line bg-white/95 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur sm:static sm:mt-7 sm:grid-cols-2 sm:px-8 sm:pb-8 dark:border-line-dark dark:bg-surface-dark/95">
                    <a
                        href={project.liveUrl || undefined}
                        aria-disabled={!project.liveUrl}
                        className={`ui-button bg-ink text-white dark:bg-white dark:text-ink ${
                            !project.liveUrl ? 'pointer-events-none' : ''
                        }`}>
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        View Live Project
                    </a>
                    <a
                        href={project.sourceUrl || undefined}
                        aria-disabled={!project.sourceUrl}
                        className={`ui-button ui-button-secondary ${
                            !project.sourceUrl ? 'pointer-events-none' : ''
                        }`}>
                        <CodeBracketIcon className="h-5 w-5" />
                        View Source
                    </a>
                </div>
            </section>
        </div>,
        document.body
    );
}

function ProjectShowcase({ projects, priority = false, className = '' }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const openerRef = useRef(null);

    const openProject = (project, event) => {
        openerRef.current = event.currentTarget;
        setSelectedProject(project);
    };

    return (
        <>
            <div className={className}>
                {projects.map((project) => (
                    <ProjectCard
                        project={project}
                        priority={priority}
                        key={project.slug}
                        onOpen={(event) => openProject(project, event)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    openerRef={openerRef}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}

export default ProjectShowcase;

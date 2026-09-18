'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import {
    ABOUT_REVEAL_INSET_PX,
    aboutSectionIsInView,
    aboutSectionReveal
} from '@/utils/aboutSectionReveal';

function AboutChapterReveal({ children, from = 'top' }) {
    const nodeRef = useRef(null);
    const shownRef = useRef(false);
    const [primed, setPrimed] = useState(false);
    const [inView, setInView] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [alreadyShown, setAlreadyShown] = useState(false);

    useLayoutEffect(() => {
        const node = nodeRef.current;
        if (!node) return undefined;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const already = aboutSectionIsInView(node.getBoundingClientRect(), window.innerHeight);

        if (reduce || already) {
            shownRef.current = true;
            setReduceMotion(reduce);
            setInView(true);
            setAlreadyShown(true);
            setPrimed(true);
            return undefined;
        }

        setPrimed(true);

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                io.disconnect();
            },
            { rootMargin: `-${ABOUT_REVEAL_INSET_PX}px 0px`, threshold: 0 }
        );

        io.observe(node);
        return () => io.disconnect();
    }, []);

    const state = aboutSectionReveal({
        primed,
        inView,
        reduceMotion,
        alreadyShown: alreadyShown || shownRef.current
    });

    return (
        <div ref={nodeRef}>
            <div
                className="about-print"
                data-about-reveal={state}
                data-about-print={from}
                onTransitionEnd={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.propertyName !== 'clip-path') return;
                    shownRef.current = true;
                    setAlreadyShown(true);
                }}>
                {children}
            </div>
        </div>
    );
}

export default AboutChapterReveal;

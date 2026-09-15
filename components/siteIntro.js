'use client';

import { useEffect, useRef } from 'react';
import Logo from './logo';
import { isIntroCurtainFinished, markSiteIntroDone } from '@/utils/siteIntro';

function SiteIntro({ onFinished }) {
    const curtainRef = useRef(null);
    const onFinishedRef = useRef(onFinished);
    onFinishedRef.current = onFinished;

    useEffect(() => {
        const curtain = curtainRef.current;
        const root = document.documentElement;
        if (!curtain) return undefined;

        const onEnd = (event) => {
            if (event.target === curtain && isIntroCurtainFinished(event.animationName)) {
                markSiteIntroDone(root);
                onFinishedRef.current?.();
            }
        };

        curtain.addEventListener('animationend', onEnd);
        return () => curtain.removeEventListener('animationend', onEnd);
    }, []);

    return (
        <div ref={curtainRef} className="site-intro-curtain" aria-hidden="true">
            <Logo size="hero" />
            <span className="site-intro-line" />
        </div>
    );
}

export default SiteIntro;

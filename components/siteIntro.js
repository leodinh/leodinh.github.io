'use client';

import { useEffect, useRef } from 'react';
import Logo from './logo';
import Mascot from './mascot';
import { HOME_MASCOT } from '@/constants/content';
import { introCurtainFadeDelayMs, introLogoExitDelayMs } from '@/utils/mascotLoad';
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
        <div
            ref={curtainRef}
            className="site-intro-curtain"
            aria-hidden="true"
            style={{
                '--intro-fade-delay': `${introCurtainFadeDelayMs()}ms`,
                '--intro-logo-exit-delay': `${introLogoExitDelayMs()}ms`
            }}>
            <div className="site-intro-stage">
                <Mascot
                    className="site-intro-mascot"
                    directions={HOME_MASCOT.directions}
                    reactions={HOME_MASCOT.reactions}
                    size={160}
                    label={HOME_MASCOT.label}
                    greet
                    interactive={false}
                />
                <Logo size="hero" />
            </div>
            <span className="site-intro-line" />
        </div>
    );
}

export default SiteIntro;

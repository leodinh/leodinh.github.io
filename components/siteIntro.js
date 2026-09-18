'use client';

import { useEffect, useReducer } from 'react';
import Logo from './logo';
import Mascot from './mascot';
import { HOME_MASCOT } from '@/constants/content';
import { introLogoExitDelayMs } from '@/utils/mascotLoad';
import { waitForImages } from '@/utils/imageReadiness';
import {
    initialIntroState,
    introReducer,
    introPhaseDuration,
    INTRO_IMAGE_TIMEOUT_MS,
    INTRO_PROGRESS_MS,
    INTRO_FADE_MS,
    markSiteIntroDone
} from '@/utils/siteIntro';

function SiteIntro() {
    const [state, dispatch] = useReducer(introReducer, initialIntroState);

    useEffect(() => {
        let cancelled = false;
        const images = document.querySelectorAll('#site-content img[data-intro-critical]');
        waitForImages(images).then(() => {
            if (!cancelled) dispatch({ type: 'images-ready' });
        });
        const timeout = setTimeout(() => {
            dispatch({
                type: 'timeout',
                reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            });
        }, INTRO_IMAGE_TIMEOUT_MS);
        return () => {
            cancelled = true;
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (state.phase === 'done') {
            markSiteIntroDone(document.documentElement);
            document.getElementById('site-content')?.removeAttribute('inert');
            return undefined;
        }
        const duration = introPhaseDuration({ phase: state.phase });
        if (duration === null) return undefined;
        const timer = setTimeout(() => dispatch({ type: 'elapsed' }), duration);
        return () => clearTimeout(timer);
    }, [state.phase]);

    if (state.phase === 'done') return null;

    return (
        <div
            className="site-intro-curtain"
            data-phase={state.phase}
            aria-hidden="true"
            style={{
                '--intro-showcase-duration': `${introLogoExitDelayMs()}ms`,
                '--intro-progress-duration': `${INTRO_PROGRESS_MS}ms`,
                '--intro-fade-duration': `${INTRO_FADE_MS}ms`
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
                    onGreetingStart={(reducedMotion) =>
                        dispatch({ type: 'greeting-ready', reducedMotion })
                    }
                />
                <Logo size="hero" />
            </div>
            <span className="site-intro-line" />
        </div>
    );
}

export default SiteIntro;

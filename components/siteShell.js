'use client';

import { useEffect, useState } from 'react';
import SiteIntro from './siteIntro';
import { siteShellPhase } from '@/utils/siteIntro';

function SiteShell({ children }) {
    const [introFinished, setIntroFinished] = useState(false);
    const [chromeReady, setChromeReady] = useState(false);

    useEffect(() => {
        if (siteShellPhase(introFinished) === 'intro') {
            setChromeReady(false);
            return undefined;
        }

        const frame = requestAnimationFrame(() => {
            setChromeReady(true);
        });
        return () => cancelAnimationFrame(frame);
    }, [introFinished]);

    if (siteShellPhase(introFinished) === 'intro') {
        return <SiteIntro onFinished={() => setIntroFinished(true)} />;
    }

    return (
        <div className="site-chrome" data-ready={chromeReady ? 'true' : 'false'}>
            {children}
        </div>
    );
}

export default SiteShell;

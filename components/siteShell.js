'use client';

import { useState } from 'react';
import SiteIntro from './siteIntro';
import { siteShellPhase } from '../utils/siteIntro';

function SiteShell({ children }) {
    const [introFinished, setIntroFinished] = useState(false);

    if (siteShellPhase(introFinished) === 'intro') {
        return <SiteIntro onFinished={() => setIntroFinished(true)} />;
    }

    return children;
}

export default SiteShell;

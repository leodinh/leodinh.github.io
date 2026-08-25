'use client';

import { useState } from 'react';
import { ArrowDownRightIcon } from '@heroicons/react/24/outline';
import Experience from './experience';

function ExperienceExplorer() {
    const [experienceOpen, setExperienceOpen] = useState(false);

    return (
        <div className="about-experience-explorer">
            <button
                type="button"
                className="home-hint about-experience-trigger"
                aria-expanded={experienceOpen}
                aria-controls="experience-tree"
                onClick={() => setExperienceOpen((open) => !open)}>
                {experienceOpen ? 'Hide experience path' : 'Explore 5+ years of experience'}
                <ArrowDownRightIcon className="home-hint-icon" aria-hidden="true" />
            </button>

            <div
                id="experience-tree"
                className="disclosure-panel experience-disclosure"
                hidden={!experienceOpen}>
                <Experience revealed={experienceOpen} />
            </div>
        </div>
    );
}

export default ExperienceExplorer;

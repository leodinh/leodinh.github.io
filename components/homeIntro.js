'use client';

import Link from 'next/link';
import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { HOME_MASCOT } from '@/constants/content';
import Mascot from './mascot';

function HomeIntro() {
    return (
        <section className="home-hero-shell" aria-labelledby="home-intro-title">
            <div className="home-lockup">
                <Mascot
                    className="home-mascot"
                    directions={HOME_MASCOT.directions}
                    reactions={HOME_MASCOT.reactions}
                    size={160}
                    label={HOME_MASCOT.label}
                />
                <h1 id="home-intro-title" className="home-title">
                    I like figuring things out.
                </h1>
            </div>
            <p className="home-lede">
                Sometimes that means building a product. Sometimes it means wandering somewhere with
                a camera.
            </p>
            <div className="home-actions">
                <Link href="mailto:leo.atdinh@gmail.com" className="ui-button ui-button-primary">
                    <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                    Get in touch
                </Link>
                <Link href="/cv.pdf" className="ui-text-link">
                    <DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" />
                    Download résumé
                </Link>
            </div>
        </section>
    );
}

export default HomeIntro;

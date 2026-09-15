'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Avatar from '../assets/my-photo-night.jpg';

function HomeIntro() {
    return (
        <section className="home-hero-shell" aria-labelledby="home-intro-title">
            <div className="home-copy">
                <p className="home-kicker">Toronto</p>
                <h1 id="home-intro-title" className="home-title">
                    I like figuring things out.
                </h1>
                <p className="home-lede">
                    Sometimes that means building a product. Sometimes it means wandering somewhere
                    with a camera.
                </p>
                <div className="home-actions">
                    <Link
                        href="mailto:leo.atdinh@gmail.com"
                        className="ui-button ui-button-primary">
                        <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                        Get in touch
                    </Link>
                    <Link href="/cv.pdf" className="ui-text-link">
                        <DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" />
                        Download résumé
                    </Link>
                </div>
            </div>

            <div className="home-portrait-stage">
                <div className="home-portrait-card">
                    <Image
                        src={Avatar}
                        priority
                        sizes="(min-width: 1024px) 224px, 128px"
                        className="home-portrait-image"
                        alt="Leo Tuan Dinh"
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeIntro;

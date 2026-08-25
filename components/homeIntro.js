'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Avatar from '../assets/my-photo-night.jpg';

function HomeIntro() {
    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';

        return () => {
            document.documentElement.style.removeProperty('overflow-y');
            document.body.style.removeProperty('overflow-y');
        };
    }, []);

    return (
        <>
            <section className="home-hero-shell" aria-labelledby="home-intro-title">
                <div className="home-aurora" aria-hidden="true" />
                <span className="home-particle home-particle-one" aria-hidden="true" />
                <span className="home-particle home-particle-two" aria-hidden="true" />
                <span className="home-particle home-particle-three" aria-hidden="true" />

                <div className="home-copy">
                    <p className="home-kicker">
                        <span className="home-status" aria-hidden="true" />
                        Toronto · Working worldwide
                    </p>
                    <h1 id="home-intro-title" className="home-title">
                        Hey, I’m Leo. I build things for the web with code, curiosity, and a little
                        creativity.
                    </h1>
                    <div className="home-actions">
                        <Link
                            href="mailto:leo.atdinh@gmail.com"
                            className="ui-button ui-button-primary">
                            <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                            Get in touch
                        </Link>
                        <Link href="/cv.pdf" className="ui-button ui-button-secondary">
                            <DocumentArrowDownIcon className="h-4 w-4" aria-hidden="true" />
                            Download résumé
                        </Link>
                    </div>
                </div>

                <div className="home-portrait-stage" aria-label="Leo's technology stack">
                    <div className="home-orbit" aria-hidden="true" />
                    <span className="home-tech home-tech-one">Next.js</span>
                    <span className="home-tech home-tech-two">Web3</span>
                    <span className="home-tech home-tech-three">NestJS</span>
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
        </>
    );
}

export default HomeIntro;

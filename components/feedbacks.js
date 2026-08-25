'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Feedback from './feedback';

const recommendation = {
    name: 'Dhruvin Parikh',
    relate: 'CTO at OptyFi',
    feedback:
        'Leo is a highly skilled full-stack blockchain developer who consistently delivers excellent results. He is a valuable asset to any team seeking expertise across front-end, back-end, and on-chain business logic.'
};

function Feedbacks() {
    const [recommendationOpen, setRecommendationOpen] = useState(false);

    return (
        <section className="section-shell" aria-labelledby="recommendations-title">
            <span className="ui-badge mb-4">Recommendations</span>
            <h2 id="recommendations-title">
                <button
                    type="button"
                    className="recommendation-trigger section-title"
                    aria-expanded={recommendationOpen}
                    aria-controls="featured-recommendation"
                    onClick={() => setRecommendationOpen((open) => !open)}>
                    <span>Curious what it’s like to work with me?</span>
                    <ArrowDownRightIcon
                        className="recommendation-trigger-icon"
                        aria-hidden="true"
                    />
                </button>
            </h2>

            <div
                id="featured-recommendation"
                className="disclosure-panel"
                hidden={!recommendationOpen}>
                <div className="recommendation-content">
                    <Feedback {...recommendation} />
                    <Link
                        href="https://www.linkedin.com/in/leotuandinh/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong">
                        See more recommendations on LinkedIn
                        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Feedbacks;

'use client';
import { useRef } from 'react';
import Feedback from './feedback';
import { useIsVisible } from '../hooks/useIsVisible';
import { boldText, marginSection } from '../constants/styling';
function feedbacks() {
    const ref1 = useRef();
    const isVisible = useIsVisible(ref1);
    const animation = !isVisible
        ? 'opacity-0'
        : 'opacity-100 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out';
    return (
        <div className={`flex flex-col ${marginSection}`}>
            <h1 className={`${boldText} text-xl ${animation}`}>
                What people I have worked with have to say about me
            </h1>
            <p
                className={`text-xs text-(--text-dark-color) dark:text-(--text-light-color) ${animation} animate-delay-100`}>
                (Those are collected in Linkedin recommendations)
            </p>
            <div
                ref={ref1}
                className={`grid  grid-cols-1 lg:grid-cols-[_1fr_1fr] gap-5 mt-5 ${animation} animate-delay-500`}>
                <div className="flex flex-col gap-5">
                    <Feedback
                        name="Dhruvin Parikh"
                        relate="CTO @Opty.fi"
                        feedback="Leo is a highly skilled full stack blockchain developer who consistently delivers excellent results when given clear instructions. They are a valuable asset to any team seeking top-notch expertise and high productivity in developing front-end, back-end, and on-chain business logic for blockchain applications."
                    />
                    <Feedback
                        name="Deepanshu Gupta"
                        relate="Co-worker @Opty.fi"
                        feedback="I highly recommend Leo as a Front-end Blockchain developer. He has a deep understanding of blockchain technology as well as has demonstrated strong skills in building multiple websites. In addition to this, he is good at picking up any new technology in a short period of time and delivers high-quality work.
He is a reliable and proactive team member, always delivering high-quality work and contributing valuable insights to our projects.
His expertise and dedication make him a valuable asset to any team."
                    />
                </div>
                <div>
                    <Feedback
                        name="Nima Ghazanfari"
                        relate="Co-worker @Opty.fi"
                        feedback="During my time at OptyFi, I had the pleasure of working alongside Leo, a highly talented full-stack and blockchain developer. With a strong programming background, he consistently delivers valuable solutions for various challenges. Leo is an active contributor to the team's success, making him an invaluable asset to any project. His commitment to excellence and willingness to assist others make him a remarkable colleague. I wholeheartedly recommend Leo for any programming-related role in your company."
                    />
                </div>
            </div>
        </div>
    );
}

export default feedbacks;

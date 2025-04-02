'use client';
import { useRef } from 'react';
import { marginSection, titleText } from '../constants/styling';
import { BACK_END, FRONT_END, OTHERS } from '../constants/tech';
import { InfiniteLoopSlider, Tag } from './infiniteLoopSlider';
import { useIsVisible } from '../hooks/useIsVisible';

function techStack() {
    const ref1 = useRef();
    const isVisible = useIsVisible(ref1);
    const animation = !isVisible
        ? 'opacity-0'
        : 'opacity-100 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out';

    return (
        <div className={`${animation} flex flex-col items-center ${marginSection}`} ref={ref1}>
            <h1 className={`${titleText}`}>Tech Stack</h1>
            <div className="relative w-full lg:w-auto max-w-200 flex flex-col items-center justify-center gap-1 p-1 overflow-hidden mt-5 mb-5 lg:mt-20 lg:mb-20">
                <InfiniteLoopSlider duration="14427">
                    {FRONT_END.map((tag) => (
                        <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
                <InfiniteLoopSlider duration="14661" reverse>
                    {BACK_END.map((tag) => (
                        <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
                <InfiniteLoopSlider duration="14525">
                    {OTHERS.map((tag) => (
                        <Tag text={tag} key={tag} />
                    ))}
                </InfiniteLoopSlider>
                <div className="fade" />
            </div>
        </div>
    );
}

export default techStack;

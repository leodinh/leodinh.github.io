'use client';

import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

function footer() {
    const titleText = 'text-black dark:text-white bold mb-5';
    const ref1 = useRef();
    const isVisible = useIsVisible(ref1);
    return (
        <div
            className={`${
                isVisible
                    ? 'opacity-100 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out'
                    : 'opacity-0'
            } flex flex-col items-center mb-5 w-full pr-5 pl-5 lg:pr-0 lg:pl-0`}
            ref={ref1}>
            <h1 className={`${titleText} self-start`}>Find me on</h1>
            <div className="flex flex-col lg:flex-row items-start justify-between w-full">
                <ul className="text-(--text-dark-color) dark:text-(--text-light-color)">
                    <li className="hover:text-(--text-color)">
                        <Link href="https://www.linkedin.com/in/leotuandinh/">Linkedin</Link>
                    </li>
                    <li className="hover:text-(--text-color)">
                        <Link href="https://github.com/leodinh">Github</Link>
                    </li>
                    <li className="hover:text-(--text-color)">
                        <Link href="https://x.com/dinh_leo57974">X</Link>
                    </li>
                </ul>
                <div className="text-(--text-dark-color) dark:text-(--text-light-color)">
                    <div className="text-sm p-[5px] rounded-lg bg-(--background-light-secondary) dark:bg-(--background-secondary) mt-5 mb-5 lg:mt-0 lg:mb-0">
                        <i className="pulse green"></i> Open for freelance
                    </div>
                    <div className="text-sm">My email</div>
                    <div className="flex">
                        <EnvelopeIcon className="w-4 mr-1" /> leo.atdinh@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;

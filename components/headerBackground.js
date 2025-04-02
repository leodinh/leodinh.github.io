'use client';
import { useState, useEffect } from 'react';
function headerBackground() {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);
    return (
        <div className="absolute inset-0 -z-[1]">
            <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white backdrop-blur-lg transition-all ${
                    header
                        ? 'w-screen rounded-none h-14 drop-shadow-none border-b dark:bg-[#1212125c]'
                        : 'border border-(--border-color) rounded-full h-full w-full dark:bg-gray-950'
                }`}
            />
        </div>
    );
}

export default headerBackground;

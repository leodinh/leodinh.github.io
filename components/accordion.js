'use client';
import { useState } from 'react';
function AccordionExperience({ roleType, company, date, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full px-2 py-5 font-medium rtl:text-right text-(--text-dark-color) border-b border-(--border-color) dark:text-(--text-light-color) gap-3 cursor-pointer ${
                        isOpen &&
                        'bg-(--background-light-secondary) dark:bg-(--background-secondary) border-none rounded-md'
                    } transition-all`}
                    aria-controls="accordion-flush-body-1"
                    onClick={() => setIsOpen((prev) => !prev)}>
                    <div className="text-start">
                        {roleType} - {company}
                    </div>
                    <div className="flex items-center">
                        <div className="mr-5 hidden lg:block">{date}</div>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 ${isOpen ? 'rotate-0' : 'rotate-180'} shrink-0`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </div>
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} animate-ease-in-out`}>
                <div className="py-5 border-b border-(--border-color)">
                    <p className="mb-2 text-(--text-dark-color) dark:text-(--text-light-color)">
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
}

export default AccordionExperience;

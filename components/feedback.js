'use client';
import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

function feedback({ name, relate, feedback }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="flex flex-col w-full p-5 border border-(--border-color) rounded-md cursor-pointer transition-all duration-1000"
            onClick={() => setOpen(!open)}
            aria-hidden="true">
            <div className="flex justify-between items-center">
                <div>
                    <span>
                        {name} <br />
                    </span>
                    <span className="text-xs border rounded-xl bg-(--background-light-secondary) dark:bg-(--background-secondary) text-black dark:text-white px-1 py-2">
                        {relate}
                    </span>
                </div>
                <div className="w-5">{open ? <MinusIcon /> : <PlusIcon />}</div>
            </div>
            {open && (
                <div className="text-(--text-dark-color) dark:text-(--text-light-color) mt-5 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out">
                    {feedback}
                </div>
            )}
        </div>
    );
}

export default feedback;

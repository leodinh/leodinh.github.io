'use client';

import { useReducer } from 'react';
import { STACK, STACK_WORK, STACK_COPY } from '@/utils/aboutPage';
import { activeStackWork, getWorkSkills, stackInteraction } from '@/utils/stackInteraction';
import { INK, MUTED } from './aboutUi';

function InteractiveStack() {
    const [state, dispatch] = useReducer(stackInteraction, {});
    const active = activeStackWork(state);
    const skills = getWorkSkills(active);

    return (
        <>
            <ul
                className="mt-8 flex list-none flex-wrap gap-x-5 gap-y-6 p-0"
                aria-label="My technology stack">
                {STACK.map(([id, name]) => (
                    <li
                        key={id}
                        className={`flex min-w-16 flex-col items-center gap-3 ${INK}`}
                        data-active={skills.includes(id)}>
                        <span
                            className={`block transition duration-200 ease-out motion-reduce:transition-none ${
                                skills.includes(id)
                                    ? 'opacity-100 stack-aura'
                                    : 'opacity-50 drop-shadow-none'
                            }`}
                            aria-hidden="true">
                            <svg
                                className="block size-8 fill-current"
                                viewBox="0 0 24 24"
                                focusable="false">
                                <use href={`/icons/stack/sprite.svg#${id}`} />
                            </svg>
                        </span>
                        <span className={`text-meta ${MUTED}`}>{name}</span>
                    </li>
                ))}
            </ul>
            <p className={`mt-6 max-w-2xl text-title leading-normal ${MUTED}`}>
                {STACK_COPY.intro}{' '}
                {STACK_WORK.map((work, index) => (
                    <span key={work.label} className="inline-block whitespace-nowrap">
                        {index === 2 ? 'and ' : ''}
                        <button
                            type="button"
                            className={`min-h-11 cursor-pointer rounded-sm text-left underline decoration-1 underline-offset-4 transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none ${INK} ${
                                active === work.id
                                    ? 'decoration-current'
                                    : 'decoration-ink/30 dark:decoration-ink-dark/30'
                            }`}
                            data-active={active === work.id}
                            aria-pressed={state.selected === work.id}
                            aria-describedby={`stack-work-${index}`}
                            onPointerEnter={(event) => {
                                if (event.pointerType !== 'touch')
                                    dispatch({ type: 'hover', id: work.id });
                            }}
                            onPointerLeave={() => dispatch({ type: 'hover', id: null })}
                            onFocus={(event) => {
                                if (event.currentTarget.matches(':focus-visible'))
                                    dispatch({ type: 'focus', id: work.id });
                            }}
                            onBlur={() => dispatch({ type: 'blur' })}
                            onClick={() => dispatch({ type: 'toggle', id: work.id })}>
                            {work.label}
                        </button>
                        {index < STACK_WORK.length - 1 ? ', ' : '.'}
                    </span>
                ))}{' '}
                {STACK_COPY.ending}
            </p>
            {STACK_WORK.map((work, index) => (
                <span key={work.label} id={`stack-work-${index}`} className="sr-only">
                    Uses{' '}
                    {STACK.filter(([id]) => work.skills.includes(id))
                        .map(([, name]) => name)
                        .join(', ')}
                    .
                </span>
            ))}
        </>
    );
}

export default InteractiveStack;

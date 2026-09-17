'use client';

import { useEffect, useRef, useState } from 'react';
import { MASCOT_LOAD_BEATS } from '@/utils/mascotLoad';

const DIRECTIONS = [
    'up-left',
    'up',
    'up-right',
    'left',
    'center',
    'right',
    'down-left',
    'down',
    'down-right'
];

const REACTIONS = [
    'blink',
    'heart',
    'sparkle',
    'surprised',
    'wink',
    'bashful',
    'sleepy',
    'dizzy',
    'delighted'
];

const CLOCKWISE = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right'];
const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;

const PAYOFFS = ['heart', 'sparkle', 'delighted'];
const BOOP_PAYOFF = 120;
const BOOP_END = 560;
const SQUASH_MS = 420;
const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1600;
const DIZZY_END = 1100;

const SQUASH = [
    { transform: 'scale(1, 1)', easing: 'ease-in' },
    { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
    { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
    { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
    { transform: 'scale(1, 1)' }
];

function cell(index) {
    return { backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%` };
}

function wrap(angle) {
    return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function waitForSheet(src) {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
        if (image.complete) {
            resolve();
        }
    });
}

const layer = {
    position: 'absolute',
    inset: 0,
    backgroundSize: '300% 300%',
    backgroundRepeat: 'no-repeat'
};

function Mascot({
    directions,
    reactions,
    size = 140,
    className,
    label = 'mascot',
    greet = false,
    interactive = true
}) {
    const buttonRef = useRef(null);
    const squashRef = useRef(null);
    const timersRef = useRef([]);
    const boopsRef = useRef({ count: 0, at: 0 });
    const greetingRef = useRef(greet);
    const [direction, setDirection] = useState('center');
    const [reaction, setReaction] = useState(null);

    useEffect(() => {
        if (!greet) {
            greetingRef.current = false;
            return undefined;
        }

        let cancelled = false;
        greetingRef.current = true;

        const later = (ms, next) => {
            timersRef.current.push(window.setTimeout(next, ms));
        };

        (async () => {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            await Promise.all([waitForSheet(directions), waitForSheet(reactions)]);

            if (cancelled || reduceMotion || !greetingRef.current) {
                greetingRef.current = false;
                return;
            }

            MASCOT_LOAD_BEATS.forEach((beat) => {
                later(beat.at, () => {
                    if (cancelled || !greetingRef.current) {
                        return;
                    }

                    setDirection(beat.direction);
                    setReaction(beat.reaction);

                    if (beat.at === MASCOT_LOAD_BEATS[MASCOT_LOAD_BEATS.length - 1].at) {
                        greetingRef.current = false;
                    }
                });
            });
        })();

        return () => {
            cancelled = true;
            greetingRef.current = false;
        };
    }, [directions, greet, reactions]);

    useEffect(() => {
        if (!interactive || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return undefined;
        }

        let sector = -1;
        let pointer = null;

        const aim = () => {
            const button = buttonRef.current;
            if (!button || !pointer || greetingRef.current) {
                return;
            }

            const box = button.getBoundingClientRect();
            const dx = pointer.x - (box.left + box.width / 2);
            const dy = pointer.y - (box.top + box.height / 2);

            if (Math.hypot(dx, dy) < DEAD_ZONE) {
                sector = -1;
                setDirection('center');
                return;
            }

            const angle = Math.atan2(dy, dx);
            if (
                sector !== -1 &&
                Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS
            ) {
                return;
            }

            sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
            setDirection(CLOCKWISE[sector]);
        };

        const onPointerMove = (event) => {
            pointer = { x: event.clientX, y: event.clientY };
            aim();
        };

        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('scroll', aim, { passive: true });

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('scroll', aim);
        };
    }, [interactive]);

    useEffect(() => {
        return () => {
            timersRef.current.forEach(window.clearTimeout);
        };
    }, []);

    const boop = () => {
        greetingRef.current = false;
        timersRef.current.forEach(window.clearTimeout);
        timersRef.current = [];

        const later = (ms, next) => {
            timersRef.current.push(window.setTimeout(() => setReaction(next), ms));
        };

        const now = Date.now();
        const boops = boopsRef.current;
        boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1;
        boops.at = now;

        if (boops.count >= DIZZY_AFTER) {
            boops.count = 0;
            setReaction('dizzy');
            later(DIZZY_END, null);
        } else {
            setReaction('blink');
            later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length]);
            later(BOOP_END, null);
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        squashRef.current?.animate(SQUASH, { duration: SQUASH_MS, easing: 'linear' });
    };

    const frame = (
        <span
            ref={squashRef}
            style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: '100%',
                transformOrigin: '50% 78%'
            }}>
            <span
                style={{
                    ...layer,
                    backgroundImage: `url(${directions})`,
                    ...cell(DIRECTIONS.indexOf(direction)),
                    opacity: reaction ? 0 : 1
                }}
            />
            <span
                style={{
                    ...layer,
                    backgroundImage: `url(${reactions})`,
                    ...cell(REACTIONS.indexOf(reaction ?? 'blink')),
                    opacity: reaction ? 1 : 0
                }}
            />
        </span>
    );

    const box = {
        position: 'relative',
        display: 'block',
        flexShrink: 0,
        width: size,
        height: size,
        padding: 0,
        border: 0,
        background: 'transparent',
        appearance: 'none',
        userSelect: 'none'
    };

    if (!interactive) {
        return (
            <span ref={buttonRef} className={className} style={box} aria-hidden="true">
                {frame}
            </span>
        );
    }

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={boop}
            aria-label={`Boop the ${label}`}
            className={className}
            style={{ ...box, cursor: 'pointer' }}>
            {frame}
        </button>
    );
}

export default Mascot;

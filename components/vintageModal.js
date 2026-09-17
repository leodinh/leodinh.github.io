'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import {
    pointerVelocity,
    sheetDragY,
    sheetHasLeftView,
    sheetOffscreenY,
    sheetSettle,
    springParams,
    springSettled,
    stepSpring
} from '@/utils/sheetPhysics';
import { lockPageScroll, scrollbarGap, unlockPageScroll } from '@/utils/lockPageScroll';

function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function VintageModal({
    open,
    onClose,
    eyebrow,
    title,
    children,
    bottomSheet = false,
    id,
    className = ''
}) {
    const generatedTitleId = useId();
    const titleId = id ? `${id}-title` : generatedTitleId;
    const panelRef = useRef(null);
    const onCloseRef = useRef(onClose);
    const yRef = useRef(0);
    const velocityRef = useRef(0);
    const frameRef = useRef(0);
    const dragRef = useRef(null);
    const closingRef = useRef(false);
    const enteredRef = useRef(false);
    const exitingRef = useRef(false);
    const openedAtRef = useRef(0);
    const [shown, setShown] = useState(false);
    const [exiting, setExiting] = useState(false);

    onCloseRef.current = onClose;

    const stopSpring = () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
    };

    const setY = (y) => {
        yRef.current = y;
        if (panelRef.current) panelRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const animateTo = (target, { bounce = false, velocity, onRest, conceal = false } = {}) => {
        stopSpring();
        if (reducedMotion()) {
            setY(target);
            velocityRef.current = 0;
            onRest?.();
            return;
        }

        let position = yRef.current;
        let v = velocity ?? velocityRef.current;
        const params = springParams({ bounce, response: bounce ? 0.3 : 0.35 });
        let last = performance.now();

        const finish = () => {
            velocityRef.current = 0;
            frameRef.current = 0;
            onRest?.();
        };

        const tick = (now) => {
            const dt = Math.min(0.032, (now - last) / 1000);
            last = now;
            ({ position, velocity: v } = stepSpring(position, v, target, dt, params));
            velocityRef.current = v;
            setY(position);
            if (conceal && sheetHasLeftView({ y: position, offscreenY: target })) {
                finish();
                return;
            }
            if (springSettled(position, v, target)) {
                setY(target);
                finish();
                return;
            }
            frameRef.current = requestAnimationFrame(tick);
        };

        frameRef.current = requestAnimationFrame(tick);
    };

    const hideShell = () => {
        exitingRef.current = false;
        closingRef.current = false;
        enteredRef.current = false;
        setExiting(false);
        setShown(false);
    };

    const finishClose = () => {
        enteredRef.current = false;
        if (reducedMotion()) {
            onCloseRef.current();
            hideShell();
            return;
        }
        exitingRef.current = true;
        setExiting(true);
        onCloseRef.current();
    };

    const dismissY = () => {
        const panel = panelRef.current;
        if (!panel) return window.innerHeight;
        const restTop = panel.getBoundingClientRect().top - yRef.current;
        return sheetOffscreenY({ viewportHeight: window.innerHeight, restTop });
    };

    const dismiss = () => {
        if (!shown || closingRef.current) return;
        closingRef.current = true;
        animateTo(dismissY(), {
            bounce: false,
            velocity: velocityRef.current,
            conceal: true,
            onRest: finishClose
        });
    };

    useLayoutEffect(() => {
        if (open) {
            exitingRef.current = false;
            setExiting(false);
            setShown(true);
        }
    }, [open]);

    useLayoutEffect(() => {
        const panel = panelRef.current;
        if (!shown || !panel) return undefined;

        if (open && !enteredRef.current) {
            enteredRef.current = true;
            closingRef.current = false;
            openedAtRef.current = performance.now();
            const offscreen = dismissY();
            if (reducedMotion()) setY(0);
            else {
                setY(offscreen);
                animateTo(0, { bounce: false, velocity: 0 });
            }
            panel.focus();
        }

        if (!open && enteredRef.current && !closingRef.current) {
            closingRef.current = true;
            animateTo(dismissY(), {
                bounce: false,
                velocity: 0,
                conceal: true,
                onRest: () => {
                    enteredRef.current = false;
                    if (reducedMotion()) {
                        hideShell();
                        return;
                    }
                    exitingRef.current = true;
                    setExiting(true);
                }
            });
        }
        return undefined;
    }, [open, shown]);

    useLayoutEffect(() => {
        if (!shown) return undefined;
        const html = document.documentElement;
        const previous = lockPageScroll(
            document.body,
            html,
            scrollbarGap(window.innerWidth, html.clientWidth)
        );
        const onKey = (event) => {
            if (event.key === 'Escape') dismiss();
        };
        window.addEventListener('keydown', onKey);
        return () => {
            unlockPageScroll(document.body, html, previous);
            window.removeEventListener('keydown', onKey);
        };
    }, [shown]);

    useEffect(() => {
        if (!exiting) return undefined;
        const id = window.setTimeout(hideShell, 400);
        return () => window.clearTimeout(id);
    }, [exiting]);

    useEffect(() => () => stopSpring(), []);

    const onPointerDown = (event) => {
        if (event.button !== 0 || reducedMotion()) return;
        if (event.target.closest('a, button, input, textarea, select')) return;
        stopSpring();
        closingRef.current = false;
        dragRef.current = {
            pointerId: event.pointerId,
            startY: event.clientY,
            originY: yRef.current,
            grabbing: false,
            samples: [{ y: event.clientY, t: event.timeStamp }]
        };
    };

    const onPointerMove = (event) => {
        const drag = dragRef.current;
        if (!drag || event.pointerId !== drag.pointerId) return;
        const panel = panelRef.current;
        const dy = event.clientY - drag.startY;
        if (!drag.grabbing) {
            if (Math.abs(dy) < 10) return;
            if (dy < 0 && panel.scrollTop > 0) {
                dragRef.current = null;
                return;
            }
            drag.grabbing = true;
            panel.setPointerCapture(event.pointerId);
            panel.classList.add('is-dragging');
        }
        drag.samples.push({ y: event.clientY, t: event.timeStamp });
        if (drag.samples.length > 6) drag.samples.shift();
        setY(sheetDragY({ deltaY: drag.originY + dy, height: dismissY() }));
    };

    const onPointerUp = (event) => {
        const drag = dragRef.current;
        if (!drag || event.pointerId !== drag.pointerId) return;
        const panel = panelRef.current;
        panel.classList.remove('is-dragging');
        dragRef.current = null;
        if (!drag.grabbing) return;
        const velocity = pointerVelocity(drag.samples);
        velocityRef.current = velocity;
        const height = dismissY();
        if (sheetSettle({ y: yRef.current, velocity, height }) === 'close') {
            dismiss();
            return;
        }
        animateTo(0, { bounce: Math.abs(velocity) >= 500, velocity });
    };

    return (
        <div
            className={`vintage-modal ${shown ? 'is-visible' : ''} ${
                shown && !exiting ? 'is-open' : ''
            } ${bottomSheet ? 'is-bottom-sheet' : ''}`}
            id={id}
            hidden={!shown}
            aria-hidden={!shown || exiting}
            inert={!shown || exiting}>
            <button
                type="button"
                className="vintage-modal-backdrop"
                onPointerDown={(event) => {
                    if (event.button !== 0) return;
                    if (performance.now() - openedAtRef.current < 50) return;
                    dismiss();
                }}
                onTransitionEnd={(event) => {
                    if (event.propertyName !== 'opacity' || !exitingRef.current) return;
                    hideShell();
                }}
                aria-label={`Close ${title || eyebrow || 'dialog'}`}
                tabIndex={shown ? 0 : -1}
            />
            <section
                ref={panelRef}
                className={`vintage-modal-panel ${className}`}
                role="dialog"
                aria-modal="true"
                tabIndex={-1}
                aria-labelledby={title ? titleId : undefined}
                aria-label={title ? undefined : eyebrow || 'Dialog'}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}>
                <div className="vintage-modal-topline">
                    <span>{eyebrow}</span>
                    <button type="button" onClick={dismiss} tabIndex={shown ? 0 : -1}>
                        Close ×
                    </button>
                </div>
                {title ? <h2 id={titleId}>{title}</h2> : null}
                {children}
            </section>
        </div>
    );
}

export default VintageModal;

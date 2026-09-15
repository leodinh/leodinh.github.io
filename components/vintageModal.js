'use client';

import { useId } from 'react';

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

    return (
        <div
            className={`vintage-modal ${open ? 'is-open' : ''} ${
                bottomSheet ? 'is-bottom-sheet' : ''
            }`}
            id={id}
            aria-hidden={!open}
            inert={!open}>
            <button
                type="button"
                className="vintage-modal-backdrop"
                onClick={onClose}
                aria-label={`Close ${title || eyebrow || 'dialog'}`}
                tabIndex={open ? 0 : -1}
            />
            <section
                className={`vintage-modal-panel ${className}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleId : undefined}
                aria-label={title ? undefined : eyebrow || 'Dialog'}>
                <div className="vintage-modal-topline">
                    <span>{eyebrow}</span>
                    <button type="button" onClick={onClose} tabIndex={open ? 0 : -1}>
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

'use client';

function VintageModal({ open, onClose, eyebrow, title, children, bottomSheet = false, id }) {
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
                aria-label={`Close ${title || 'dialog'}`}
                tabIndex={open ? 0 : -1}
            />
            <section
                className="vintage-modal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="vintage-modal-title">
                <div className="vintage-modal-topline">
                    <span>{eyebrow}</span>
                    <button type="button" onClick={onClose} tabIndex={open ? 0 : -1}>
                        Close ×
                    </button>
                </div>
                {title ? <h2 id="vintage-modal-title">{title}</h2> : null}
                {children}
            </section>
        </div>
    );
}

export default VintageModal;

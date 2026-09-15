'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { PHOTOGRAPHS } from '../constants/photography';
import VintageModal from './vintageModal';

function PhotographyGallery() {
    const [selected, setSelected] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    const [viewerLoaded, setViewerLoaded] = useState(false);

    useEffect(() => {
        setViewerLoaded(false);
    }, [selected]);

    useEffect(() => {
        if (!selected) return undefined;
        const close = (event) => event.key === 'Escape' && setSelected(null);
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', close);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', close);
        };
    }, [selected]);

    return (
        <>
            <div className="photography-grid">
                {PHOTOGRAPHS.map((photo, index) => (
                    <button
                        type="button"
                        className={`photography-tile photography-tile-${photo.span} ${
                            loadedImages.includes(photo.file) ? 'is-loaded' : ''
                        }`}
                        style={{ '--tile-index': Math.min(index, 12) }}
                        key={photo.file}
                        onClick={() => setSelected({ ...photo, index })}>
                        <Image
                            src={`/images/optimized/${photo.file}`}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 768px) 33vw, 50vw"
                            className="object-cover"
                            onLoad={() =>
                                setLoadedImages((current) =>
                                    current.includes(photo.file)
                                        ? current
                                        : [...current, photo.file]
                                )
                            }
                        />
                        <span>{photo.caption}</span>
                    </button>
                ))}
            </div>

            {selected ? (
                <VintageModal
                    open
                    onClose={() => setSelected(null)}
                    eyebrow={`PHOTO LOG // ${String(selected.index + 1).padStart(2, '0')}`}
                    title={selected.caption}
                    bottomSheet
                    className="vintage-modal-panel-wide">
                    <figure className="photography-viewer-figure">
                        <div
                            className={`photography-viewer-image-frame is-${selected.span} ${
                                viewerLoaded ? 'is-loaded' : ''
                            }`}
                            aria-label={selected.alt}>
                            <Image
                                src={`/images/optimized/${selected.file}`}
                                alt={selected.alt}
                                fill
                                sizes="(min-width: 768px) 80vw, 100vw"
                                className="photography-viewer-image"
                                onLoad={() => setViewerLoaded(true)}
                            />
                        </div>
                        <figcaption>
                            <span className="photography-viewer-actions">
                                <a
                                    href={`/images/optimized/${selected.file}`}
                                    download={selected.file}
                                    onClick={(event) => event.stopPropagation()}>
                                    Download <ArrowDownTrayIcon aria-hidden="true" />
                                </a>
                            </span>
                        </figcaption>
                    </figure>
                </VintageModal>
            ) : null}
        </>
    );
}

export default PhotographyGallery;

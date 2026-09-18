'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { PHOTOGRAPHS } from '@/constants/photography';
import { photoViewerTitle } from '@/utils/photoViewer';
import VintageModal from '@/components/vintageModal';

function PhotographyGallery() {
    const [selected, setSelected] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    const [viewerLoaded, setViewerLoaded] = useState(false);

    useEffect(() => {
        setViewerLoaded(false);
    }, [selected]);

    return (
        <>
            <div className="grid auto-rows-32 grid-flow-dense grid-cols-2 gap-2 md:auto-rows-44 md:grid-cols-3 md:gap-3 photo:grid-cols-4">
                {PHOTOGRAPHS.map((photo, index) => (
                    <button
                        type="button"
                        className={`photography-tile group relative min-h-32 cursor-zoom-in overflow-hidden rounded-lg text-left transition-transform duration-160 ease-out active:scale-press md:min-h-44 ${
                            photo.span === 'wide'
                                ? 'col-span-2'
                                : photo.span === 'tall'
                                ? 'row-span-2'
                                : 'col-span-1'
                        } ${loadedImages.includes(photo.file) ? 'is-loaded' : ''}`}
                        style={{ '--tile-index': Math.min(index, 12) }}
                        key={photo.file}
                        onClick={() => setSelected({ ...photo, index })}>
                        <Image
                            src={`/images/optimized/${photo.file}`}
                            alt={photo.alt}
                            fill
                            priority={index < 3}
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
                        <span className="absolute right-4 bottom-3.5 left-4 z-10 text-meta text-white">
                            {photo.caption}
                        </span>
                    </button>
                ))}
            </div>

            <VintageModal
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
                title={photoViewerTitle(selected)}
                bottomSheet
                className="vintage-modal-panel-wide max-h-photo-panel w-full max-w-photo overflow-hidden max-md:max-h-photo-panel-sm">
                {selected ? (
                    <figure className="relative w-full p-0 font-[family-name:var(--font-body),system-ui,sans-serif] text-ink dark:text-ink-dark">
                        <div
                            className={`photography-viewer-image-frame relative mx-auto w-full max-h-photo-frame overflow-hidden max-md:max-h-photo-frame-sm ${
                                selected.span === 'tall'
                                    ? 'aspect-[2/3] h-photo-tall w-auto max-w-full max-md:h-photo-tall-sm'
                                    : selected.span === 'wide'
                                    ? 'aspect-[3/2]'
                                    : 'aspect-square w-full max-w-4xl'
                            } ${viewerLoaded ? 'is-loaded' : ''}`}
                            aria-label={selected.alt}>
                            <Image
                                src={`/images/optimized/${selected.file}`}
                                alt={selected.alt}
                                fill
                                sizes="(min-width: 768px) 80vw, 100vw"
                                className="photography-viewer-image object-contain"
                                onLoad={() => setViewerLoaded(true)}
                            />
                        </div>
                        <figcaption className="relative z-10 mt-3 flex items-center justify-between gap-4 text-meta text-muted max-md:flex-col max-md:items-start dark:text-muted-dark">
                            <span className="inline-flex items-center gap-4">
                                <a
                                    href={`/images/optimized/${selected.file}`}
                                    download={selected.file}
                                    className="inline-flex cursor-pointer items-center gap-1.5 text-ink transition-[color,transform] duration-160 ease-out hover:text-accent active:scale-press dark:text-ink-dark"
                                    onClick={(event) => event.stopPropagation()}>
                                    Download{' '}
                                    <ArrowDownTrayIcon className="size-4" aria-hidden="true" />
                                </a>
                            </span>
                        </figcaption>
                    </figure>
                ) : null}
            </VintageModal>
        </>
    );
}

export default PhotographyGallery;

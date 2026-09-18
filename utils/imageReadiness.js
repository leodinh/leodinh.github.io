export function waitForImages(images) {
    return Promise.allSettled(Array.from(images, (image) => image.decode()));
}

export function waitForImageSource(src) {
    const image = new Image();
    image.src = src;
    return waitForImages([image]);
}

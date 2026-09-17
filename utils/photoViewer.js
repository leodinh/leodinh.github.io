export function photoViewerTitle(photo) {
    return photo?.caption || photo?.alt || 'Photograph';
}

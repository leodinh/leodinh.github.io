const DISTANCE_THRESHOLD = 110;
const VELOCITY_THRESHOLD = 0.11;
const OPPOSING_FRICTION = 180;

export function shouldDismissDrawer({
    distance,
    elapsedMs,
    threshold = DISTANCE_THRESHOLD,
    velocityThreshold = VELOCITY_THRESHOLD
}) {
    const absDistance = Math.abs(distance);
    if (absDistance >= threshold) return true;
    if (elapsedMs <= 0) return false;
    return absDistance / elapsedMs > velocityThreshold;
}

export function dampedDragOffset(deltaY, friction = OPPOSING_FRICTION) {
    if (deltaY >= 0) return deltaY;
    return deltaY / (1 + Math.abs(deltaY) / friction);
}

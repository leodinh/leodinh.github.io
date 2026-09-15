const DECELERATION = 0.998;
const FLICK_VELOCITY = 500;

export function rubberband(overshoot, dimension, constant = 0.55) {
    return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

export function project(initialVelocity, decelerationRate = DECELERATION) {
    return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

export function sheetDragY({ deltaY, height }) {
    if (deltaY >= 0) return deltaY;
    return -rubberband(-deltaY, height);
}

export function sheetOffscreenY({ viewportHeight, restTop }) {
    return Math.max(0, viewportHeight - restTop);
}

export function sheetHasLeftView({ y, offscreenY }) {
    return y >= offscreenY;
}

export function sheetSettle({ y, velocity, height }) {
    if (velocity >= FLICK_VELOCITY) return 'close';
    if (velocity <= -FLICK_VELOCITY) return 'open';
    const projected = y + project(velocity);
    return projected > height * 0.25 ? 'close' : 'open';
}

export function pointerVelocity(samples) {
    if (samples.length < 2) return 0;
    const newest = samples[samples.length - 1];
    let oldest = samples[0];
    for (let i = samples.length - 2; i >= 0; i -= 1) {
        if (newest.t - samples[i].t > 80) break;
        oldest = samples[i];
    }
    const dt = newest.t - oldest.t;
    if (dt <= 0) return 0;
    return ((newest.y - oldest.y) / dt) * 1000;
}

export function springParams({ bounce = false, response = 0.35 } = {}) {
    const zeta = bounce ? 0.8 : 1;
    const omega = (2 * Math.PI) / response;
    return { stiffness: omega * omega, damping: 2 * zeta * omega };
}

export function stepSpring(position, velocity, target, dt, { stiffness, damping }) {
    const nextVelocity = velocity + (-stiffness * (position - target) - damping * velocity) * dt;
    return { position: position + nextVelocity * dt, velocity: nextVelocity };
}

export function springSettled(position, velocity, target) {
    return Math.abs(position - target) < 0.5 && Math.abs(velocity) < 8;
}

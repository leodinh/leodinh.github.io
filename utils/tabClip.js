export function tabClipPath({ trackWidth, itemLeft, itemWidth, radius = 0 }) {
    const right = trackWidth - itemLeft - itemWidth;
    const rounded = radius > 0 ? ` round ${radius}px` : '';
    return `inset(0 ${right}px 0 ${itemLeft}px${rounded})`;
}

import './style.css';
export const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
        <div
            className="loop-slider"
            style={{
                '--duration': `${duration}ms`,
                '--direction': reverse ? 'reverse' : 'normal'
            }}>
            <div className="inner">
                {children}
                {children}
                {children}
                {children}
            </div>
        </div>
    );
};

export const Tag = ({ text }) => (
    <div className="tag">
        <span>#</span> {text}
    </div>
);

function Feedback({ name, relate, feedback }) {
    return (
        <figure className="surface-card flex h-full flex-col p-6 sm:p-7">
            <span className="text-4xl font-semibold leading-none text-accent/35" aria-hidden="true">
                “
            </span>
            <blockquote className="mt-2 flex-1 leading-7 text-muted dark:text-muted-dark">
                <p>{feedback}</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-5 dark:border-line-dark">
                <p className="font-semibold text-ink dark:text-ink-dark">{name}</p>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">{relate}</p>
            </figcaption>
        </figure>
    );
}

export default Feedback;

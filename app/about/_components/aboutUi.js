export const DISPLAY =
    'font-[family-name:var(--font-display),Georgia,serif] font-normal tracking-[-0.03em]';
export const RULE = 'border-ink/13 dark:border-ink-dark/15';
export const MUTED = 'text-muted dark:text-muted-dark';
export const INK = 'text-ink dark:text-ink-dark';
export const INTRO =
    'opacity-0 [html.site-intro-done_&]:animate-[about-hello-rise_280ms_var(--ease-out)_both] motion-reduce:animate-none motion-reduce:opacity-100';
export const SECTION_FRAME = `box-border scroll-mt-18 border-b ${RULE}`;
export const SECTION = `${SECTION_FRAME} py-16 md:py-24`;
export const HEADING = `${DISPLAY} text-display ${INK}`;
export const INLINE_LINK = `inline-flex items-center gap-2 border-b ${RULE} pb-1 text-ui font-semibold whitespace-nowrap transition-[border-color,color,transform] duration-[160ms] ease-out active:scale-[0.97] focus-visible:border-accent focus-visible:text-accent hover:border-accent hover:text-accent [&_svg]:size-4 max-md:min-h-11`;
export const META = `text-meta uppercase tabular-nums tracking-[0.08em] ${MUTED}`;
export const CHAPTER_BTN = `grid w-full cursor-pointer grid-cols-[1.6rem_1fr] gap-1.5 rounded-xl px-2.5 py-2 text-left text-meta ${MUTED} hover:bg-accent/12 hover:text-ink dark:hover:text-ink-dark`;
export const CHAPTER_ACTIVE = 'bg-accent/12 text-ink dark:text-ink-dark';
export const PORTRAIT_STAGE = 'h-[calc(100dvh-3.5rem)]';
export const PORTRAIT_SCALE = 'h-[min(60dvh,100%)] max-md:h-[60dvh]';

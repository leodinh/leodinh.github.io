import { ABOUT_CHAPTERS } from '@/utils/aboutPage';
import { HEADING, SECTION } from './aboutUi';
import InteractiveStack from './interactiveStack';

const CHAPTER = ABOUT_CHAPTERS[1];

export default function HowSection() {
    return (
        <section id={CHAPTER.id} className={SECTION} aria-labelledby="how-title">
            <h2 id="how-title" className={HEADING}>
                {CHAPTER.label}
            </h2>
            <InteractiveStack />
        </section>
    );
}

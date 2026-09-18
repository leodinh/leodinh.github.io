import AboutChapterReveal from './_components/aboutChapterReveal';
import MeSection from './_components/meSection';
import HowSection from './_components/howSection';
import WorkSection from './_components/workSection';
import OfflineSection from './_components/offlineSection';
import ContactSection from './_components/contactSection';

export const metadata = {
    title: 'About Leo Tuan Dinh',
    description:
        'The story, experience, and recommendations behind Leo Tuan Dinh, a full-stack engineer building thoughtful web and blockchain products.'
};

function About() {
    return (
        <div className="relative">
            <MeSection />
            <AboutChapterReveal>
                <HowSection />
            </AboutChapterReveal>
            <AboutChapterReveal>
                <WorkSection />
            </AboutChapterReveal>
            <AboutChapterReveal from="left">
                <OfflineSection />
            </AboutChapterReveal>
            <AboutChapterReveal>
                <ContactSection />
            </AboutChapterReveal>
        </div>
    );
}

export default About;

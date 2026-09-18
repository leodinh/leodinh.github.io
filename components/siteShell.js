import SiteIntro from './siteIntro';

function SiteShell({ children }) {
    return (
        <>
            <SiteIntro />
            <div id="site-content" className="site-chrome" inert>
                {children}
            </div>
        </>
    );
}

export default SiteShell;

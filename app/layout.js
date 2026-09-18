import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SiteShell from '@/components/siteShell';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const plexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-body'
});

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono'
});

function layout({ children }) {
    return (
        <html
            lang="en"
            className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
            suppressHydrationWarning>
            <body className="min-h-screen overflow-x-hidden">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <SiteShell>
                        <div className="site-backdrop" aria-hidden="true" />
                        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-4">
                            <Header />
                            <main className="w-full flex-1">{children}</main>
                            <Footer />
                        </div>
                    </SiteShell>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default layout;

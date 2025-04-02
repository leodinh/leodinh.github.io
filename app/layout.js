import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
function layout({ children }) {
    return (
        <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
            <body className="min-h-screen overflow-x-hidden flex items-center justify-center">
                <ThemeProvider attribute="class">
                    <div className="glow flex min-h-screen max-w-[1000px] w-full flex-col items-center">
                        <Header />
                        <main className="w-full flex-1 pr-5 pl-5 lg:pr-0 lg:pl-0">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default layout;

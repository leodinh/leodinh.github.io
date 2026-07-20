import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
function layout({ children }) {
    return (
        <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
            <body className="min-h-screen overflow-x-hidden">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="site-container flex min-h-screen flex-col items-center">
                        <Header />
                        <main className="w-full flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default layout;

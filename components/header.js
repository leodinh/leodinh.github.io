import Image from 'next/image';
import logo from '../assets/avatar.png';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
import HeaderBackground from './headerBackground';
import NavMobile from './navMobile';
function Header() {
    const textStyle =
        'block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 dark:text-(--text-color) dark:hover:text-white transition-colors ease-out';
    return (
        <div className="sticky inset-x-0 top-0 z-30 w-full transition-all max-w-[1296px]">
            <div className="inset-0 block transition-all lg:hidden fixed inset-x-0 top-0 z-[5] h-36 w-full bg-background/5 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] firefox:bg-opacity-90 dark:bg-[#1212125c]" />
            <div className="container relative z-10 h-14 items-center justify-between">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/" className="z-10 grow basis-0 hidden lg:block">
                        <Image src={logo} priority alt="Logo" className="w-8" />
                    </Link>
                    <nav className="relative hidden lg:block">
                        <div className="relative">
                            <ul className="relative flex flex-row gap-2 px-2 py-0.5">
                                <HeaderBackground />
                                <li>
                                    <Link href="/" className={textStyle}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className={textStyle}>
                                        About me
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/project" className={textStyle}>
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="hidden grow basis-0 justify-end lg:flex">
                        <ToggleTheme />
                    </div>
                    <NavMobile />
                </div>
            </div>
        </div>
    );
}

export default Header;

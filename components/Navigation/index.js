import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function Navigation() {
    const isRunningDemo = useSelector((state) => state.isDemoRunning);
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const navigationsList = useState([
        { name: 'HOME', href: '/' },
        { name: 'About me', href: '/about' },
        { name: 'Project', href: '/project' },
        { name: 'Contact Me', href: '/contact' }
    ])[0];
    const navigateLink = (href) => {
        setIsChecked(false);
        router.push(href, href, { shallow: true });
    };
    return (
        <div className={styles['navigation']}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                className={styles['navigation__checkbox']}
                id="navi-toggle"
            />

            <label
                htmlFor="navi-toggle"
                className={`${styles['navigation__button']} ${
                    !isRunningDemo ? styles['navigation-nodelay'] : ''
                }`}>
                <span className={styles['navigation__icon']}>&nbsp;</span>
            </label>

            <div
                className={`${styles['navigation__background']} ${
                    !isRunningDemo ? styles['navigation-nodelay'] : ''
                }`}>
                &nbsp;
            </div>

            <nav className={styles['navigation__nav']}>
                <ul className={styles['navigation__list']}>
                    {navigationsList.map((nav) => (
                        <li className={styles['navigation__item']} key={nav.name}>
                            <div
                                role="button"
                                tabIndex={0}
                                aria-hidden="true"
                                className={styles['navigation__link']}
                                onClick={() => navigateLink(nav.href)}>
                                {nav.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

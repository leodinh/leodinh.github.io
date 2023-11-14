import Head from 'next/head';
import styles from './layout.module.scss';
import Navigation from './Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Loader';
export const siteTitle = 'Leo Tuan Dinh';

export default function Layout({ children, home }) {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    useEffect(() => {
        if (!home) {
            dispatch({
                type: 'DONE'
            });
        }
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/myavatar_1.png" />
                <meta name="description" content="Welcome to my world!" />
                <meta property="og:image" content="/images/mypic-new.png" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navigation />

            <main className={styles.content}>{loading ? <Loader /> : children}</main>
        </div>
    );
}

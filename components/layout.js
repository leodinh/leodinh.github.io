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
    console.log(loading);
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navigation />

            <main className={styles.content}>{loading ? <Loader /> : children}</main>
        </div>
    );
}

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import classes from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
export default function Home() {
    const isRunningDemo = useSelector((state) => state.isDemoRunning);
    const dispatch = useDispatch();
    const stopRunningDemo = () => {
        setTimeout(() => {
            dispatch({
                type: 'DONE'
            });
        }, 8000);
    };
    useEffect(() => {
        stopRunningDemo();
    }, []);
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.content}>
                {isRunningDemo ? (
                    <Fragment>
                        <div className={classes.circle}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={classes.expand}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Fragment>
                ) : (
                    <div className={classes.background}></div>
                )}

                <div className={classes.container}>
                    <div className={classes.container_intro}>
                        <div
                            className={`${classes.container_intro_animation} ${
                                !isRunningDemo ? classes.nodelay : ''
                            }`}>
                            <h2 className={!isRunningDemo ? classes.nodelay : ''}>
                                Hello there, I&apos;m Leo
                            </h2>
                        </div>
                        <div
                            className={`${classes.container_intro_animation} ${
                                !isRunningDemo ? classes.nodelay : ''
                            }`}>
                            <h1 className={!isRunningDemo ? classes.nodelay : ''}>
                                Full-stack Developer
                            </h1>
                        </div>
                        <div
                            className={`${classes.container_intro_animation} ${
                                !isRunningDemo ? classes.nodelay : ''
                            }`}>
                            <p className={!isRunningDemo ? classes.nodelay : ''}>
                                I&apos;m based in Toronto, Canada{' '}
                                <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                                    ✌️
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${classes.image} ${!isRunningDemo ? classes.nodelay : ''}`}>
                    <img src="/images/mypic-new.png" alt="" />
                </div>
            </div>
        </Layout>
    );
}

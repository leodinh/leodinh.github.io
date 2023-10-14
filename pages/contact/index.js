import classes from './style.module.scss';
import Head from 'next/head';
import { Facebook, Instagram, Linkedin, GitHub } from 'react-feather';

import Layout, { siteTitle } from '../../components/layout';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.content}>
                <video
                    autoPlay
                    playsinline
                    loop
                    muted
                    width="200"
                    height="200"
                    src="/images/myavatar_gif.mov">
                    <source type="video/mov" src="/images/myavatar_gif.mov" />
                </video>
                <img src="/images/myavatar_1.png" alt="my_avatar" />
                <div className={classes.greet}>
                    That would be my pleasure to connect with you{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>
                    .
                </div>
                <a className={classes.btn} href="/cv.pdf" target="_blank">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    Get My Resume
                </a>

                <div className={classes['navigation__social']}>
                    <div className={classes['navigation__social_item']}>
                        <a
                            href="https://www.facebook.com/anhtuandn0112/"
                            rel="noreferrer opener"
                            target="_blank">
                            <Facebook />
                        </a>
                    </div>
                    <div className={classes['navigation__social_item']}>
                        <a
                            rel="noreferrer opener"
                            target="_blank"
                            href="https://www.instagram.com/leoo.dinh/">
                            <Instagram />
                        </a>
                    </div>
                    <div
                        className={classes['navigation__social_item']}
                        rel="noreferrer opener"
                        target="_blank">
                        <a
                            rel="noreferrer opener"
                            target="_blank"
                            href="https://www.linkedin.com/in/leotuandinh/">
                            <Linkedin />
                        </a>
                    </div>
                    <div
                        className={classes['navigation__social_item']}
                        rel="noreferrer opener"
                        target="_blank">
                        <a
                            rel="noreferrer opener"
                            target="_blank"
                            href="https://github.com/leodinh">
                            <GitHub />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

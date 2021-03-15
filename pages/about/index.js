import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import classes from './style.module.scss';
export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>About</h1>
        </Layout>
    );
}

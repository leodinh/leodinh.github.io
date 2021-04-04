import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import classes from './style.module.scss';
import { useState } from 'react';
import Tab from '../../components/Tab';
export default function About() {
    const [selectedSection, setSelectedSection] = useState('t1');
    const onChangeSection = (e) => {
        console.log(e.target.value);
        setSelectedSection(e.target.value);
    };
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.content}>
                <Tab selectedSection={selectedSection} onChangeSection={onChangeSection} />
            </div>
        </Layout>
    );
}

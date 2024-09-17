import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import classes from './style.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import Tab from '../../components/Tab';
export default function About() {
    const [selectedSection, setSelectedSection] = useState('t1');
    const onChangeSection = (e) => {
        console.log(e.target.value);
        setSelectedSection(e.target.value);
    };
    const renderContent = () => {
        if (selectedSection === 't1') {
            return <AboutMe />;
        }
        switch (selectedSection) {
            case 't1':
                return <AboutMe />;
            case 't2':
                return <MySkills />;
            case 't3':
                return <MyBackground />;
        }
    };
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.content}>
                <Tab selectedSection={selectedSection} onChangeSection={onChangeSection} />
                {renderContent()}
            </div>
        </Layout>
    );
}

function AboutMe() {
    return (
        <div className={classes.aboutMe}>
            <div className={classes.avatar}>
                <img src="/images/about.jpeg" alt="my avatar" />
            </div>
            <div className={classes.moreAboutMe}>
                <p>
                    I was born and grew up in Vietnam{' '}
                    <span role="img" aria-label="vietnam">
                        🇻🇳
                    </span>
                    .
                </p>
                <p>
                    I am passionate about developing software. I thrive on challenging projects that
                    push me out of my comfort zone.
                </p>
                <p>
                    Learning is a never-ending journey and I always strive to broaden my knowledge
                    by taking online courses.
                </p>
            </div>
        </div>
    );
}

function MySkills() {
    return (
        <div className={classes.mySkills}>
            <div className={classes.imageIcon}>
                <img src="/images/laptop.svg" alt="" />
            </div>
            <div className={classes.skillItem}>
                <div className={classes.skillItemTitle}>Front End:</div>
                <div className={classes.skillDetails}>
                    <span className={cn(classes.detailItem, classes.detailItem1)}>React</span>
                    <span className={cn(classes.detailItem, classes.detailItem2)}>NextJS</span>
                    <span className={cn(classes.detailItem, classes.detailItem3)}>Typescript</span>
                    <span className={cn(classes.detailItem, classes.detailItem3)}>SCSS</span>
                </div>
            </div>
            <div className={classes.skillItem}>
                <div className={classes.skillItemTitle}>Back End:</div>
                <div className={classes.skillDetails}>
                    <span className={cn(classes.detailItem, classes.detailItem1)}>NodeJs</span>
                    <span className={cn(classes.detailItem, classes.detailItem2)}>ExpressJs</span>
                    <span className={cn(classes.detailItem, classes.detailItem2)}>NestJS</span>
                    <span className={cn(classes.detailItem, classes.detailItem3)}>Typeorm</span>
                    <span className={cn(classes.detailItem, classes.detailItem4)}>Redis</span>
                </div>
            </div>
            <div className={classes.skillItem}>
                <div className={classes.skillItemTitle}>Blockchain:</div>
                <div className={classes.skillDetails}>
                    <span className={cn(classes.detailItem, classes.detailItem1)}>Solidity</span>
                    <span className={cn(classes.detailItem, classes.detailItem2)}>Web3</span>
                    <span className={cn(classes.detailItem, classes.detailItem3)}>Hardhat</span>
                    <span className={cn(classes.detailItem, classes.detailItem4)}>Subgraph</span>
                </div>
            </div>
        </div>
    );
}

function MyBackground() {
    return (
        <div className={classes.background}>
            <div className={cn(classes.backgroundItem, classes.backgroundItem2)}>
                <div className={classes.introContainer}>
                    <div className={classes.introContainerLeft}>
                        <div className={classes.role}>Fullstack Developer</div>
                        <div className={classes.company}>
                            Source Independent Entertainment · Contractor
                        </div>
                    </div>
                    <div className={classes.introContainerRight}>
                        <div className={classes.year}>Jan 2024 - Present</div>
                        <div className={classes.place}>South Yorkshire, UK</div>
                    </div>
                </div>
                <div className={classes.doing}>
                    Developed an NFT marketplace and its admin dashboard for selling digital assets.
                </div>
            </div>
            <div className={cn(classes.backgroundItem, classes.backgroundItem2)}>
                <div className={classes.introContainer}>
                    <div className={classes.introContainerLeft}>
                        <div className={classes.role}>Fullstack Developer</div>
                        <div className={classes.company}>Gaia Labs · Contractor</div>
                    </div>
                    <div className={classes.introContainerRight}>
                        <div className={classes.year}>Oct 2022 - Oct 2023</div>
                        <div className={classes.place}>Toronto, Canada</div>
                    </div>
                </div>
                <div className={classes.doing}>Developed web3 marketplace for NFTs.</div>
            </div>
            <div className={cn(classes.backgroundItem, classes.backgroundItem1)}>
                <div className={classes.introContainer}>
                    <div className={classes.introContainerLeft}>
                        <div className={classes.role}>Fullstack Developer</div>
                        <div className={classes.company}>Capital Methods · Full-time</div>
                    </div>
                    <div className={classes.introContainerRight}>
                        <div className={classes.year}>Feb 2021 - 09 2023</div>
                        <div className={classes.place}>Toronto, Canada</div>
                    </div>
                </div>
                <div className={classes.doing}>
                    Developed a next-generation yield aggregator (decentralized finance system) on
                    Ethereum.
                </div>
            </div>
            <div className={cn(classes.backgroundItem, classes.backgroundItem3)}>
                <div className={classes.introContainer}>
                    <div className={classes.introContainerLeft}>
                        <div className={classes.role}>Student Researcher</div>
                        <div className={classes.company}>George Brown College · Co-op</div>
                    </div>
                    <div className={classes.introContainerRight}>
                        <div className={classes.year}>Jun 2020 - Jan 2021</div>
                        <div className={classes.place}>Toronto, Canada</div>
                    </div>
                </div>
                <div className={classes.doing}>
                    Designed and implemented a next-generation blockchain.
                </div>
            </div>
            <div className={cn(classes.backgroundItem, classes.backgroundItem4)}>
                <div className={classes.introContainer}>
                    <div className={classes.introContainerLeft}>
                        <div className={classes.role}>Java Web Developer</div>
                        <div className={classes.company}>IMT Solutions · Full-time</div>
                    </div>
                    <div className={classes.introContainerRight}>
                        <div className={classes.year}>May 2018 - Aug 2018</div>
                        <div className={classes.place}>Ho Chi Minh City, Vietnam</div>
                    </div>
                </div>
                <div className={classes.doing}>
                    Maintained and developed DMS (Data Management System) websites
                </div>
            </div>
        </div>
    );
}

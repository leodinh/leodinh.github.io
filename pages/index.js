import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import classes from "./home.module.scss"
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
      <div className={classes.container}>
        <div className={classes.container_intro}>
          <div className={classes.container_intro_animation}>
            <h2>Hello there, I'm Leo</h2>
          </div>
          <div className={classes.container_intro_animation}>
            <h1>Front End Developer</h1>
          </div>
          <div className={classes.container_intro_animation}>
            <p>
              I'm based in Toronto, Canada. I love passionately developing
              software.✌️
            </p>
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <img src="/images/mypic.png" alt="" />
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

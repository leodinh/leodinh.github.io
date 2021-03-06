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
      <h1>Hello</h1>
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

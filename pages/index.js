import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
          <title>Home Page</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <section >…</section>
      <section >
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

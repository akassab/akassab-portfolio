import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {
  getSortedPostProjectData,
  getSortedPostExperiencesData,
} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Avatar, Grid } from '@mui/material';

const Home = ({ allPostExperienceData, allPostProjectData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experiences</h2>
        <ul className={utilStyles.list}>
          {allPostExperienceData.map(({ id, date, title, img }) => (
            <li className={utilStyles.listItem} key={id}>
              <Grid container>
                <Grid item xs={8} className={utilStyles.listItemTextContainer}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <Avatar
                        className={utilStyles.listItemImage}
                        alt={`${img} Logo`}
                        src={`/images/${img}`}
                        sx={{ width: 75, height: 75 }}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostProjectData.map(({ id, date, title, img }) => (
            <li className={utilStyles.listItem} key={id}>
              <Grid container>
                <Grid item xs={8} className={utilStyles.listItemTextContainer}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </Grid>
                <Grid>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostExperienceData = getSortedPostExperiencesData();
  const allPostProjectData = getSortedPostProjectData();
  return {
    props: {
      allPostExperienceData,
      allPostProjectData,
    },
  };
}

export default Home;

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {
  getSortedPostEducationData,
  getSortedPostExperiencesData,
  getSortedCommunityInvolvementData,
  getSortedPostProjectData,
} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Avatar, Grid } from '@mui/material';
import track from '../lib/track';

const Home = ({
  allPostEducationData,
  allPostExperienceData,
  allPostCommunityInvolvementData,
  allPostProjectData,
}) => {
  track('Home');
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Ayman 👋. I’m a Computer Science graduate from the Cheriton
          School of Computer Science at the University of Waterloo. I’m a Full
          Stack Software Engineer 🚀, first-year student mentor, and community
          volunteer. As a lifelong programmer, I’ve always been interested in
          creating applications. My interests are in web, mobile, and Artificial
          Intelligence. I also work as a referee, volunteer in a spiritual
          community, and love football/soccer ⚽️.
        </p>
        <p>
          This is my portfolio website - I built it with Next.js (React).
          <br />
          <a href="https://github.com/akassab/akassab-portfolio">
            (See GitHub Repo)
          </a>
          .
        </p>
        <p>
          <a href="/Ayman_Kassab.pdf" download>
            Here is a copy of my latest resume.
          </a>{' '}
          For finer details, check out the links below.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <ul className={utilStyles.list}>
          {allPostEducationData.map(({ id, date, title, img }) => (
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
                <Grid item>
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
        <h2 className={utilStyles.headingLg}>Community Involvement</h2>
        <ul className={utilStyles.list}>
          {allPostCommunityInvolvementData.map(({ id, date, title, img }) => (
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
                <Grid item>
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
          {allPostProjectData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Grid container>
                <Grid item xs={12} className={utilStyles.listItemTextContainer}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </Grid>
                <Grid item xs={12}>
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
  const allPostEducationData = getSortedPostEducationData();
  const allPostCommunityInvolvementData = getSortedCommunityInvolvementData();
  return {
    props: {
      allPostExperienceData,
      allPostProjectData,
      allPostEducationData,
      allPostCommunityInvolvementData,
    },
  };
}

export default Home;

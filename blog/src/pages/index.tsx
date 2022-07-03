import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeatureList from '../components/FeatureList';
import Friend from '../components/Friends';
import Friends, {type FriendsItem} from '../components/Friends/data';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.buttonsFirst}`}
            to="docs/category/ProjectReview">
            Go to my knowledge confluence
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className={`button--secondary ${styles.buttonsSecond}`}
            to="/blog/Resume">
            View my resume -&gt;
          </Link>
          </div>
      </div>
    </header>
  );
}

function FriendsSection() {
  const friendsColumns: FriendsItem[][] = [[], [], []];
  Friends.filter((friend) => friend.showOnHomepage).forEach((friend, i) =>
  friendsColumns[i % 3]!.push(friend),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>
          <p>My Friends' Blog</p>
        </h2>
        <div className={clsx('row', styles.friendsSection)}>
          {friendsColumns.map((friendsItem, i) => (
            <div className="col col--4" key={i}>
              {friendsItem.map((friend) => (
                <Friend {...friend} key={friend.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <FeatureList />
        <FriendsSection />
      </main>
    </Layout>
  );
}

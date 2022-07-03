import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Features = [
  {
    title: 'Profile',
    description: (
      <>
        I'm a 28 years old front-end developer graduated from project 985 universities and has over 6 years' working experience on IT industry. To be specific, 3.5 years on Front-End/CMS/AWS, 0.5 year on WeChat mini app, 1 year on Unity3D development and 1 year on IT support. I coding in JavaScript, LUA/C, C#, python and worked for two fortune 500 companies.
      </>
    ),
  },
  {
    title: 'Background',
    description: (
      <>
        Besides, I'm a fast learner who is highly interested in new IT technologies. Coding as an adult blocks game encourage me to build my own world and solve puzzles which is really cool. So at least for me, I'm not only writing programs for living, but also for fun.
      </>
    ),
  },
  {
    title: 'Characteristics',
    description: (
      <>
        I'm a self-challenge person and always have a can-do attitude, those characteristics makes me a responsible team player. I was also a debater which means I have good people skills. Personally, I’m willing to communicate with people come from different culture backgrounds. Besides, I have oversea working experience and Australia PR.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeatureList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

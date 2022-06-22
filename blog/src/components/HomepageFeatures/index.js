import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Profile',
    description: (
      <>
        I'm a 28 years old front-end developer currently base in China, graduated from one of the project 985 universities and has over 5 years' working experience on programming. To be specific, 3.5 years on react technology stack, 0.5 year on Wechat mini app, and 1 year on Unity game development. I coding in JavaScript, lua, C#, python.
      </>
    ),
  },
  {
    title: 'Background',
    description: (
      <>
        As a self-educated programmer, I'm a fast learner who is  highly interested in new IT technologies. Coding as an adult blocks game encourage me to build my own world and solve puzzles which is really cool. So at least for me, I'm not only writing programs for living, but also for fun.
      </>
    ),
  },
  {
    title: 'Characteristics',
    description: (
      <>
        I'm a self-challenge person and always have a can-do attitude, those characteristics makes me a responsible team player. I was also a debater which means I'm good at persuade others and not afraid about public presentations. Personally, I’m willing to communicate with people even they come from different culture backgrounds.
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

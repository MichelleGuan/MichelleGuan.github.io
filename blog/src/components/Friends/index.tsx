import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface Props {
  url: string;
  handle: string;
  name: string;
  content: ReactNode;
  avatar: string;
  github: string; 
  tag: string;
}

export default function Friend({
  url,
  handle,
  name,
  content,
  avatar,
  github,
  tag,
}: Props): JSX.Element {
  return (
    <div className={clsx('card', styles.friend)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={name}
            className="avatar__photo"
            src={avatar}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx('avatar__intro', styles.friendMeta)}>
            <strong className="avatar__name">{name}</strong>
            <a className={clsx(styles.friendMeta, styles.friendDate)} href={github}>
              {handle ? <span>GitHub @{handle}</span> : <span>Youtube</span> }
            </a>
          </div>
        </div>
      </div>

      <div className={clsx('card__body', styles.friend)}>{content}</div>

      <div className="card__footer">
        <a className={clsx(styles.friendMeta, styles.friendDate)} href={url}>
          {tag}
        </a>
      </div>
    </div>
  );
}
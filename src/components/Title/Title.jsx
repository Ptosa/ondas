import React from 'react';
import styles from './Title.module.css';

const Title = ({ children }) => {
  return (
    <section className={styles.titleBg}>
      <h1 className={`${styles.title} container`}>{children}</h1>
    </section>
  );
};

export default Title;

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <span className={`${styles.development} container`}>
        Desenvolvido com ❤
      </span>
    </footer>
  );
};

export default Footer;

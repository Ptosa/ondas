import React from 'react';
import Button from '../../components/Button/Button';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import styles from './Admin.module.css';
import checkinService from '../../services/checkinService';
import CheckinData from '../../components/CheckinData/CheckinData';

const Admin = () => {
  return (
    <>
      <Head
        title="Ondas - Ilan Church | Administração"
        description="Essa é a página de Administração."
      />
      <Title>Administração</Title>
      <section className={`${styles.content} container`}>
        <CheckinData />
      </section>
    </>
  );
};

export default Admin;

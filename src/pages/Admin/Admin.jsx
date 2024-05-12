import React from 'react';
import Button from '../../components/Button/Button';
import excelService from '../../services/excelService';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import styles from './Admin.module.css';
import checkinService from '../../services/checkinService';

const Admin = () => {
  return (
    <>
      <Head
        title="Ondas - Ilan Church | Administração"
        description="Essa é a página de Administração."
      />
      <Title>Administração</Title>
      <section className={`${styles.content} container`}>
        {/* <Button onClick={() => excelService().downloadExcel()}>
          Download Excel
        </Button> */}
        <Button onClick={() => checkinService().downloadExcel()}>
          Download Excel Checkin
        </Button>
      </section>
    </>
  );
};

export default Admin;

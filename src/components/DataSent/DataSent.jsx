import React from 'react';
import styles from './DataSent.module.css';

const DataSent = () => {
  return (
    <>
      <section className={`${styles.sent} container`}>
        <div className={`${styles.sentData}`}>
          <h1>Dados enviado com sucesso</h1>
          <h2>Recarregue a página ;)</h2>
        </div>
      </section>
    </>
  );
};

export default DataSent;

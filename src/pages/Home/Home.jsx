import React from 'react';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import Head from '../../hooks/Head/Head';

const Home = () => {
  return (
    <main className={`${styles.mainBg}`}>
      <Head
        title="Ondas - Ilan Church | Home"
        description="Essa é a página Home."
      />
      <Title>Curso Ondas - Online & Presencial</Title>
      <section className={`${styles.content} container`}>
        <p>
          O curso Ondas é o curso do início da jornada de sua vida cristã na
          Ilan Church. Para tornar-se um membro da igreja e participar de um
          ministério, é o primeiro pré-requisito.
        </p>
        <p>O curso acontece todo mês, durante 4 semanas, sendo dividido por:</p>
        <p>Ondas 1 - Descubra o que é igreja.</p>
        <p>Ondas 2 - Essenciais do evangelho.</p>
        <p>Ondas 3 - Descoberta.</p>
        <p>Ondas 4 - Propósito.</p>
      </section>
      <section className={`${styles.accordion} container`}>
        <div className={`${styles.accordionItem}`}>
          <h2>Qualquer pessoa pode fazer o curso ?</h2>
          <p>
            Sim. Se você tem interesse em conhecer melhor a visão da iLAN, no
            que acreditamos e como funcionamos, esse curso é para você! No
            entanto, para realizar o curso, é necessário fornecer alguns dados
            (nome completo, telefone, e-mail e endereço) através do botão
            abaixo.
          </p>
          {/* <Link to="ficha-de-inscricao">
            <Button>Ficha de inscrição</Button>
          </Link> */}
        </div>
        <div className={`${styles.accordionItem}`}>
          <h2>Como faço para realizar o curso ?</h2>
          <p>
            Se você desejar realizar seu curso Ondas de maneira presencial,
            deverá comparecer no campus de interesse para receber mais
            informações e ganhar sua apostila. Vale dizer que o curso dura
            quatro semanas e começa no primeiro domingo de cada mês – o horário
            varia em cada campus.
          </p>
          <p>
            Caso você deseje realizar o curso online, entre em contato pelo
            Whatsapp da secretaria da ILAN (21 99080-1878)
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;

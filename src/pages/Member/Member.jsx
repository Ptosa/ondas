import React from 'react';
import DataSent from '../../components/DataSent/DataSent';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm/useForm';
import styles from './Member.module.css';
import InputRadio from '../../components/InputRadio/InputRadio';

const Member = () => {
  const name = useForm();
  const maritalStatus = useForm();
  const telephone = useForm('telephone');
  const [form, setForm] = React.useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (form) return <DataSent />;

  return (
    <>
      <Head
        title="Ondas - Ilan Church | Membresia"
        description="Essa é a pagina de Membresia"
      />
      <Title>Ficha De Membresia</Title>

      <form className={`${styles.form} container`} onSubmit={handleSubmit}>
        <Input
          label="Nome"
          id="name"
          required
          placeholder="Seu nome."
          type="text"
          {...name}
        />
        <Input
          label="Telefone"
          id="telephone"
          required
          placeholder="Seu telefone. Ex: 21980693443"
          type="tel"
          {...telephone}
        />
        <p>Estado Civil: </p>
        <InputRadio
          options={[
            { id: 1, name: 'Solteiro' },
            { id: 2, name: 'Casado' },
            { id: 3, name: 'Lídia' },
            { id: 4, name: 'Silvia' },
            { id: 5, name: 'Outro' },
          ]}
          {...maritalStatus}
        />
        <Button>Enviar</Button>
      </form>
    </>
  );
};

export default Member;

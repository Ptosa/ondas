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
  const birth = useForm();
  const email = useForm();
  const spouse = useForm();
  const kid = useForm();
  const jesus = useForm();
  const when = useForm();
  const where = useForm();
  const baptize = useForm();
  const whereBap = useForm();
  const whenBap = useForm();
  const class1 = useForm();
  const whenClass = useForm();
  const ilan = useForm();
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
          label="Data de nascimento"
          id="birth"
          required
          placeholder="Data de nascimento"
          type="text"
          {...birth}
        />
        <Input
          label="Telefone"
          id="telephone"
          required
          placeholder="Seu telefone. Ex: 21980693443"
          type="tel"
          {...telephone}
        />
        <Input
          label="Email"
          id="email"
          required
          placeholder="Seu email."
          type="email"
          {...email}
        />
        <p>Estado Civil: </p>
        <InputRadio
          options={[
            { id: 1, name: 'Solteiro(a)' },
            { id: 2, name: 'Casado(a)' },
            { id: 3, name: 'Divorciado(a)' },
            { id: 4, name: 'Viuvo(a)' },
            { id: 5, name: 'União Estavel' },
          ]}
          {...maritalStatus}
        />
        <Input
          label="Nome Cônjuge"
          id="spouse"
          required
          placeholder="Nome Cônjuge"
          type="spouse"
          {...spouse}
        />
        <Input
          label="Nome Filho"
          id="kid"
          required
          placeholder="Nome Filho"
          type="kid"
          {...kid}
        />
        <p>Você já entregou sua vida a Jesus e confiou sua salvação a Ele? </p>
        <InputRadio
          options={[
            { id: 1, name: 'Sim' },
            { id: 2, name: 'Não' },
          ]}
          {...jesus}
        />
        <Input
          label="Se sim, quando"
          id="when"
          placeholder="DD/MM/AAAA"
          type="when"
          {...when}
        />
        <Input
          label="Se sim, Aonde?"
          id="where"
          placeholder=""
          type="where"
          {...where}
        />
        <p>
          Você já foi batizado nas águas depois que entregou a vida a Jesus?
        </p>
        <InputRadio
          options={[
            { id: 1, name: 'Sim' },
            { id: 2, name: 'Não' },
          ]}
          {...baptize}
        />
        <Input
          label="Se sim, quando"
          id="whenBap"
          placeholder="DD/MM/AAAA"
          type="whenBap"
          {...whenBap}
        />
        <Input
          label="Se sim, Aonde?"
          id="whereBap"
          placeholder=""
          type="whereBap"
          {...whereBap}
        />
        <p>Já completou a Aula 1 do Curso Ondas?</p>
        <InputRadio
          options={[
            { id: 1, name: 'Sim' },
            { id: 2, name: 'Não' },
          ]}
          {...class1}
        />
        <Input
          label="Se sim, quando"
          id="whenClass"
          placeholder="DD/MM/AAAA"
          type="whenClass"
          {...whenClass}
        />
        <p>Você vive de acordo com a Aliança de Membro da ILAN?</p>
        <InputRadio
          options={[
            { id: 1, name: 'Sim' },
            { id: 2, name: 'Não' },
          ]}
          {...ilan}
        />
        <Button>Enviar</Button>
      </form>
    </>
  );
};

export default Member;

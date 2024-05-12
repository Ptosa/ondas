import React from 'react';
import styles from './ApplicationForm.module.css';
import Title from '../../components/Title/Title';
import Head from '../../hooks/Head/Head';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useForm from '../../hooks/useForm/useForm';
import InputRadio from '../../components/InputRadio/InputRadio';
import excelService from '../../services/excelService';

const ApplicationForm = () => {
  const name = useForm();
  const telephone = useForm('telephone');
  const email = useForm('email');
  const childs = useForm();
  const enrollmentOrReplacement = useForm();
  const preferTime = useForm();
  const enrollmentBy = useForm();
  const voluntary = useForm();
  const [form, setForm] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.validate() &&
      email.validate() &&
      telephone.validate() &&
      childs.validate() &&
      enrollmentOrReplacement.validate() &&
      preferTime.validate() &&
      enrollmentBy.validate() &&
      voluntary.validate()
    ) {
      excelService({
        name: name.value,
        telephone: telephone.value,
        email: email.value,
        childs: childs.value,
        enrollmentOrReplacement: enrollmentOrReplacement.value,
        preferTime: preferTime.value,
        enrollmentBy: enrollmentBy.value,
        voluntary: voluntary.value,
      }).addToExcel();
      console.log(
        name.value,
        telephone.value,
        email.value,
        childs.value,
        enrollmentOrReplacement.value,
        preferTime.value,
        enrollmentBy.value,
        voluntary.value,
      );
      setForm(true);
    }
  };

  return (
    <>
      <section className={`${styles.applicationFormBg}`}>
        <Head
          title="Ondas - Ilan Church | Ficha de inscrição"
          description="Essa é a página da ficha de inscrição."
        />
        <Title>Ficha de inscrição</Title>
        <form className={`${styles.form} container`} onSubmit={handleSubmit}>
          <Input
            label="Nome completo"
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
          <Input
            label="Email"
            id="email"
            required
            placeholder="Seu email."
            type="email"
            {...email}
          />
          <Input
            label="Quantos filhos menor de idade ? Até 18 anos."
            id="childs"
            required
            placeholder="Sua resposta."
            type="number"
            {...childs}
          />
          <h2>Inscrição ou reposição de aula</h2>
          <InputRadio
            options={[
              { id: 1, name: 'Inscrição' },
              { id: 2, name: 'Reposição da aula 01' },
              { id: 3, name: 'Reposição da aula 02' },
              { id: 4, name: 'Reposição da aula 03' },
            ]}
            {...enrollmentOrReplacement}
          />
          <h2>Qual o melhor horário para assistir as aulas no domingo ?</h2>
          <InputRadio
            options={[
              { id: 1, name: '9h' },
              { id: 2, name: '18h' },
            ]}
            {...preferTime}
          />
          <h2>Inscrição via ?</h2>
          <InputRadio
            options={[
              { id: 1, name: 'Instagram' },
              { id: 2, name: 'Jornada' },
              { id: 3, name: 'Outro' },
            ]}
            {...enrollmentBy}
          />
          <h2>Voluntário que está fazendo a inscrição:</h2>
          <Input
            id="voluntary"
            required
            placeholder="Nome do voluntário."
            type="text"
            {...voluntary}
          />
          <Button disabled form={form}>
            {form ? 'Dados Enviado...' : 'Enviar'}
          </Button>
        </form>
      </section>
    </>
  );
};

export default ApplicationForm;

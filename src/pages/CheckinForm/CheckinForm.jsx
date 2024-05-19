import React from 'react';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import styles from './CheckinForm.module.css';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm/useForm';
import checkinService from '../../services/checkinService';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useNavigate } from 'react-router-dom';
import InputRadio from '../../components/InputRadio/InputRadio';
import excelService from '../../services/excelService';
import DataSent from '../../components/DataSent/DataSent';

const CheckinForm = () => {
  const name = useForm();
  const amountChilds = useForm();
  const nameChilds = useForm();
  const teacher = useForm();
  const numberOfClass = useForm();
  const currentDateTime = new Date().toLocaleString();
  const [form, setForm] = React.useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.validate() &&
      amountChilds.validate() &&
      nameChilds.validate() &&
      teacher.validate() &&
      numberOfClass.validate()
    ) {
      checkinService({
        name: name.value,
        amountChilds: amountChilds.value,
        nameChilds: nameChilds.value,
        teacher: teacher.value,
        numberOfClass: numberOfClass.value,
        currentDateTime: currentDateTime,
      }).addToExcel();
      setForm(true);
      navigate('/ondas/checkin');
    }
  };

  if (form) return <DataSent />;
  return (
    <>
      <Head
        title="Ondas - Ilan Church | Checkin"
        description="Essa é a página de Checkin."
      />
      <Title>Checkin</Title>
      <form className={`${styles.form} container`} onSubmit={handleSubmit}>
        {currentDateTime}
        <Input
          label="Nome completo"
          id="name"
          required
          placeholder="Seu nome."
          type="text"
          {...name}
        />
        <Input
          label="Quanto(s) filho(s) com idade inferior a 18 anos ? Caso não tenha, digite: 0"
          id="amountChilds"
          required
          placeholder="Informe a quantidade. Ex: 2"
          type="number"
          {...amountChilds}
        />
        <Input
          label="Nome do(s) filho(s). Caso não tenha, digite: Nenhum."
          id="nameChilds"
          required
          placeholder="O nome do(s) filho(s)."
          type="text"
          {...nameChilds}
        />
        {/* <p>Professor (Selecione no mínimo um)</p> */}
        {/* <Checkbox options={['Lídia', 'Silvia', 'Outro']} {...teacher} /> */}
        <p>Professor: </p>
        <InputRadio
          options={[
            { id: 1, name: 'Pr Júnior' },
            { id: 2, name: 'Pr Franklin' },
            { id: 3, name: 'Lídia' },
            { id: 4, name: 'Silvia' },
            { id: 5, name: 'Outro' },
          ]}
          {...teacher}
        />
        <p>Aula: </p>
        <InputRadio
          options={[
            { id: 1, name: 'Aula 01' },
            { id: 2, name: 'Aula 02' },
            { id: 3, name: 'Aula 03' },
            { id: 4, name: 'Aula 04' },
          ]}
          {...numberOfClass}
        />
        <Button disabled form={form}>
          {form ? 'Dados Enviado...' : 'Enviar'}
        </Button>
      </form>
    </>
  );
};

export default CheckinForm;

import React from 'react';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import styles from './Checkin.module.css';
import Button from '../../components/Button/Button';
import useForm from '../../hooks/useForm/useForm';
import checkinService from '../../services/checkinService';
import Checkbox from '../../components/Checkbox/Checkbox';

const Checkin = () => {
  const name = useForm();
  const amountChilds = useForm();
  const nameChilds = useForm();
  const teacher = useForm();
  const currentDateTime = new Date().toLocaleString();
  const [form, setForm] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.validate() &&
      amountChilds.validate() &&
      nameChilds.validate() &&
      teacher.checkbox.length
    ) {
      console.log(teacher.checkbox.join(' e '));
      checkinService({
        name: name.value,
        amountChilds: amountChilds.value,
        nameChilds: nameChilds.value,
        teacher: teacher.checkbox.join(' e '),
        currentDateTime: currentDateTime,
      }).addToExcel();
      setForm(true);
    }
  };

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
        <p>Professor (Selecione no mínimo um)</p>
        <Checkbox options={['Lídia', 'Silvia', 'Outro']} {...teacher} />
        <Button disabled form={form}>
          {form ? 'Dados Enviado...' : 'Enviar'}
        </Button>
      </form>
    </>
  );
};

export default Checkin;

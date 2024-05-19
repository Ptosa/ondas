import React from 'react';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import useForm from '../../hooks/useForm/useForm';
import Input from '../../components/Input/Input';
import styles from './RegisterForm.module.css';
import Button from '../../components/Button/Button';
import chamadaService from '../../services/chamadaService';
import DataSent from '../../components/DataSent/DataSent';

const RegisterForm = () => {
  const name = useForm();
  const contact = useForm('');
  const hour = useForm();
  const classOneDate = useForm();
  const classOneTeacher = useForm();
  const token = useForm();
  const childs = useForm();
  const classTwoDate = useForm();
  const classTwoTeacher = useForm();
  const classThreeDate = useForm();
  const classThreeTeacher = useForm();
  const fitToServe = useForm();
  const classFourDate = useForm();
  const shift = useForm();
  const conclude = useForm();
  const ministry = useForm();
  const personality = useForm();
  const gifts = useForm();
  const birthday = useForm();
  const birthyear = useForm();
  const age = useForm();
  const acceptJesus = useForm();
  const whenAcceptJesus = useForm();
  const whereAcceptJesus = useForm();
  const address = useForm();
  const howMeetIlan = useForm();
  const introducedIlan = useForm();
  const baptized = useForm();
  const whenBaptized = useForm();
  const whereBaptized = useForm();
  const wantsBaptize = useForm();
  const meetIn = useForm();
  const meetedIn = useForm();
  const [dataChamada, setDataChamada] = React.useState('');
  let objectsArray;
  const [form, setForm] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.validate()) {
      console.log(name.value);
      console.log(contact.value);
      console.log(hour.value);
      console.log(classOneDate.value);
      console.log(classOneTeacher.value);
      console.log(token.value);
      console.log(childs.value);
      console.log(classTwoDate.value);
      console.log(classTwoTeacher.value);
      console.log(classThreeDate.value);
      console.log(classThreeTeacher.value);
      console.log(fitToServe.value);
      console.log(classFourDate.value);
      console.log(shift.value);
      console.log(conclude.value);
      console.log(ministry.value);
      console.log(personality.value);
      console.log(gifts.value);
      console.log(birthday.value);
      console.log(birthyear.value);
      console.log(age.value);
      console.log(acceptJesus.value);
      console.log(whenAcceptJesus.value);
      console.log(whereAcceptJesus.value);
      console.log(address.value);
      console.log(howMeetIlan.value);
      console.log(introducedIlan.value);
      console.log(baptized.value);
      console.log(whenBaptized.value);
      console.log(whereBaptized.value);
      console.log(wantsBaptize.value);
      console.log(meetIn.value);
      console.log(meetedIn.value);
      chamadaService({
        name: name.value,
        contact: contact.value,
        hour: hour.value,
        classOneDate: classOneDate.value,
        classOneTeacher: classOneTeacher.value,
        token: token.value,
        childs: childs.value,
        classTwoDate: classTwoDate.value,
        classTwoTeacher: classTwoTeacher.value,
        classThreeDate: classThreeDate.value,
        classThreeTeacher: classThreeTeacher.value,
        fitToServe: fitToServe.value,
        classFourDate: classFourDate.value,
        shift: shift.value,
        conclude: conclude.value,
        ministry: ministry.value,
        personality: personality.value,
        gifts: gifts.value,
        birthday: birthday.value,
        birthyear: age.value,
        age: age.value,
        acceptJesus: acceptJesus.value,
        whenAcceptJesus: whenAcceptJesus.value,
        whereAcceptJesus: whereAcceptJesus.value,
        address: address.value,
        howMeetIlan: howMeetIlan.value,
        introducedIlan: introducedIlan.value,
        baptized: baptized.value,
        whenBaptized: whenBaptized.value,
        whereBaptized: whereBaptized.value,
        wantsBaptize: wantsBaptize.value,
        meetIn: meetIn.value,
        meetedIn: meetedIn.value,
      }).updateToExcel();
      setForm(true);
      // const data = await chamadaService({
      //   name: name.value,
      // }).dataToExcel();
      // setDataChamada(JSON.parse(data));
      // const dataInitial = await chamadaService({
      //   name: name.value,
      // }).dataInitial();
    }
  };

  if (dataChamada.data) {
    objectsArray = {
      name: dataChamada.data[1],
      contact: dataChamada.data[2],
      hour: dataChamada.data[3],
      classOneDate: dataChamada.data[5],
      classOneTeacher: dataChamada.data[6],
      token: dataChamada.data[7],
      childs: dataChamada.data[8],
      classTwoDate: dataChamada.data[9],
      classTwoTeacher: dataChamada.data[10],
      classThreeDate: dataChamada.data[11],
      classThreeTeacher: dataChamada.data[12],
      fitToServe: dataChamada.data[13],
      classFourDate: dataChamada.data[14],
      shift: dataChamada.data[15],
      conclude: dataChamada.data[16],
      ministry: dataChamada.data[17],
      personality: dataChamada.data[18],
      gifts: dataChamada.data[19],
      birthday: dataChamada.data[20],
      birthyear: dataChamada.data[21],
      age: dataChamada.data[22],
      acceptJesus: dataChamada.data[23],
      whenAcceptJesus: dataChamada.data[24],
      whereAcceptJesus: dataChamada.data[25],
      address: dataChamada.data[26],
      howMeetIlan: dataChamada.data[27],
      introducedIlan: dataChamada.data[28],
      baptized: dataChamada.data[29],
      whenBaptized: dataChamada.data[30],
      whereBaptized: dataChamada.data[31],
      wantsBaptize: dataChamada.data[32],
      meetIn: dataChamada.data[33],
      meetedIn: dataChamada.data[34],
    };
  }

  console.log(dataChamada.data);
  console.log(objectsArray);
  if (form) return <DataSent />;
  return (
    <>
      <Head
        title="Ondas - Ilan Church | Cadastro"
        description="Essa é a página Cadastro."
      />
      <Title>Cadastro</Title>
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
          label="Contato"
          id="contact"
          placeholder="Seu contato."
          type="text"
          {...contact}
        />
        <Input
          label="Hora"
          id="hour"
          placeholder="Sua hora."
          type="text"
          {...hour}
        />
        <Input
          label="Data aula 01"
          id="classOneDate"
          placeholder="Data aula 01."
          type="text"
          {...classOneDate}
        />
        <Input
          label="Nome professor aula 01"
          id="classOneTeacher"
          placeholder="Nome do professor aula 01."
          type="text"
          {...classOneTeacher}
        />
        <Input
          label="Ficha"
          id="token"
          placeholder="Ficha aluno."
          type="text"
          {...token}
        />
        <Input
          label="Filhos"
          id="childs"
          placeholder="Filhos."
          type="text"
          {...childs}
        />
        <Input
          label="Data aula 02"
          id="classTwoDate"
          placeholder="Data aula 02."
          type="text"
          {...classTwoDate}
        />
        <Input
          label="Nome professor aula 02"
          id="classTwoTeacher"
          placeholder="Nome do professor aula 02."
          type="text"
          {...classTwoTeacher}
        />
        <Input
          label="Data aula 03"
          id="classThreeDate"
          placeholder="Data aula 03."
          type="text"
          {...classThreeDate}
        />
        <Input
          label="Nome professor aula 03"
          id="classThreeTeacher"
          placeholder="Nome do professor aula 03."
          type="text"
          {...classThreeTeacher}
        />
        <Input
          label="Apto para servir ?"
          id="fitToServe"
          placeholder="Apto para servir ?."
          type="text"
          {...fitToServe}
        />
        <Input
          label="Data aula 04"
          id="classFourDate"
          placeholder="Data aula 04."
          type="text"
          {...classFourDate}
        />
        <Input
          label="Turno"
          id="shift"
          placeholder="Turno"
          type="text"
          {...shift}
        />
        <Input
          label="Concluido"
          id="concluded"
          placeholder="Concluido ?."
          type="text"
          {...conclude}
        />
        <Input
          label="Ministerio"
          id="ministry"
          placeholder="Ministerio ?."
          type="text"
          {...ministry}
        />
        <Input
          label="Personalidade"
          id="personality"
          placeholder="Personalidade."
          type="text"
          {...personality}
        />
        <Input
          label="Dons"
          id="gifts"
          placeholder="Dons"
          type="text"
          {...gifts}
        />
        <Input
          label="Data de nascimento mes/dia"
          id="birthday"
          placeholder="Sua data mes/dia."
          type="text"
          {...birthday}
        />
        <Input
          label="Ano de nascimento"
          id="birthyear"
          placeholder="Seu ano de nascimento."
          type="text"
          {...birthyear}
        />
        <Input
          label="Idade"
          id="age"
          placeholder="Sua idade."
          type="text"
          {...age}
        />
        <Input
          label="Aceitou Jesus ?"
          id="acceptJesus"
          placeholder="Aceitou Jesus ?."
          type="text"
          {...acceptJesus}
        />
        <Input
          label="Quando aceitou Jesus ?"
          id="whenAcceptJesus"
          placeholder="Quando ?."
          type="text"
          {...whenAcceptJesus}
        />
        <Input
          label="Onde aceitou Jesus ?"
          id="whereAcceptJesus"
          placeholder="Onde ?."
          type="text"
          {...whereAcceptJesus}
        />
        <Input
          label="Endereço"
          id="address"
          placeholder="Seu endereço."
          type="text"
          {...address}
        />
        <Input
          label="Como conheceu ilan ?"
          id="howMeetIlan"
          placeholder="Como ?."
          type="text"
          {...howMeetIlan}
        />
        <Input
          label="Apresentado na Ilan ?"
          id="introducedIlan"
          placeholder="Apresentado ?."
          type="text"
          {...introducedIlan}
        />
        <Input
          label="Batizado ?"
          id="baptized"
          placeholder="Batizado ?."
          type="text"
          {...baptized}
        />
        <Input
          label="Quando foi batizado ?"
          id="whenBaptized"
          placeholder="Quando ?."
          type="text"
          {...whenBaptized}
        />
        <Input
          label="Onde foi batizado ?"
          id="whereBaptized"
          placeholder="Onde ?"
          type="text"
          {...whereBaptized}
        />
        <Input
          label="Quer ser batizado ?"
          id="wantsBaptize"
          placeholder="Quer ?."
          type="text"
          {...wantsBaptize}
        />
        <Input
          label="Apresentar em ?"
          id="meetIn"
          placeholder="Em ?."
          type="text"
          {...meetIn}
        />
        <Input
          label="Apresentado em ?"
          id="meetedIn"
          placeholder="Em ?."
          type="text"
          {...meetedIn}
        />
        <Button>Alterar ou Adicionar</Button>

        <div className={`${styles.table}`}>
          {dataChamada && <h2>Dados da planilha Chamada</h2>}
          <table>
            <thead>
              <tr>
                {dataChamada &&
                  dataChamada.columnNames.map((col, index) => (
                    <th key={index} scope="col">
                      {col}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {objectsArray && (
                <tr>
                  <th scope="col">{objectsArray.name}</th>
                  <td>{objectsArray.contact}</td>
                  <td>{objectsArray.hour}</td>
                  <td></td>
                  <td>{objectsArray.classOneDate}</td>
                  <td>{objectsArray.classOneTeacher}</td>
                  <td>{objectsArray.token}</td>
                  <td>{objectsArray.childs}</td>
                  <td>{objectsArray.classTwoDate}</td>
                  <td>{objectsArray.classTwoTeacher}</td>
                  <td>{objectsArray.classThreeDate}</td>
                  <td>{objectsArray.classThreeTeacher}</td>
                  <td>{objectsArray.fitToServe}</td>
                  <td>{objectsArray.classFourDate}</td>
                  <td>{objectsArray.shift}</td>
                  <td>{objectsArray.conclude}</td>
                  <td>{objectsArray.ministry}</td>
                  <td>{objectsArray.personality}</td>
                  <td>{objectsArray.gifts}</td>
                  <td>{objectsArray.birthday}</td>
                  <td>{objectsArray.birthyear}</td>
                  <td>{objectsArray.age}</td>
                  <td>{objectsArray.acceptJesus}</td>
                  <td>{objectsArray.whenAcceptJesus}</td>
                  <td>{objectsArray.whereAcceptJesus}</td>
                  <td>{objectsArray.address}</td>
                  <td>{objectsArray.howMeetIlan}</td>
                  <td>{objectsArray.introducedIlan}</td>
                  <td>{objectsArray.baptized}</td>
                  <td>{objectsArray.whenBaptized}</td>
                  <td>{objectsArray.whereBaptized}</td>
                  <td>{objectsArray.wantsBaptize}</td>
                  <td>{objectsArray.meetIn}</td>
                  <td>{objectsArray.meetedIn}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

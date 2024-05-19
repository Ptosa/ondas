import React from 'react';
import Head from '../../hooks/Head/Head';
import Title from '../../components/Title/Title';
import useForm from '../../hooks/useForm/useForm';
import styles from './FindPeopleChamada.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import chamadaService from '../../services/chamadaService';

const FindPeopleChamada = () => {
  const name = useForm();
  const [dataChamada, setDataChamada] = React.useState();
  let objectsArray;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.validate()) {
      const dataInitial = await chamadaService({
        name: name.value,
      }).dataInitial();
      setDataChamada(JSON.parse(dataInitial));
    }
  };

  if (dataChamada) {
    objectsArray = dataChamada.results.map((objet) => {
      return {
        name: objet.data[1],
        contact: objet.data[2],
        hour: objet.data[3],
        classOneDate: objet.data[5],
        classOneTeacher: objet.data[6],
        token: objet.data[7],
        childs: objet.data[8],
        classTwoDate: objet.data[9],
        classTwoTeacher: objet.data[10],
        classThreeDate: objet.data[11],
        classThreeTeacher: objet.data[12],
        fitToServe: objet.data[13],
        classFourDate: objet.data[14],
        shift: objet.data[15],
        conclude: objet.data[16],
        ministry: objet.data[17],
        personality: objet.data[18],
        gifts: objet.data[19],
        birthday: objet.data[20],
        birthyear: objet.data[21],
        age: objet.data[22],
        acceptJesus: objet.data[23],
        whenAcceptJesus: objet.data[24],
        whereAcceptJesus: objet.data[25],
        address: objet.data[26],
        howMeetIlan: objet.data[27],
        introducedIlan: objet.data[28],
        baptized: objet.data[29],
        whenBaptized: objet.data[30],
        whereBaptized: objet.data[31],
        wantsBaptize: objet.data[32],
        meetIn: objet.data[33],
        meetedIn: objet.data[34],
      };
    });
  }

  return (
    <>
      <Head
        title="Ondas - Ilan Church | Buscar Pessoa Chamada"
        description="Essa é a página Buscar Pessoa Chamada."
      />
      <Title>Buscar Pessoa Chamada</Title>
      <form className={`${styles.form} container`} onSubmit={handleSubmit}>
        <Input
          label="Busque pelo primeiro nome."
          id="name"
          required
          placeholder="Primeiro nome exemplo: Gabriel."
          type="text"
          {...name}
        />
        <Button>Buscar</Button>
        <div className={`${styles.table}  container`}>
          <table>
            <thead>
              <tr>
                {dataChamada &&
                  dataChamada.columnNames.map((col) => {
                    return (
                      <>
                        <th scope="col">{col}</th>
                      </>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {objectsArray &&
                objectsArray.map((objets, index) => {
                  return (
                    <>
                      <tr>
                        <th key={index} scope="col">
                          {objets.name}
                        </th>
                        <td>{objets.contact}</td>
                        <td>{objets.hour}</td>
                        <td></td>
                        <td>{objets.classOneDate}</td>
                        <td>{objets.classOneTeacher}</td>
                        <td>{objets.token}</td>
                        <td>{objets.childs}</td>
                        <td>{objets.classTwoDate}</td>
                        <td>{objets.classTwoTeacher}</td>
                        <td>{objets.classThreeDate}</td>
                        <td>{objets.classThreeTeacher}</td>
                        <td>{objets.fitToServe}</td>
                        <td>{objets.classFourDate}</td>
                        <td>{objets.shift}</td>
                        <td>{objets.conclude}</td>
                        <td>{objets.ministry}</td>
                        <td>{objets.personality}</td>
                        <td>{objets.gifts}</td>
                        <td>{objets.birthday}</td>
                        <td>{objets.birthyear}</td>
                        <td>{objets.age}</td>
                        <td>{objets.acceptJesus}</td>
                        <td>{objets.whenAcceptJesus}</td>
                        <td>{objets.whereAcceptJesus}</td>
                        <td>{objets.address}</td>
                        <td>{objets.howMeetIlan}</td>
                        <td>{objets.introducedIlan}</td>
                        <td>{objets.baptized}</td>
                        <td>{objets.whenBaptized}</td>
                        <td>{objets.whereBaptized}</td>
                        <td>{objets.wantsBaptize}</td>
                        <td>{objets.meetIn}</td>
                        <td>{objets.meetedIn}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </form>
      {console.log(dataChamada)}
    </>
  );
};

export default FindPeopleChamada;

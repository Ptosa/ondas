import React from 'react';
import Button from '../Button/Button';
import checkinService from '../../services/checkinService';
import styles from './CheckinData.module.css';
import chamadaService from '../../services/chamadaService';

const CheckinData = () => {
  const [col, setCol] = React.useState();
  const [dataCheckin, setDataCheckin] = React.useState();
  let objectsArray;
  let morningArray;
  let afternoonArray;
  let afternoonChilds;
  let morningChilds;
  let afternoonPeople = {};
  let totalAfternoonPeople = 0;
  let morningPeople = {};
  let totalMorningPeople = 0;

  if (dataCheckin) {
    objectsArray = dataCheckin.map((arr) => {
      return {
        name: arr[0],
        dateHour: arr[1],
        hour: +arr[1].split(',')[1].slice(1, 3),
        childs: arr[2],
        childsName: arr[3],
        teacher: arr[4],
        numberOfClass: arr[5],
      };
    });
    afternoonArray = objectsArray.filter((arr) => {
      return arr.hour > 17;
    });
    morningArray = objectsArray.filter((arr) => {
      return arr.hour < 17;
    });
    if (afternoonArray.length) {
      // Pega quantidade de filhos
      afternoonChilds = afternoonArray
        .map((arr) => {
          return arr.childs;
        })
        .reduce((acumulador, atual) => acumulador + atual, 0);

      // Pega quantidade de pessoas
      afternoonArray.forEach((afternoon) => {
        if (!afternoonPeople[afternoon.name]) {
          afternoonPeople[afternoon.name] = true;
          totalAfternoonPeople++;
        }
      });
    }
    if (morningArray.length) {
      // Pega quantidade de filhos
      morningChilds = morningArray
        .map((arr) => {
          return arr.childs;
        })
        .reduce((acumulador, atual) => acumulador + atual);

      // Pega quantidade de pessoas
      morningArray.forEach((morning) => {
        if (!morningPeople[morning.name]) {
          morningPeople[morning.name] = true;
          totalMorningPeople++;
        }
      });
    }
  }

  let i = 0;
  return (
    <section>
      <div className={`${styles.actions}`}>
        <h2>Ações da Planilha Checkin</h2>
        <Button
          onClick={async () =>
            console.log(await checkinService().updateChamadaExcel())
          }
        >
          Atualizar dados checkin para planilha chamada
        </Button>
        <Button
          onClick={async () => {
            const dadosJson = await checkinService().dataCheckinExcel();
            setDataCheckin(dadosJson.slice(1));
            setCol(dadosJson[0]);
          }}
        >
          Mostrar dados Excel Checkin
        </Button>
        <Button onClick={() => checkinService().downloadExcel()}>
          Download Dados Excel Checkin
        </Button>
      </div>

      <div className={`${styles.actions}`}>
        <h2>Ações diversas</h2>
        <Button
          onClick={async () => {
            await fetch('http://localhost:5000/generateDocs');
          }}
        >
          Filtrar pessoas ministerios
        </Button>
        <Button
          onClick={() => {
            chamadaService().downloadExcel();
          }}
        >
          Download Dados Excel Chamada
        </Button>
      </div>
      <div className={`${styles.data}`}>
        {col && (
          <>
            <h2>Todos os alunos da Planilha Checkin</h2>
            <table>
              <thead>
                <tr>
                  {col.map((colName, index) => (
                    <th scope="col" key={colName + index}>
                      {colName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {objectsArray.map((objets, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="col" key={objets.name + index}>
                          {objets.name}
                        </th>
                        <td>{objets.dateHour}</td>
                        <td>{objets.childs}</td>
                        <td>{objets.childsName}</td>
                        <td>{objets.teacher}</td>
                        <td>{objets.numberOfClass}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {afternoonArray && morningArray && (
          <>
            <div className={`${styles.table}`}>
              <h1>Tabela somente de alunos a tarde</h1>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Filhos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {afternoonArray.map(({ name, childs }, index) => {
                      return (
                        <>
                          <tr>
                            <th key={name + index}>{name}</th>
                            <td>{childs}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>Total filhos</th>
                      <td>Total alunos</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{afternoonChilds}</th>
                      <td>{totalAfternoonPeople}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={`${styles.table}`}>
              <h1>Tabela somente de alunos manhã</h1>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Filhos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {morningArray.map(({ name, childs }, index) => {
                      return (
                        <>
                          <tr>
                            <th key={name + index}>{name}</th>
                            <td>{childs}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>Total filhos</th>
                      <td>Total alunos</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{morningChilds}</th>
                      <td>{totalMorningPeople}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CheckinData;

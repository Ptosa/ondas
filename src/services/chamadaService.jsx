const chamadaService = (props) => {
  const updateToExcel = () => {
    fetch(
      'https://ondasback-production.up.railway.app/updateChamadaExcelFromRegisterForm',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
      },
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };
  const downloadExcel = async () => {
    try {
      const response = await fetch(
        'https://ondasback-production.up.railway.app/downloadChamadaExcel',
      );
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'chamadaTeste.xlsx';
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erro ao baixar o arquivo XLSX:', error);
      alert('Erro ao baixar o arquivo XLSX.');
    }
  };
  const dataToExcel = async () => {
    const response = await fetch(
      'https://ondasback-production.up.railway.app/dataChamadaExcelFromRegisterForm',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
      },
    );
    const data = await response.text();
    return data;
  };

  const dataInitial = async () => {
    const response = await fetch(
      'https://ondasback-production.up.railway.app/dataChamadaExcelFromRegisterFormInitial',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props),
      },
    );
    const data = await response.text();
    return data;
  };

  return {
    downloadExcel,
    updateToExcel,
    dataToExcel,
    dataInitial,
  };
};

export default chamadaService;

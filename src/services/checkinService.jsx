const checkinService = (props) => {
  const addToExcel = () => {
    fetch('https://ondasback-production.up.railway.app/addCheckinExcel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    })
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
        'https://ondasback-production.up.railway.app/downloadCheckinExcel',
      );
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'checkinTeste.xlsx';
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erro ao baixar o arquivo XLSX:', error);
      alert('Erro ao baixar o arquivo XLSX.');
    }
  };

  const dataCheckinExcel = async () => {
    const response = await fetch(
      'https://ondasback-production.up.railway.app/dataCheckinExcel',
    );
    const json = await response.json();
    return json;
  };

  const updateChamadaExcel = async () => {
    const response = await fetch(
      'https://ondasback-production.up.railway.app/updateChamadaExcel',
    );
    return 'Atualizado';
  };
  return {
    addToExcel,
    downloadExcel,
    dataCheckinExcel,
    updateChamadaExcel,
  };
};

export default checkinService;

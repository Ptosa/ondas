import React from 'react';

const types = {
  telephone: {
    regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/,
    message: 'Telefone inválido.',
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Email inválido.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  const [inputBorderColor, setInputBorderColor] = React.useState('');
  const [checkbox, setCheckbox] = React.useState([]);
  const [data, setData] = React.useState();

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor pois este campo é obrigatório.');
      setInputBorderColor('red');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      setInputBorderColor('red');
      return false;
    } else {
      setError(null);
      setInputBorderColor('green');
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  const onChangeCheckbox = ({ target }) => {
    if (target.checked) {
      setCheckbox([...checkbox, target.value]);
    } else {
      setCheckbox(
        checkbox.filter((itemCheckbox) => itemCheckbox !== target.value),
      );
    }
  };

  const onClick = (event) => {
    if (event.target.id === 'name') {
      async function planilhaDadosName() {
        const response = await fetch(
          'https://ondasback-production.up.railway.app/names',
        );
        const dataInJson = await response.json();
        setData(dataInJson);
      }
      planilhaDadosName();
    }
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
    inputBorderColor,
    checkbox,
    setCheckbox,
    onChangeCheckbox,
    onClick,
    data,
  };
};

export default useForm;

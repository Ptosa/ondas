import React from 'react';
import styles from './InputRadio.module.css';

const InputRadio = ({ options, value, onChange, inputBorderColor, error }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <>
            <label key={option.id} className={`${styles.label}`}>
              <input
                type="radio"
                value={option.name}
                checked={value === option.name}
                onChange={onChange}
              />
              {option.name}
            </label>
          </>
        );
      })}
      {error ? (
        <p className={`formError`}>{error}</p>
      ) : (
        <p className={`formError`}></p>
      )}
    </>
  );
};

export default InputRadio;

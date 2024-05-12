import React from 'react';
import styles from './Input.module.css';

const Input = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
  inputBorderColor,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
        className={styles.input}
        style={{ borderColor: inputBorderColor }}
      />
      {error ? (
        <p className={`formError`}>{error}</p>
      ) : (
        <p className={`formError`}></p>
      )}
    </>
  );
};

export default Input;

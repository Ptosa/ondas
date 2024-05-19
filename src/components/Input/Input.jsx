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
  onClick,
  data,
  setValue,
  setData,
}) => {
  const dropdown = React.useRef();
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
        onClick={onClick}
        className={styles.input}
        style={{ borderColor: inputBorderColor }}
      />
      {data && (
        <div className={`dropdown`} ref={dropdown}>
          {data
            .filter((data) => {
              const searchTerm = value.toLowerCase();
              const labelName = data.label.toLowerCase();

              return searchTerm && labelName.startsWith(searchTerm);
            })
            .map((object, index) => (
              <li
                key={index}
                onClick={({ target }) => {
                  setValue(target.innerText);
                  console.log(
                    (dropdown.current.querySelector('li').style.display =
                      'none'),
                  );
                }}
              >
                {object.label}
              </li>
            ))}
        </div>
      )}
      {error ? (
        <p className={`formError`}>{error}</p>
      ) : (
        <p className={`formError`}></p>
      )}
    </>
  );
};

export default Input;

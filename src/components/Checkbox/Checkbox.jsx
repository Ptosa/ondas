import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ options, checkbox, setCheckbox, onChangeCheckbox }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <label className={`${styles.label}`} key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={onChangeCheckbox}
              checked={checkbox.includes(option)}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;

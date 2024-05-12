import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, form, ...props }) => {
  return (
    <>
      <button
        className={styles.button}
        {...props}
        disabled={form ? true : false}
        style={
          form
            ? { backgroundColor: 'green', color: '#fff' }
            : { backgroundColor: '#83ADBE' }
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;

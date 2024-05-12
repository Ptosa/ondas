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
            ? { backgroundColor: 'green', color: '#fff', marginTop: '20px' }
            : { backgroundColor: '#83ADBE', marginTop: '20px' }
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;

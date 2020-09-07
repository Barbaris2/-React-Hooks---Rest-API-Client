import React, { useContext, useEffect } from 'react';
import { validation } from '../services/validator';

const Input = props => {
  const {
    type = 'text',
    value,
    onChange,
    placeholder,
    validType,
    touched
  } = props;

  const id = Date.now() + Math.random();

  const stateValid = type && touched ? validation(value, validType) : '';

  let className = 'form-control ml-1';

  const { isValid, errorMessage } = stateValid;

  if (stateValid) {
    if (isValid === false) {
      className += ' is-invalid';
    } else if (isValid === true) {
      className += ' is-valid';
    } else {
      className = 'form-control ml-1';
    }
  }

  return (
    <>
      <input
        id={id}
        type={type}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />

      {isValid ? null : <div className='invalid-feedback'>{errorMessage}</div>}
    </>
  );
};

export default Input;

import React from 'react';

const Select = props => {
  const { value, onChange, className, children } = props;

  const id = Date.now() + Math.random();

  return (
    <select className={className} onChange={onChange} value={value} id={id}>
      {children}
    </select>
  );
};

export default Select;

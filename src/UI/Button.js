import React from 'react';

const Buttom = props => {
  const {
    onClick,
    className,
    disabled,
    onMouseEnter,
    hidden,
    children,
    name
  } = props;

  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      hidden={hidden}
      name={name}
    >
      {children}
    </button>
  );
};

export default Buttom;

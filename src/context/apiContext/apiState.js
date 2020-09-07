import React, { useState } from 'react';
import { ApiContext } from './apiContext';

export const ApiState = ({ children }) => {
  const [URL, setURL] = useState('https:');

  return (
    <ApiContext.Provider value={{ URL, setURL }}>
      {children}
    </ApiContext.Provider>
  );
};

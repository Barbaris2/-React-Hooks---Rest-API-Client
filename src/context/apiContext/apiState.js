import React, { useState } from 'react';
import { ApiContext } from './apiContext';

export const ApiState = ({ children }) => {
  const [URL, setURL] = useState('');
  const [method, setMethod] = useState('get');
  const [apiHeaders, setApiHeaders] = useState({
    'Content-type': 'application/json'
  });
  const [apiBody, setApiBody] = useState({});

  return (
    <ApiContext.Provider
      value={{
        URL,
        setURL,
        method,
        setMethod,
        apiHeaders,
        setApiHeaders,
        apiBody,
        setApiBody
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

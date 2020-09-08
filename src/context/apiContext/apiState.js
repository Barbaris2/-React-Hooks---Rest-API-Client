import React, { useState } from 'react';
import { ApiContext } from './apiContext';

export const ApiState = ({ children }) => {
  const [URL, setURL] = useState(
    'https://jsonplaceholder.typicode.com/users/1/albums'
  );
  const [method, setMethod] = useState('get');
  const [apiHeaders, setApiHeaders] = useState({
    'Content-type': 'application/json'
  });

  const [apiBody, setApiBody] = useState({});

  const [apiResponse, setApiResponse] = useState();
  const [apiData, setApiData] = useState();

  const ls = localStorage.getItem('history') || [];

  const [history, setHistory] = useState(JSON.parse(ls));

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
        setApiBody,
        apiResponse,
        setApiResponse,
        apiData,
        setApiData,
        history,
        setHistory
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

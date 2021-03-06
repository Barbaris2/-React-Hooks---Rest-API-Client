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

  const [apiResponseHeaders, setApiResponseHeaders] = useState();
  const [apiResponse, setApiResponse] = useState();
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);

  let ls = localStorage.getItem('history');

  if (ls === null) {
    ls = [];
  } else {
    ls = JSON.parse(ls);
  }

  const [history, setHistory] = useState(ls);

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
        setHistory,
        apiResponseHeaders,
        setApiResponseHeaders,
        loading,
        setLoading
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

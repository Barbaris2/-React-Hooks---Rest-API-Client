import React, { useContext, useState } from 'react';
import Button from '../UI/Button';
import { ApiContext } from '../context/apiContext/apiContext';
import { AlertContext } from '../context/alert/alertContext';
import { fetchResponse } from '../services/fetchAPI';

const HistoryGroup = () => {
  const { history, setHistory } = useContext(ApiContext);
  const { show } = useContext(AlertContext);
  const [info, setInfo] = useState({});

  const listHistory = renderListHistory(history);

  const clearHistory = () => {
    setHistory([]);
    setInfo({});
    localStorage.removeItem('history');
    show('History was cleare!');
  };

  const infoHandler = id => {
    const historyItem = history.filter(item => {
      return item.id === id;
    });

    setInfo(historyItem[0]);
  };

  const repeatHandler = async id => {
    const historyItem = history.filter(item => {
      return item.id === id;
    });

    console.log(historyItem[0]);

    const { URL, method, requestBody, requestHeaders } = historyItem[0];

    const request = { URL, method, requestBody, requestHeaders };
    try {
      const result = await fetchResponse(request);

      if (result.response.ok) {
        show(`Success! Status: ${result.response.status}`, 'success');
      } else {
        show(`Error! Status: ${result.response.status}`, 'danger');
      }
    } catch (error) {
      console.log('Возникла проблема с запросом', error);
      show(`Error! Status: ${error}`, 'danger');
    }
  };

  function renderListHistory(history) {
    return history.map(item => {
      const { id, URL, method, status } = item;
      return (
        <div className='d-flex history-item' key={id}>
          <p>ID: {id}</p>
          <div className='history-get'>{method}</div>{' '}
          <div className='history-status d-flex'>
            <p>
              <strong>Status:</strong> {status}
            </p>
          </div>
          <div className='history-url'>
            <p>
              <strong> URL: </strong> {URL}
            </p>
          </div>
          <div className='history-repeat'>
            <i className='fas fa-redo' onClick={() => repeatHandler(id)}></i>
          </div>
          <div className='history-info'>
            <i className='fas fa-info' onClick={() => infoHandler(id)}></i>
          </div>
        </div>
      );
    });
  }
  return (
    <div className='history-container'>
      {listHistory}{' '}
      <div className='btn-clear-history col'>
        <Button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => clearHistory()}
        >
          Clear history
        </Button>
      </div>
      <div className='history-request-group'>
        <h6 style={{ marginTop: '10px' }}>
          Information about request ID:{info.id}
        </h6>

        <div className='response-headers'>
          <h6 style={{ marginTop: '10px' }}>Request headers:</h6>
          <div className='overflow-auto bg-light'>
            <pre>{JSON.stringify(info.requestHeaders, null, 2)}</pre>
          </div>
        </div>
        <div className='request-data'>
          <h6>Request data:</h6>
          <div className='overflow-auto bg-light'>
            <pre>{JSON.stringify(info.requestBody, null, 2)}</pre>
          </div>
        </div>

        <div className='response-headers'>
          <h6 style={{ marginTop: '10px' }}>Response headers:</h6>
          <div className='overflow-auto bg-light'>
            <pre>{JSON.stringify(info.responseHeaders, null, 2)}</pre>
          </div>
        </div>
        <div className='response-data'>
          <h6>Response data:</h6>
          <div className='overflow-auto bg-light'>
            <pre>{JSON.stringify(info.responseData, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryGroup;

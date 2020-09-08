import React, { useContext } from 'react';
import Button from '../UI/Button';
import { ApiContext } from '../context/apiContext/apiContext';

const HistoryGroup = () => {
  const { history, setHistory } = useContext(ApiContext);

  history.map(item => {
    const { id, request, response, responseData } = item;
  });

  const listHistory = renderListHistory(history);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('history');
  };

  const repeatHandler = async id => {
    console.log(id);
    const historyItem = history.filter(item => {
      return item.id === id;
    });
    console.log(historyItem);
    // const request = { URL, method, apiBody, apiHeaders };
    // try {
    //   const result = await fetchResponse(request);

    //   if (result.response.ok) {
    //     show(`Success! Status: ${result.response.status}`, 'success');
    //   } else {
    //     show(`Error! Status: ${result.response.status}`, 'danger');
    //   }

    // } catch (error) {
    //   console.log('Возникла проблема с запросом', error);
    //   show(`Error! Status: ${error}`, 'danger');
    // }
  };

  function renderListHistory(history) {
    return history.map((item, index) => {
      const { id, request, response, responseData } = item;
      return (
        <div className='d-flex history-item' key={id}>
          <p>{index + 1}</p>
          <div className='history-get'>{request.method}</div>{' '}
          <div className='history-status d-flex'>
            <p>
              <strong>Status:</strong> {response.status}
            </p>
          </div>
          <div className='history-url'>
            <p>
              <strong> URL: </strong> {request.URL}
            </p>
          </div>
          <div className='history-repeat'>
            <i className='fas fa-redo' onClick={() => repeatHandler(id)}></i>
          </div>
          <div className='history-info'>
            <i className='fas fa-info'></i>
          </div>
        </div>
      );
    });
  }
  return (
    <div className='history-container'>
      {listHistory}{' '}
      <div className='btn-clear-history'>
        <Button
          type='button'
          className='btn btn-outline-secondary'
          onClick={() => clearHistory()}
        >
          Clear history
        </Button>
      </div>
    </div>
  );
};

export default HistoryGroup;

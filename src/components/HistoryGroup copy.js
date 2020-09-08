import React, { useContext } from 'react';
import { ApiContext } from '../context/apiContext/apiContext';

const HistoryGroup = () => {
  const { history } = useContext(ApiContext);

  console.log(history);

  history.map(item => {
    const { id, request, response, responseData } = item;
  });

  const listHistory = renderListHistory(history);

  function renderListHistory(history) {
    return history.map((item, index) => {
      const { id, request, response, responseData } = item;
      return (
        // <div className='row'>
        //   <div className='col-sm-8'>
        //     <div className='d-flex history-item'>
        //       <p>{index + 1}</p>
        //       <div className='history-get'>{request.method}</div>
        //     </div>
        //   </div>
        //   <div className='col-sm-4'>
        //     <button>repeat</button>
        //   </div>
        // </div>

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
            <i className='fas fa-redo'></i>
          </div>
          <div className='history-info'>
            <i className='fas fa-info'></i>
          </div>
        </div>
      );
    });
  }
  return <>{listHistory}</>;
};

export default HistoryGroup;

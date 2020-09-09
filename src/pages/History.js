import React, { useContext } from 'react';
import HistoryGroup from '../components/HistoryGroup';
import { ApiContext } from '../context/apiContext/apiContext';

export const History = () => {
  const { history } = useContext(ApiContext);
  return (
    <div className='history-group'>
      {history[0] === undefined ? (
        <p className='history-empty'>History Empty</p>
      ) : (
        <HistoryGroup />
      )}
    </div>
  );
};

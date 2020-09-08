import React, { useContext } from 'react';
import { ApiContext } from '../context/apiContext/apiContext';

const ResponseGroup = () => {
  const { apiData } = useContext(ApiContext);
  return (
    <div className='response-group'>
      <div className='response-status'>
        <h6>Response Status:</h6>
        <div className='overflow-auto bg-light'>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResponseGroup;

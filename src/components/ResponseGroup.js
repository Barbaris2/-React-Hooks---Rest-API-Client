import React, { useContext } from 'react';
import { ApiContext } from '../context/apiContext/apiContext';

const ResponseGroup = () => {
  const { apiData, apiResponseHeaders } = useContext(ApiContext);
  return (
    <div className='response-group'>
      <div className='response-headers'>
        <h6 style={{ marginTop: '10px' }}>Response data:</h6>
        <div className='overflow-auto bg-light'>
          <pre>{JSON.stringify(apiResponseHeaders, null, 2)}</pre>
        </div>
      </div>
      <div className='response-data'>
        <h6>Response data:</h6>
        <div className='overflow-auto bg-light'>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResponseGroup;

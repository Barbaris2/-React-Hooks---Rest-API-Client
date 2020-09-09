import React, { useContext } from 'react';
import InputGroup from '../components/InputGroup';
import OptionsGroup from '../components/OptionsGroup';
import ResponseGroup from '../components/ResponseGroup';
import { Spinner } from 'react-bootstrap';
import { ApiContext } from '../context/apiContext/apiContext';

const Home = () => {
  const { loading } = useContext(ApiContext);
  return (
    <>
      <InputGroup />
      <OptionsGroup />
      {loading ? (
        <div className='loader'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ResponseGroup />
      )}
    </>
  );
};

export default Home;

import React, { useState, useContext } from 'react';
import { ApiContext } from '../context/apiContext/apiContext';
import { AlertContext } from '../context/alert/alertContext';

import { fetchResponse } from '../services/fetchAPI';

import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';

const InputGroup = () => {
  const { show } = useContext(AlertContext);
  const { URL, setURL } = useContext(ApiContext);
  const { method, setMethod } = useContext(ApiContext);
  const { apiBody, apiHeaders } = useContext(ApiContext);
  const { setApiResponse } = useContext(ApiContext);
  const { setApiData } = useContext(ApiContext);
  const { history, setHistory } = useContext(ApiContext);
  const [touched, setTouched] = useState('');

  const onChangeInput = value => {
    let URL = value.trim().toLowerCase();
    setTouched(true);
    setURL(URL);
  };

  const onSubmit = async () => {
    const request = { URL, method, apiBody, apiHeaders };
    try {
      const result = await fetchResponse(request);

      if (result.response.ok) {
        show(`Success! Status: ${result.response.status}`, 'success');
      } else {
        show(`Error! Status: ${result.response.status}`, 'danger');
      }

      setApiResponse(result.response);
      setApiData(result.data);

      const historyItem = {
        id: Math.floor(Math.random() * 1000000),
        request,
        response: result.response,
        responseData: result.data
      };
      const _history = history;
      _history.push(historyItem);
      setHistory(_history);

      localStorage.setItem('history', JSON.stringify(history));
    } catch (error) {
      console.log('Возникла проблема с запросом', error);
      show(`Error! Status: ${error}`, 'danger');
      setApiResponse();
      setApiData();
    }
  };

  return (
    <div className='form-group d-flex mt-5 mr-5 ml-5'>
      <div className='input-group '>
        <Input
          value={URL}
          touched={touched}
          placeholder='Введите URL'
          validType={{ required: true, URL: true }}
          onChange={e => onChangeInput(e.target.value)}
        />
        <Select
          className={'custom-select ml-1'}
          onChange={e => setMethod(e.target.value)}
        >
          <option value='get'>GET</option>
          <option value='post'>POST</option>
          <option value='put'>PUT</option>
          <option value='delete'>DELETE</option>{' '}
        </Select>
        <div className='input-group-append'>
          <Button
            className={'btn btn-outline-primary'}
            type={'submit'}
            onClick={onSubmit}
            // disabled={!isValid}
          >
            SEND
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;

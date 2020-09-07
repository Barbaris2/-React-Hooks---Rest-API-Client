import React, { useState, useContext } from 'react';
import { ApiContext } from '../context/apiContext/apiContext';

import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';

const InputGroup = () => {
  const { URL, setURL } = useContext(ApiContext);
  const { method, setMethod } = useContext(ApiContext);

  const [touched, setTouched] = useState('');

  const onChangeInput = value => {
    let URL = value.trim().toLowerCase();
    setTouched(true);
    setURL(URL);
  };

  const onSubmit = async () => {
    try {
      const fetchResponse = async URL => {
        const response = await fetch(URL);

        if (!response.ok) {
          console.log('Ошибка ответа:', response.status);
        }

        const data = await response.json();
        return { response, data };
      };

      const result = await fetchResponse(URL);
      console.log(result.response);
      console.log(result.data);
    } catch (error) {
      console.log('Возникла проблема с запросом', error);
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

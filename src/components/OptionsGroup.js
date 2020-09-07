import React, { useState, useContext, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ApiContext } from '../context/apiContext/apiContext';

import Input from '../UI/Input';
import Button from '../UI/Button';

const OptionsGroup = () => {
  const [headKey, setHeadKey] = useState('');
  const [headValue, setHeadValue] = useState('');

  const [bodyKey, setBodyKey] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const [listHeaders, setListHeaders] = useState();
  const [listBody, setListBody] = useState();

  const { apiHeaders, setApiHeaders } = useContext(ApiContext);
  const { apiBody, setApiBody } = useContext(ApiContext);

  useEffect(() => {
    const list = renderListHeaders(apiHeaders, 'apiHeadersBtn');
    setListHeaders(list);
    // eslint-disable-next-line
  }, []);

  const onBtnPlus = name => {
    if (name === 'apiHeadersBtn') {
      const headers = apiHeaders;
      headers[headKey] = headValue;
      setApiHeaders(headers);

      const list = renderListHeaders(apiHeaders, name);
      setListHeaders(list);
      setHeadKey('');
      setHeadValue('');
    } else if (name === 'apiBodyBtn') {
      const body = apiBody;
      body[bodyKey] = bodyValue;
      setApiBody(body);

      const list = renderListHeaders(apiBody, name);
      setListBody(list);
      setBodyKey('');
      setBodyValue('');
    }
  };

  const onDeleteHandler = (key, name) => {
    console.log(key, name);
  };

  function renderListHeaders(obj, name) {
    return Object.keys(obj).map((key, index) => {
      const value = Object.values(obj)[index];

      return (
        <div className='d-flex' key={index}>
          <p>{index + 1}. </p> &nbsp;
          <p key={index}>
            <b>{key}</b> : {value}
          </p>
          <i
            className='fa fa-minus'
            onClick={() => onDeleteHandler(key, name)}
          ></i>
        </div>
      );
    });
  }

  return (
    <div className='tab-group'>
      <Tabs defaultActiveKey='headers' transition={false}>
        <Tab eventKey='headers' title='Headers'>
          <div className='d-flex pt-2'>
            <Input
              value={headKey}
              placeholder='NAME'
              onChange={e => setHeadKey(e.target.value)}
            />
            <Input
              value={headValue}
              placeholder='VALUE'
              onChange={e => setHeadValue(e.target.value)}
            />

            <Button
              className={'btn btn-outline-primary ml-1 mr-1 mb-2'}
              type={'button'}
              onClick={() => onBtnPlus('apiHeadersBtn')}
            >
              <i className='fa fa-plus'></i>
            </Button>
          </div>
          <div className='headers-group'>{listHeaders}</div>
        </Tab>
        <Tab eventKey='body' title='Body'>
          <div className='d-flex pt-2'>
            <Input
              value={bodyKey}
              placeholder='KEY'
              onChange={e => setBodyKey(e.target.value)}
            />
            <Input
              value={bodyValue}
              placeholder='VALUE'
              onChange={e => setBodyValue(e.target.value)}
            />

            <Button
              className={'btn btn-outline-primary ml-1 mr-1 mb-2'}
              type={'button'}
              onClick={() => onBtnPlus('apiBodyBtn')}
            >
              <i className='fa fa-plus'></i>
            </Button>
          </div>
          <div className='headers-group'>{listBody}</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default OptionsGroup;

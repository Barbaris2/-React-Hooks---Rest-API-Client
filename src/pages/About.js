import React from 'react';

export const About = () => {
  return (
    <div className='jumbotron'>
      <div className='about-container'>
        <h2 className='display-4'>Rest API Client</h2>
        <p className='lead'>
          &nbsp;&nbsp;&nbsp;Это приложение <strong>React</strong> создано с
          использованием <strong>Bootstrap</strong> и
          <strong> React Hooks</strong>.<br />
          &nbsp;&nbsp;&nbsp;Rest API Client - HTTP-клиент, позволяющий отправить
          GET, POST, PUT или DELETE запрос на указанный пользователем URL с
          указанными HTTP-заголовками и телом запроса. Есть валидация введеного
          URL. Ведется история отправленных запросов и полученых ответов.
          История сохраняется в localStorage. Можно выполнить старый запрос
          повторно.
          <br />
          &nbsp;&nbsp;&nbsp; Для тестирования запросов использовался сервис{' '}
          <a
            href='https://jsonplaceholder.typicode.com/guide.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            JSONPlaceholder
          </a>
          .
        </p>
      </div>
    </div>
  );
};

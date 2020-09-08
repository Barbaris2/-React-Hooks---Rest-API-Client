import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { History } from './pages/History';
import Home from './pages/Home';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { ApiState } from './context/apiContext/apiState';

function App() {
  return (
    <AlertState>
      <ApiState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={{ text: 'test alert' }} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/history' exact component={History} />
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </ApiState>
    </AlertState>
  );
}

export default App;

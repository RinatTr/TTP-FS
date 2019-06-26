import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AuthContainer from './components/Auth/AuthContainer.js'
import TransactionsContainer from './components/Transactions/TransactionsContainer.js'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/login" component={AuthContainer} />
        <Route path="/auth/signup" component={AuthContainer} />
        <Route path="/transactions" component={TransactionsContainer} />
      </Switch>
    </div>
  );
}

export default App;

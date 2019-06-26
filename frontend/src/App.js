import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import AuthContainer from './components/Auth/AuthContainer.js'
import TransactionsContainer from './components/Transactions/TransactionsContainer.js'
import Portfolio from './components/Portfolio/Portfolio.js'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/transactions">transactions</Link>
        <Link to="/portfolio">portfolio</Link>
      </nav>
      <Switch>
        <Route path="/auth/login" component={AuthContainer} />
        <Route path="/auth/signup" component={AuthContainer} />
        <Route path="/transactions" component={TransactionsContainer} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;

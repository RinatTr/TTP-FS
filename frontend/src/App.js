import React from 'react';
import { Route, Switch } from 'react-router-dom';
import icon from './assets/logo.png'
import './css/App.css';

import AuthContainer from './components/Auth/AuthContainer.js'
import TransactionsContainer from './components/Transactions/TransactionsContainer.js'
import PortfolioContainer from './components/Portfolio/PortfolioContainer.js'
import NavbarContainer from './components/Navbar/NavbarContainer.js'

function App() {
  return (
    <div className="App">
      <Route component={NavbarContainer} />
      <div className="app-content">
        <Switch>
          <Route exact path="/" render={()=>{ return (<div><h1>Welcome</h1><img alt="icon" src={icon} /></div>)}}/>
          <Route path="/auth/login" component={AuthContainer} />
          <Route path="/auth/signup" component={AuthContainer} />
          <Route path="/transactions" component={TransactionsContainer} />
          <Route path="/portfolio" component={PortfolioContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

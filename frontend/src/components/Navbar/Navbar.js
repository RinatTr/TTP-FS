import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }
  render() {
    return (
      <nav>
        <Link to="/transactions">Transactions</Link>
        {` | `}
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    )
  }
}

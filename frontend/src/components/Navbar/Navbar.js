import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }

  handleClick = () => {
    this.props.logoutUser()
    window.location='/'
  }
  render() {
    let { loggedUser } = this.props;
    return (
      <nav>
      {loggedUser ?
        <div>
          <Link to="/transactions">Transactions</Link>
          {` | `}
          <Link to="/portfolio">Portfolio</Link>
          {` | `}
          <a onClick={this.handleClick}>Logout</a>
        </div>
      : <div>
          <Link to="/auth/login">login</Link>
            {` | `}
          <Link to="/auth/signup">signup</Link>
        </div>
      }
    </nav>
    )
  }
}

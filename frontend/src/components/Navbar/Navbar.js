import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css';

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
        <>
          <p className="username">{loggedUser.username}</p>
          <div>
            <Link to="/transactions">Transactions</Link>
            {` | `}
            <Link to="/portfolio">Portfolio</Link>
            {` | `}
            <a href={'/'} onClick={this.handleClick}>Logout</a>
          </div>
        </>
      : <>
          <div></div>
          <div>
          <Link to="/auth/login">Login</Link>
            {` | `}
          <Link to="/auth/signup">Signup</Link>
          </div>
        </>
      }
    </nav>
    )
  }
}

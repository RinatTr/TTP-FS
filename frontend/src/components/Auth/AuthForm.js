import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";


class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        password: "",
        email: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    let { username, password, email } = this.state;
    let userState = this.props.loggedInUser;
    let isLoggedIn = userState ? userState.isLoggedIn : "";

    let isPathLogin = (this.props.match.path === "/auth/login");

    return (
      isLoggedIn
      ? <Redirect to="/all" />
      : <React.Fragment>
           <div className="auth-wrapper">
               <div className="auth-form-content">
                 <form onSubmit={this.handleSubmit}>
                 </form>
               </div>
             </div>
       </React.Fragment>
   )
  }
}

export default AuthForm;

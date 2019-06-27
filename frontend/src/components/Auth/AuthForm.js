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
    let { username, password, email } = this.state;
    let newUser = { username, password, email }
    let userLogin = { username, password }
    let isLogin = ( this.props.match.path === "/auth/login" )

    if (isLogin) {
      this.props.loginUser(userLogin)
    } else {
      this.props.signUpUser(newUser)
        .then(() => {
          if (!this.props.authError) {
            this.props.loginUser(userLogin)
          }
        })
    }
  }

  render() {
    let { username, password, email } = this.state;
    let { loggedUser, authError } = this.props;
    let isPathLogin = (this.props.match.path === "/auth/login");
    return (
      loggedUser
      ? <Redirect to="/" />
      : <React.Fragment>
           <div className="auth-wrapper">
               <div className="auth-form-content">
                 <form onSubmit={this.handleSubmit}>
                 <input
                   type="username"
                   value={username}
                   name="username"
                   placeholder="username"
                   onChange={this.handleChange}
                   required
                  />
                 <input
                   type="password"
                   value={password}
                   name="password"
                   placeholder="password"
                   onChange={this.handleChange}
                   required
                  />
                { isPathLogin ? "" : <input
                   type="email"
                   value={email}
                   name="email"
                   placeholder="email"
                   onChange={this.handleChange}
                   required
                  /> }
                 <button type="submit">{isPathLogin ? "SIGN IN" : "SIGN UP"}</button>
                 </form>
                 { this.props.authError ? <p>* username and/or email already exist</p> : null}
               </div>
             </div>
       </React.Fragment>
   )
  }
}

export default AuthForm;

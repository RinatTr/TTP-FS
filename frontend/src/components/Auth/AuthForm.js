import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import icon from '../../assets/logo.png'
import '../../css/AuthForm.css'

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
    let userLogin = e.target.id !== "demo"
                  ? { username, password }
                  : { username: "Lauren29",
                      password: "1234" }
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
                 <div className="title">
                   {isPathLogin ? <img alt="icon" src={icon} /> : null }
                   {isPathLogin ?<h2>Login</h2> : <><h4>Join the stock market. Create a Stockify account today.</h4></>}
                  </div>
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
                 <button type="submit">{isPathLogin ? "LOG IN" : "SIGN UP"}</button>
                 </form>
                 <div id="demo" className="demo-login" onClick={this.handleSubmit}>demo login</div>
                 { authError ? <span>{authError.display}</span> : null}
               </div>
             </div>
       </React.Fragment>
   )
  }
}

export default AuthForm;

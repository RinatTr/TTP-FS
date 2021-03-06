import * as Util from '../util/util.js';
import Auth from '../util/Auth.js'

export const SIGN_UP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const signUp = signedUpUser => {
  return {
    type: SIGN_UP,
    signedUpUser
  }
}

export const login = loggedUser => {
  return {
    type: LOGIN,
    loggedUser
  }
}

export const getError = (key, errCode, display) => {
  return {
    type: RECEIVE_ERROR,
    key,
    errCode,
    display
  }
}

export const signUpUser = (user) => dispatch => {
  return Util.createUser(user)
            .then(() => {
              return dispatch(signUp(user.username))
            })
            .catch(err => {
              return dispatch(getError("signup", err.response.status, "username and/or email already exist"))
            })
};

export const loginUser = (user) => dispatch => {
  return Util.login(user)
            .then(() => {
              Auth.authenticateUser(user.username)
            })
            .then(() => {
              return dispatch(checkAuthenticateStatus())
            })
            .catch(err => {
              return dispatch(getError("login", err.response.status, "invalid credentials"))
            })
}

export const logoutUser = () => dispatch => {
  return Util.logout()
            .then(() => {
              Auth.deauthenticateUser();
            })
            .then(() => {
              checkAuthenticateStatus()
            })
            .catch(err => {
              return dispatch(getError(err))
            })
}

export const checkAuthenticateStatus = () => dispatch => {
  return Util.isLoggedIn()
              .then(res => {
                if (res.data.username === Auth.getToken() && Auth.getToken()) {
                  Util.getUser(res.data.username)
                      .then(user => {
                        return dispatch(login({
                          isLoggedIn: Auth.isUserAuthenticated(),
                          username: Auth.getToken(),
                          userData: user.data.user
                        }))
                      })
                } else {
                  if (res.data.username) {
                    logoutUser();
                  } else {
                    Auth.deauthenticateUser();
                  }
                }
              })
              .catch(err => {
                return dispatch(getError(err))
              })
}

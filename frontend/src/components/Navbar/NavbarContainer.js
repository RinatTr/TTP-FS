import Navbar from "./Navbar.js";
import { connect } from "react-redux";
import { logoutUser, checkAuthenticateStatus } from "../../actions/AuthActions.js";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedUser: state.auth.loggedUser ? state.auth.loggedUser.userData : null
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

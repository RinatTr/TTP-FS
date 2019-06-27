import Portfolio from "./Portfolio.js";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedUser: state.auth.loggedUser ? state.auth.loggedUser.userData : null
  };
};


export default connect(
  mapStateToProps,
  null
)(Portfolio);

import Portfolio from "./Portfolio.js";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedUser: state.auth.loggedUser ? state.auth.loggedUser.userData : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);

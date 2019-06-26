import Transactions from "./Transactions.js";
import { connect } from "react-redux";
// import actions


const mapStateToProps = (state, ownProps) => {
  return {
    //..props
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch actions
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);

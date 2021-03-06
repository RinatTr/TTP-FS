import Transactions from "./Transactions.js";
import { connect } from "react-redux";
import { getTransactions } from '../../actions/TransactionsActions.js'

const mapStateToProps = (state, ownProps) => {
  return {
    transactions: state.transactions,
    loggedUser: state.auth.loggedUser ? state.auth.loggedUser.userData : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTransactions: (userId) => dispatch(getTransactions(userId))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);

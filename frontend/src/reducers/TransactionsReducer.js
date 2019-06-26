import { ADD_TRANSACTIONS } from '../actions/TransactionsActions.js'

const TransactionsReducer = (oldState = [], action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case ADD_TRANSACTIONS:
    return action.data.transactions
    default:
    return oldState
  }

}

export default TransactionsReducer;

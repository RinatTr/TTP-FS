import * as Util from '../util/util.js'

export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS"

export const addTransactions = data => {
  return {
    type: ADD_TRANSACTIONS,
    data
  }
}

export const getTransactions = userId => dispatch => {
  return Util.getTransactions(userId)
          .then(res => {
            return dispatch(addTransactions(res.data))
          })
          .catch(err => {
            console.log("error getting transactions: "+err)
          })
}

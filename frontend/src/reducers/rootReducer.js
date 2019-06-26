import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer.js';
import TransactionsReducer from './TransactionsReducer.js';

const rootReducer = combineReducers({
  auth: AuthReducer,
  transactions: TransactionsReducer
})

export default rootReducer;

import React, { Component } from 'react';
import * as Util from '../../util/util.js';
//getLastSoldPrice(symbolsStr)

export default class TransactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbol: "",
      amount: 0,
      isValidSym: false,
      lastSold: 0
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    let { symbol, amount } = this.state;
    e.preventDefault();
    Util.getLastSoldPrice(symbol).then(res => {
      this.setState({
        isValidSym: res.data[0] ? true : false,
        lastSold: res.data[0] ? res.data[0].price : 0
      }, this.buyShares)
    })
  }

  buyShares = () => {
    let { amount, symbol, lastSold } = this.state;
    let { loggedUser } = this.props;
    //newTransaction
    let bodyObj = {
      userId: loggedUser.id,
      symbol,
      shares: amount,
      value: lastSold,
      type: "BUY",
      newBalance: loggedUser.balance - (amount * lastSold)
    }
      Util.newTransaction(loggedUser.id, bodyObj)
  }

  render() {
    let { symbol, amount } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={symbol}
          name="symbol"
          placeholder="symbol"
          onChange={this.handleChange}
          required
         />
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="amount"
          onChange={this.handleChange}
          required
         />
       <button type="submit">buy</button>
       </form>
    )
  }
}

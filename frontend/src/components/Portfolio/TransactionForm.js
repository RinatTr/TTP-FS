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
      lastSold: 0,
      isInsufficient: false
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
    let { amount, symbol, lastSold, isValidSym } = this.state;
    let { loggedUser } = this.props;
    let newBalance = loggedUser.balance - (amount * lastSold);
    if (newBalance > 0 && isValidSym) {
      let bodyObj = {
        userId: loggedUser.id,
        symbol: symbol.toUpperCase(),
        shares: amount,
        value: lastSold,
        type: "BUY",
        newBalance
      }
      Util.newTransaction(loggedUser.id, bodyObj)
        .then(() => {
          this.setState({ isInsufficient: false })
        })
    } else {
      this.setState({ isInsufficient: true })
    }
  }

  render() {
    let { symbol, amount, isInsufficient } = this.state;
    let { loggedUser } = this.props;
    return(
      <React.Fragment>
        <p>Your Balance: {loggedUser ? loggedUser.balance : null}</p>
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
        {isInsufficient ? "Insufficient Balance" : null}
      </React.Fragment>
    )
  }
}

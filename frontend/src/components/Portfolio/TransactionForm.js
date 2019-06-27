import React, { Component } from 'react';
import * as Util from '../../util/util.js';
//getLastSoldPrice(symbolsStr)

export default class TransactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      symbol: "",
      amount: 0,
      lastSold: 0,
      isInvalidSym: false,
      isInsufficient: false,
      isInvalidAmount: false
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
        isInvalidSym: res.data[0] ? false : true,
        lastSold: res.data[0] ? res.data[0].price : 0,
        isInvalidAmount: (amount % 1 || amount <= 0) ? true : false
      }, this.buyShares)
    })
  }

  buyShares = () => {
    let { amount, symbol, lastSold, isInvalidSym, isInvalidAmount } = this.state;
    let { loggedUser } = this.props;
    let newBalance = loggedUser.balance - (amount * lastSold);
    if (newBalance > 0 && !isInvalidSym && !isInvalidAmount) {
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
          window.location.reload();
        })
    } else if (isInvalidSym || isInvalidAmount) {
      return;
    } else {
      this.setState({ isInsufficient: true })
    }
  }

  render() {
    let { symbol, amount, isInsufficient, isInvalidSym, isInvalidAmount } = this.state;
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
         <button type="submit">BUY</button>
        </form>
        {isInsufficient ? "* Insufficient balance" : null}
        {isInvalidSym ? "* Invalid symbol" : null}
        {isInvalidAmount ? "* Invalid amount" : null}
      </React.Fragment>
    )
  }
}

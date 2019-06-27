import React, { Component } from 'react';

export default class TransactionForm extends Component {
  constructor() {
    super()
    this.state = {
      symbol: "",
      amount: 0
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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

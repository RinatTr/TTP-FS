import React, { Component } from 'react';
import { Item } from './Item.js';

export default class Transactions extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getTransactions(3)
  }
  render() {
    let transactionsList = this.props.transactions.map((el,i) => <Item key={i} transaction={el} />)
    return (
      <React.Fragment>
        {transactionsList}
      </React.Fragment>
    )
  }
}

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
    console.log(this.props);
    // let transactionsList = this.props.transactions.map(el => <Item transaction={el} />)
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

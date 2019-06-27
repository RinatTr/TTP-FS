import React, { Component } from 'react';
import { Item } from './Item.js';
import '../../css/Transactions.css'

export default class Transactions extends Component {
  constructor(){
    super()
    this.state = {
      update: false
    }
  }

  componentDidMount() {
    this.setState({update: true})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.loggedUser !== prevProps.loggedUser || (this.state.update !== prevState.update && this.props.loggedUser)) {
      this.props.getTransactions(this.props.loggedUser.id)
    }
  }
  render() {
    let { loggedUser } = this.props;
    let transactionsList = this.props.transactions.map((el,i) => <Item key={i} transaction={el} />)
    return (
      loggedUser
       ? <div className="transactions-wrapper">
          <h2>Transactions</h2>
          {transactionsList}
         </div>
       : <p>please login</p>
    )
  }
}

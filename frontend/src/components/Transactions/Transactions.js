import React, { Component } from 'react';

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
    return (
      <React.Fragment>
      "display transactions"
      </React.Fragment>
    )
  }
}

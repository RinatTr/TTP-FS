import React, { Component } from 'react';
import * as Util from '../../util/util.js';
//getLastSoldPrice(symbolsStr) //getOpenPrice(oneSymbol)
import { Item } from './Item.js';
import TransactionForm from './TransactionForm.js';

export default class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      shares: [],
      update: false
    }
  }
  componentDidMount() {
    this.setState({update: true})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.loggedUser !== prevProps.loggedUser || this.state.update !== prevState.update && this.props.loggedUser) {
      Util.getTotalShares(this.props.loggedUser.id)
        .then(res => {
          let shares = res.data.data
          this.calcLastSold(shares)
        })
    }
  }
  calcLastSold = (shares) => {
    let symbolsString = shares.reduce((acc,el) => acc.ticker_symbol+","+el.ticker_symbol)
    Util.getLastSoldPrice(symbolsString)
      .then(res => {
        //res order matches the symbolsString order
        shares.forEach((el,i) => el.last_sold = res.data[i].price)
        this.setState({
          shares: shares
        })
      })
  }
  render() {
    let { shares } = this.state;
    let portfolioList = shares.map((el,i) => <Item key={i} share={el} />)
    return (
      <React.Fragment>
        {portfolioList}
        <TransactionForm />
      </React.Fragment>
    )
  }
}

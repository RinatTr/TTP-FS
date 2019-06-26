import React, { Component } from 'react';
import * as Util from '../../util/util.js';
//getLastSoldPrice(symbolsStr) //getOpenPrice(oneSymbol)
import { Item } from './Item.js';

export default class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      shares: []
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.loggedUser !== prevProps.loggedUser) {
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
      </React.Fragment>
    )
  }
}

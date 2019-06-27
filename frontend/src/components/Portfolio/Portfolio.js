import React, { Component } from 'react';
import * as Util from '../../util/util.js';
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
    if (this.props.loggedUser !== prevProps.loggedUser || (this.state.update !== prevState.update && this.props.loggedUser)) {
      Util.getTotalShares(this.props.loggedUser.id)
        .then(res => {
          let shares = res.data.data
          this.calcLastSold(shares)
        })
    }
  }

  calcLastSold = (shares) => {
    let symbols = shares.map((el) => el.ticker_symbol)
    Util.getOpenChained(symbols)
      .then(res => {
        shares.forEach((el,i) => el.open = res[i].data.open.price)
        Util.getLastSoldPrice(symbols.join(','))
          .then(res => {
            shares.forEach((el,i) => el.last_sold = res.data[i].price)
            this.setState({
              shares: shares
            })
          })
      })

  }
  render() {
    let { shares } = this.state;
    let { loggedUser } = this.props;
    let portfolioList = shares.map((el,i) => <Item key={i} share={el} />)
    return (
      loggedUser
       ? <div>
          {portfolioList}
          <TransactionForm loggedUser={loggedUser} />
        </div>
       : <p>please login</p>
    )
  }
}

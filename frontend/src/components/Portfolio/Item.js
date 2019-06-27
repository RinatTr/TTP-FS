import React from 'react';
import { caseToColor } from '../../util/helpers.js'

export const Item = ({share}) => {
    let string = `${share.ticker_symbol} - ${share.total_shares} shares `
    let amount = (share.last_sold * share.total_shares).toFixed(2)
    return(
      <li>{string}<span style={{color: caseToColor(share.open, share.last_sold)}}>{amount}</span></li>
    )
}

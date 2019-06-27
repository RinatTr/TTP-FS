import React from 'react';
import { caseToColor } from '../../util/helpers.js'

export const Item = ({share}) => {
    let color = caseToColor(share.open, share.last_sold)
    let sym = share.ticker_symbol
    let shares = ` - ${share.total_shares} shares `
    let amount = (share.last_sold * share.total_shares).toFixed(2)
    return(
      <li><span style={{color}}>{sym}</span>{shares}<span style={{color}}>{amount}</span></li>
    )
}

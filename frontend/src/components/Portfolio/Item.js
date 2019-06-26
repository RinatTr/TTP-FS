import React from 'react';

export const Item = ({share}) => {
  let string = `${share.ticker_symbol} - ${share.total_shares} shares ${(share.last_sold * share.total_shares).toFixed(2)}`
  return(
    <li>{string}</li>
  )
}

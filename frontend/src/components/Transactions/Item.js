import React from 'react';

export const Item = ({transaction}) => {
  console.log(transaction)
  let string = `${transaction.type} (${transaction.ticker_symbol}) - ${transaction.shares} shares @ ${transaction.sale_price}`
  return(
    <li>{string}</li>
  )
}

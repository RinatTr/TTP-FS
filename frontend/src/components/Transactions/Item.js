import React from 'react';

export const Item = ({transaction}) => {
  console.log(transaction)
  let string = `${transaction.type} (${transaction.ticker_symbol}) - ${Math.abs(transaction.shares)} shares @ ${parseFloat(transaction.sale_price).toFixed(2)}`
  return(
    <li>{string}</li>
  )
}

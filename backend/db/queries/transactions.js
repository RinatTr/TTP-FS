const { db } = require('./index.js');

const getAllTransactionsPerUser = (req, res, next) => {
  let userId = req.params.userId;
  db.any("SELECT * FROM transactions WHERE user_id=$1 ORDER BY time_stamp DESC",[userId])
    .then(data => {
      res.status(200).json({
        status:"sucess",
        message:"received all transactions per user",
        transactions: data
      })
    })
    .catch(err => { next(err)})
}

// new transaction : validate on front end that user has enough cash.
//if so, send request to back end.
//chain queries -
//1. update balance for user,
//2. seed new transaction.


const newTransaction = (req, res, next) => {
  db.tx(t => {
          return t.batch([
              t.none('UPDATE users SET balance = $2 WHERE id = $1 ', [req.body.userId, req.body.newBalance]),
              t.none('INSERT INTO transactions(user_id, ticker_symbol, shares, sale_price, type) VALUES(${userId}, ${symbol}, ${shares}, ${value}, ${type})', req.body)
          ]);
      })
      .then(data => {
        res.status(200).json({
          status:"sucess",
          message:"updated balance and added new transaction for user",
        })
      })
      .catch(err => { next(err)})
}



module.exports = { getAllTransactionsPerUser, newTransaction }

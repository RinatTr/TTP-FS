const { db } = require('./index.js');

const getAllTransactionsPerUser = (req, res, next) => {
  let userId = req.params.userId;
  db.any("SELECT * FROM transactions WHERE user_id=$1",[userId])
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

module.exports = { getAllTransactionsPerUser }

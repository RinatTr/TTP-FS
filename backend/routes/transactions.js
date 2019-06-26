const express = require('express');
const router = express.Router();

const { getAllTransactionsPerUser, newTransaction, getTotalShares } = require('../db/queries/transactions.js');
const { loginRequired } = require('../auth/helpers.js');

router.get('/user/:userId/total',loginRequired, getTotalShares);
router.get('/user/:userId',loginRequired, getAllTransactionsPerUser);
router.post('/user/:userId',loginRequired, newTransaction);

module.exports = router;

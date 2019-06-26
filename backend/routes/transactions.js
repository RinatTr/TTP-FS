const express = require('express');
const router = express.Router();

const { getAllTransactionsPerUser } = require('../db/queries/transactions.js');
const { loginRequired } = require('../auth/helpers.js');

router.get('/user/:userId',loginRequired, getAllTransactionsPerUser);

module.exports = router;

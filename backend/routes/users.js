const express = require('express');
const router = express.Router();

const { getUser } = require('../db/queries/users.js');
const { loginRequired } = require("../auth/helpers");


router.get('/:username', getUser)

module.exports = router;

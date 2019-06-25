const express = require("express");
const router = express.Router();

const {
      createUser,
      loginUser,
      isLoggedIn,
      logoutUser
      } = require("../db/queries/sessionQueries.js");

const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");

router.post("/new",createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;

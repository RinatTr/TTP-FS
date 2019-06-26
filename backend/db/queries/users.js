const { db } = require("./index.js");

const getUser = (req, res, next) => {
  let username = req.params.username
  db.one("SELECT id, username, email FROM users WHERE username=$1", [username])
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "got one user",
        user: data
      })
    })
    .catch(err => next(err))
}

module.exports = {
  getUser
};

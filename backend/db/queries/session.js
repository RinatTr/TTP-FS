const { db } = require('./index.js');
const authHelpers = require("../../auth/helpers");

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  db.none('INSERT INTO users(username, password_digest, email) VALUES(${username}, ${password_digest}, ${email})',
    { username: req.body.username, password_digest: hash, email:req.body.email})
    .then(()=> {
      res.status(200).json({
        status: "success",
        message: "Created a user"
      })
    })
    .catch(err => {
      next(err)
    })
}

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res)=> {
  res.json("login success: "+req.user.username);
}

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ id: req.user });
  } else {
    res.json({ id: null });
  }
}

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};

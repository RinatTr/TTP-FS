const passport = require("passport");
const {db} = require('../db/queries/index.js')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((userId, done) => {
    db.one("SELECT * FROM users WHERE id = ${userId}", {
      userId: userId
    })
      .then(user => {
        done(null, user.id);
      })
      .catch(err => {
        done(err, null);
      });
  });
};

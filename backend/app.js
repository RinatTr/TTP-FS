const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

//auth
const session = require('express-session');
const passport = require('./auth/local');

//route imports
const usersRouter = require('./routes/users');
const sessionRouter = require('./routes/session');
const transactionsRouter = require('./routes/transactions');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('Stockify'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'Stockify',
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

//route usage
app.get('/', (req,res) => {res.send('welcome to stockify')})
app.use('/api/users', usersRouter);
app.use('/api/session', sessionRouter);
app.use('/api/transactions', transactionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

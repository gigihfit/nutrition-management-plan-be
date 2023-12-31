var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import mongoose
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/db_gigih_capstone')
  .then((res) => {
    console.log('Database terhubung!');
  })
  .catch((err) => {
    console.log('Tidak terhubung dengan database!');
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nutritionsRouter = require('./routes/nutritions');
var exerciseRouter = require('./routes/exercise');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/nutritions', nutritionsRouter);
app.use('/api/exercise', exerciseRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

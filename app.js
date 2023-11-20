const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

const indexRouter = require('./app_server/routes/index');
const aboutRouter = require('./app_server/routes/about');
const accessoriesRouter = require('./app_server/routes/accessories');
const guitarRouter = require('./app_server/routes/guitars');
const kitsRouter = require('./app_server/routes/kits');
const contactRouter = require('./app_server/routes/contact');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
// register handlebars partials(https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/accessories', accessoriesRouter);
app.use('/guitars', guitarRouter);
app.use('/kits', kitsRouter);
app.use('/contact', contactRouter);

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

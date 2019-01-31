// Create express app and passport instances
const express = require('express');
const app = express();
const passport = require('passport');

// Configure Passport
require('./auth').configurePassport(passport);

// Add Middleware
// General middleware
app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(require('morgan')('combined')); // logs http requests
// Additional middleware needed for Passport
app.use(require('cookie-parser')());
app.use(require('connect-flash')());
app.use(require('express-session')({
  secret: "cats",
  resave: false,
  saveUninitialized: false,
  maxAge: 240000
}));
// Add Passport as middleware
app.use(passport.initialize());
app.use(passport.session());
// Router history fallback (to allow navigation w/ address bar)
app.use(require('connect-history-api-fallback')());
app.use(express.static('client/dist'));

module.exports = {
  app,
  passport
}
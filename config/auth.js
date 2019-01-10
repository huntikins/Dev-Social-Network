const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserController = require('../controllers/User');

// Function to Configure Passport
function configurePassport() {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    function (email, password, done) {
      User.findByEmail(email, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        done(null, user);
      });
    }
  ));
  
  // Functions used by Passport to serialize user ID and store in session.
  passport.serializeUser((user, done) => done(null, user._id));
  
  passport.deserializeUser((id, done) => {
    User.findById(id, done);
  });
}

module.exports.addPassportAndOtherRelatedMiddleware = app => {
  configurePassport();
  // Additional middleware needed
  app.use(require('cookie-parser')());
  app.use(require('connect-flash')());
  app.use(require('express-session')({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    maxAge: 240000
  }));
  //Add Passport as middleware
  app.use(passport.initialize());
  app.use(passport.session());
}
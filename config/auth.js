const LocalStrategy = require('passport-local').Strategy;

const UserController = require('../controllers/User');

// Function to configure Passport
module.exports.configurePassport = passport => {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    function (email, password, done) {
      require('../controllers/User').findByEmail(email, (err, user) => {
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
    UserController.findById(id, done);
  });
}
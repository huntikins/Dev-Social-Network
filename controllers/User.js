const User = require("../models/User");

module.exports = {
  create: (user, callback) => {
    User.create(user)
    .then(result => {
      delete result.password;
      callback({
        success: true,
        user: result
      });
    })
    .catch(err => {
      let response = { success: false };
      if (err.code === 11000) response.message = "There is already an account for that e-mail address."
      else if (err.name === 'ValidationError') {
        response.message = err.message;
        response.errors = err.errors;
      }
      callback(response);
    });
  },
  findByEmail: (email, callback) => {
    User.findOne({ email }, (err, user) => callback(err, user));
  },
  findById: (id, callback) => {
    User.findById(id, (err, user) => callback(err, user));
  },
  findAllForUser: (articles, callback) => {
    User.insertMany(articles)
    .then(result => callback ? callback(result) : "no callback")
    .catch(err => console.error(err));
  },
  deleteAll: callback => {
    User.deleteMany({})
    .then(result => callback(result))
    .catch(err => console.error(err));
  }
}
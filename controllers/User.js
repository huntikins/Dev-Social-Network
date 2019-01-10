const User = require("../models/User");

module.exports = {
  create: (user, callback) => {
    User.create(user)
    .then(result => callback(result))
    .catch(err => console.error(err));
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
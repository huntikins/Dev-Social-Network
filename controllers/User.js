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
    User.findById(id, (err, user) => {
      if (user) user.password = undefined;
      callback(err, user);
    });
  },
  findAllForUser: (articles, callback) => {
    User.insertMany(articles)
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  delete: (id, callback) => {
    User.deleteOne({ _id: id })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  update: (id, updatedProps, callback) => {
    User.updateOne({ _id: id }, updatedProps)
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  follow: (followerId, targetId, callback) => {
    User.update(
      { _id: followerId },
      { $push: { following: targetId } }
    ).then(result_1 => {
      User.update(
        { _id: targetId },
        { $push: { followers: followerId } }
      ).then(result_2 => callback({ result_1, result_2 }))
        .catch(err => console.error(err));
    })
      .catch(err => console.error(err));
  },
  unfollow: (followerId, targetId, callback) => {
    User.update(
      { _id: followerId },
      { $pull: { following: targetId } }
    ).then(result_1 => {
      User.update(
        { _id: targetId },
        { $pull: { followers: followerId } }
      ).then(result_2 => callback({ result_1, result_2 }))
        .catch(err => console.error(err));
    })
      .catch(err => console.error(err));
  }
}
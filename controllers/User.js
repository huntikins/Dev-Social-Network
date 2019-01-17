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
      { _id: followerId, },
      { $addToSet: { following: targetId } }
    ).then(result_1 => {
      User.update(
        { _id: targetId },
        { $addToSet: { followers: followerId } }
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
  },
  addPost: (userId, postId, callback) => {
    User.update(
      { _id: userId },
      { $push: { posts: postId } }
    ).then(result => callback(result))
      .catch(err => console.error(err));
  },
  populate: (id, callback) => {
    User.findOne({ _id: id })
      .populate([{
        path: 'posts',
        populate: [
          { path: 'comments.user' },
          { path: 'likes.user' }
        ]
      }, {
        path: 'kbItems',
        populate: [
          { path: 'comments.user' },
          { path: 'likes.user' }
        ]
      }])
      .populate(['followers', 'following'])
      .then(result => {
        if (result && result.password) result.password = undefined;
        callback(result);
      })
      .catch(err => console.error(err));
  },
  getFollowingPosts: (id, callback) => {
    User.findOne({ _id: id })
      .populate({
        path: 'following',
        select: 'posts',
        populate: {
          path: 'posts',
          populate: [
            { path: 'user' },
            { path: 'comments.user' },
            { path: 'likes' }
          ]
        }
      })
      .then(result => {
        let posts = [];
        result.following.forEach(user => {
          Array.prototype.push.apply(posts, user.posts);
        });
        posts.sort((post_a, post_b) => {
          if (post_a.date && post_b.date) {
            return post_b.date.getTime() - post_a.date.getTime();
          }
          else return 0;
        });
        callback(posts);
      })
      .catch(err => console.error(err));
  }
}
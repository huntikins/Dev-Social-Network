const Post = require("../models/Post");

module.exports = {
  create: (post, callback) => {
    Post.create(post)
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  delete: (userId, postId, callback) => {
    Post.deleteOne({ user: userId, _id: postId })
    .then(result => callback(result))
    .catch(err => console.error(err));
  }
}
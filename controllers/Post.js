const Post = require("../models/Post");

module.exports = {
  create: (post, callback) => {
    post.date = new Date(); 
    Post.create(post)
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  delete: (userId, postId, callback) => {
    Post.deleteOne({ user: userId, _id: postId })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  addComment: (userId, postId, comment, callback) => {
    Post.updateOne({
      _id: postId
    }, {
      $push: {
        comments: {
          body: comment,
          user: userId,
          date: new Date()
        }
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  },
  deleteComment: (userId, postId, commentId, callback) => {
    Post.updateOne({
      _id: postId
    }, {
      $pull: {
        comments: {
          user: userId,
          _id: commentId
        }
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  },
  like: (userId, postId, callback) => {
    Post.updateOne({
      _id: postId
    }, {
      $addToSet: {
        likes: userId
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  },
  unlike: (userId, postId, callback) => {
    Post.updateOne({
      _id: postId
    }, {
      $pull: {
        likes: userId
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  }
}
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
    Post.findOneAndUpdate({
      _id: postId
    }, {
      $push: {
        comments: {
          body: comment,
          user: userId,
          date: new Date()
        }
      }
    }, {
      new: true
    }).populate({
      path: 'comments.user',
      select: { firstName: 1, lastName: 1 }
    })
      .then((result) => callback(result))
  },
  deleteComment: (userId, postId, commentId, callback) => {
    Post.findOneAndUpdate({
      _id: postId
    }, {
      $pull: {
        comments: {
          user: userId,
          _id: commentId
        }
      }
    }, {
      new: true
    }).populate({
      path: 'comments.user',
      select: { firstName: 1, lastName: 1 }
    })
      .then(result => callback(result))
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
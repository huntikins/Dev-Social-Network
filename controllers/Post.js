const Post = require("../models/Post");

module.exports = {
  create: (post, callback) => {
    Post.insertOne(post)
    .then(result => callback(result))
    .catch(err => console.error(err));
  },
  findAllForUser: (articles, callback) => {
    Post.insertMany(articles)
    .then(result => callback ? callback(result) : "no callback")
    .catch(err => console.error(err));
  },
  deleteAll: callback => {
    console.log("hey")
    Post.deleteMany({})
    .then(result => callback(result))
    .catch(err => console.error(err));
  }
}
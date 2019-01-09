const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  type: String,
  body: String,
  url: String,
  title: String,
  body: String,
  date: Date,
  // likes: ,
  comments: [{
    body: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
const KBItem = require("../models/KBItem");

const UserController = require('./User');

module.exports = {
  create: (userId, kbItem, callback) => {
    kbItem.user = userId;
    console.log(kbItem);
    KBItem.create(kbItem)
      .then(result_1 => {
        UserController.addKBItem(
          userId,
          result_1._id,
          result_2 => callback({ result_1, result_2 })
        )
      })
      .catch(err => console.error(err));
  },
  delete: (userId, kbItemId, callback) => {
    KBItem.deleteOne({ user: userId, _id: kbItemId })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  addComment: (userId, kbItemId, comment, callback) => {
    KBItem.findOneAndUpdate({
      _id: kbItemId
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
    }).then(result => callback(result))
      .catch(err => console.error(err));
  },
  deleteComment: (userId, kbItemId, commentId, callback) => {
    KBItem.updateOne({
      _id: kbItemId
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
  like: (userId, kbItemId, callback) => {
    KBItem.updateOne({
      _id: kbItemId
    }, {
      $addToSet: {
        likes: userId
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  },
  unlike: (userId, kbItemId, callback) => {
    KBItem.updateOne({
      _id: kbItemId
    }, {
      $pull: {
        likes: userId
      }
    }).then(result => callback(result))
      .catch(err => console.error(err));
  }
}
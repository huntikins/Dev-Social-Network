const User = require("../models/User");
const singleUpload = require("../services/aws_service").single('image');

module.exports = {
  create: (user, callback) => {
    user.lowerCaseEmail = user.email.toLowerCase();
    user.fullName = user.firstName + ' ' + user.lastName;
    User.create(user)
      .then(result => {
        result.password = undefined;
        result.lowerCaseEmail = undefined;
        // console.log(result);
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
    User.findOne({ lowerCaseEmail: email.toLowerCase() }, (err, user) => callback(err, user));
  },
  findById: (id, callback) => {
    User.findById(id, (err, user) => {
      if (user) user.password = undefined;
      callback(err, user);
    });
  },
  delete: (id, password, callback) => {
    User.deleteOne({ _id: id, password: password })
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
  addKBItem: (userId, kbItemId, callback) => {
    User.update(
      { _id: userId },
      { $push: { kbItems: kbItemId } }
    ).then(result => callback(result))
      .catch(err => console.error(err));
  },
  populate: (id, callback) => {
    User.findOne({ _id: id })
      .populate([{
        path: 'posts',
        populate: [
          { path: 'user' },
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
  getUserPosts: (userId, callback) => {
    User.findOne({ _id: userId })
      .populate([{
        path: 'posts',
        populate: [
          { path: 'user' },
          { path: 'comments.user' }
        ]
      }, {
        path: 'kbItems',
        populate: [
          { path: 'user' },
          { path: 'comments.user' }
        ]
      }])
      .then(result => {
        let posts = result.posts;
        posts.sort((post_a, post_b) => {
          const post_aTime = post_a.date ? post_a.date.getTime() : 0;
          const post_bTime = post_b.date ? post_b.date.getTime() : 0;
          return post_bTime - post_aTime;
        });
        let kbItems = result.kbItems;
        callback({ posts, kbItems });
      })
      .catch(err => console.error(err));
  },
  getPostsInUserKB: (userId, callback) => {
    User.findOne({ _id: userId }, { kbItems: 1 })
      .populate({
        path: 'kbItems',
        select: 'post'
      })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  getKB: (userId, callback) => {
    User.findOne({ _id: userId }, { kbItems: 1 })
      .populate({
        path: 'kbItems',
        populate: {
          path: 'comments.user'
        }
      })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  getFollowingPosts: (id, callback) => {
    User.findOne({ _id: id })
      .populate([{
        path: 'following',
        select: 'posts',
        populate: {
          path: 'posts',
          populate: [
            { path: 'user' },
            { path: 'comments.user' }
          ]
        }
      }, {
        path: 'kbItems',
        select: 'post'
      }])
      .then(result => {
        let posts = [];
        result.following.forEach(user => {
          Array.prototype.push.apply(posts, user.posts);
        });
        posts.sort((post_a, post_b) => {
          const post_aTime = post_a.date ? post_a.date.getTime() : 0;
          const post_bTime = post_b.date ? post_b.date.getTime() : 0;
          return post_bTime - post_aTime;
        });
        console.log(result)
        callback({
          posts,
          currentUserKB: result.kbItems
        });
      })
      .catch(err => console.error(err));
  },
  imageUpload: (id, file, callback) => {
    User
      .findByIdAndUpdate({ _id: id }, { picture: file }, { new: true })
      .then(result => callback(result))
      .catch(err => console.error(err));
  },
  checkResetToken: (token, callback) => {
    User.findOne({
      passwordResetToken: token,
      resetTokenExpiration: { $gt: Date.now() }
    }).then(callback)
      .catch(err => console.error(err));
  },
  search: (query, callback) => {
    User.find({
      fullName: new RegExp(query, 'i')
    }).then(result_1 => {
      User.find({
        email: new RegExp(query, 'i')
      }).then(result_2 => {
        const results = result_1.concat(result_2);
        results.forEach(result => result.password = undefined);
        callback(results);
      });
    });
  }
}
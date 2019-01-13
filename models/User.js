const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    // from bootcamp week 18 activity 15
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: value => {
        if (value.length !== 5) return false;
        if (value !== parseInt(value).toString()) return false;
        return true;
      },
      message: 'Please enter a valid 5 digit zip code.'
    }
  },
  bio: String,
  job: {
    title: String,
    company: String
  },
  picture: String,
  interests: [String],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  kbItems: [{
    type: Schema.Types.ObjectId,
    ref: 'KBItem'
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
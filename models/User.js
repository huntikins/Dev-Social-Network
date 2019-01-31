const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  lowerCaseEmail: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
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
  fullName: {
    type: String
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: value => {
        if (value.length !== 5) return false;
        let restringedIntValue = parseInt(value).toString();
        restringedIntValue = ('0').repeat(5 - restringedIntValue.length) + restringedIntValue;
        if (value !== restringedIntValue) return false;
        return true;
      },
      message: 'Please enter a valid 5 digit zip code.'
    }
  },
  bio: String,
  jobTitle: String,
  jobCompany: String,
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
  }],
  passwordResetToken: String,
  resetTokenExpiration: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
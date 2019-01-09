const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    // from bootcamp week 18 activity 15
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
    type: Number,
    required: true,
    validate: {
      validator: value => Number.isInteger(value) && value > 0 && value < 1000000,
      message: "Please enter a valid 6 digit zip code."
    }
  },
  bio: String,
  job: String,
  picture: String,
  interests: [String],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const KBItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: String,
  poster: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    validate: {
      validator: value => value === 'text' || value === 'content' || value === 'event',
      message: 'Valid types are "text", "content", and "event".'
    }
  },
  body: String,
  url: String,
  title: String,
  body: String,
  date: Date,
  likes: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  comments: [{
    body: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  notes: [{
    body: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
});

const KBItem = mongoose.model('KBItem', KBItemSchema);

module.exports = KBItem;
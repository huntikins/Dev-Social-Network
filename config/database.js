module.exports.connect = function() {
  const mongoose = require('mongoose');

  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/devNetwork';
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on('error', () => console.error('Error connecting to MongoDB.'));
  db.once('open', () => {
    console.log('Database connection was successful');
  });
}
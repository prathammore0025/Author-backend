const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: String,
  photo: String,
  summary: String,
});

module.exports = mongoose.model('Author', AuthorSchema);

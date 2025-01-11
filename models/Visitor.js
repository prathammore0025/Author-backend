const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  accessedAuthor: String,
});

module.exports = mongoose.model('Visitor', VisitorSchema);

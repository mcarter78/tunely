var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
  trackNumber: Number,
  title: String,
  duration: String
});

module.exports = mongoose.model('Song', songSchema);
module.exports = songSchema;

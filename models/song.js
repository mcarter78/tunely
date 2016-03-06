var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
  trackNumber: Number,
  title: String,
  duration: String
});

// songSchema.index(
// 	{trackNumber: "text"}
// );

module.exports = mongoose.model('Song', songSchema);
module.exports = songSchema;

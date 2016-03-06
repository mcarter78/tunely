var mongoose = require("mongoose");
var Song = require('./song');
var songSchema = require('../models/song');


var albumSchema = mongoose.Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  photoUrl: String,
  songList: [songSchema]
});

albumSchema.index(
	{
		artistName: "text",
		name: "text",
		releaseDate: "text",
	}
);

module.exports = mongoose.model('Album', albumSchema);

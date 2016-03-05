var mongoose = require("mongoose");


var albumSchema = mongoose.Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  photoUrl: String
});

// albumSchema.createIndex(
// 	{
// 		artistName: "text",
// 		name: "text",
// 		releaseDate: "text",
// 	}
// );

module.exports = mongoose.model('Album', albumSchema);

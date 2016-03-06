var Album = require('../models/album');
var Song = require('../models/song');

function returnError (err) {
  return console.log(err);
}

function songIndex (req, res) {
  console.log("indexing");
  var id = req.params.id;
  Album.find({_id: id}, function(err, album){
    if (err) returnError(err);
    res.json(album.songList, {album: album});
  });
}

function newSong (req, res) {
  res.render('./partials/newsong');
}

function createSong (req, res) {
  var id = req.params.id;
  Album.find({_id: id}, function(err, album){
    if (err) returnError(err);
    for(var i = 0; i < album.songList.length; i++) {
      if (req.body.trackNumber) album.songList[i].trackNumber = req.body.trackNumber;
      if (req.body.title) album.songList[i].title = req.body.title;
      if (req.body.duration) album.songList[i].duration = req.body.duration;
    }
    res.redirect('/albums/' + album._id, {album: album});
  });
}

function editSong (req, res) {
  Album.findById(req.params.id, function(err, album){
    if (err) returnError(err);
    console.log('album ', album);
    res.render('./partials/editsong', {album: album});
  });
}

function updateSong (req, res) {
    var id = req.params.id;
    Album.find({_id: id}, function(err, album){
    if (err) returnError(err);
    for(var i = 0; i < album.songList.length; i++) {
      if (req.body.trackNumber) album.songList[i].trackNumber = req.body.trackNumber;
      if (req.body.title) album.songList[i].title = req.body.title;
      if (req.body.duration) album.songList[i].duration = req.body.duration;
    }
    res.redirect('/albums/' + album._id, {album: album});
  });
}

function deleteSong (req, res) {
  var id = req.params.id;
  Album.find({_id: id}, function(err, album){
    if (err) returnError(err);
    for(var i = 0; i < album.songList.length; i++){
      if (album.songlist[i].title == req.body.title) {
        album.songlist.splice(album.songlist[i], 1);
      }
    }
    res.redirect('/albums/' + album._id, {album: album});
  });
}

module.exports = {
  songIndex: songIndex,
  newSong: newSong,
  editSong: editSong,
  createSong: createSong,
  updateSong: updateSong,
  deleteSong: deleteSong
};

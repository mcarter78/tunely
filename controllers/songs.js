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
  var id = req.params.id
    console.log('id ', id);
  Album.findById(id, function(err, album){
    if (err) returnError(err);
    console.log('album ', album);
  res.render('./partials/newsong', {album: album});
  });
}


function createSong (req, res) {
  var id = req.params.id;

  Album.findById(id, function(err, album){
    console.log('id ', id);
    if (err) returnError(err);
    // joins array of new songs to existing songList array
    album.songList = req.body.songList;
    console.log(album.songList);
    console.log(album);
    album.save(function(err, album) {
      if (err) returnError(err);
      console.log('created album ', album);
      res.status(200).json("success");
      // res.redirect('/albums' + album._id, {album: album});
      // console.log('album.songList ', album.songList )
    });
  });
}
    // console.log('album, ', album);
    // for(var i = 0; i < album.songList.length; i++) {
    //   if (req.body.trackNumber) album.songList[i].trackNumber = req.body.trackNumber;
    //   if (req.body.title) album.songList[i].title = req.body.title;
    //   if (req.body.duration) album.songList[i].duration = req.body.duration;
    // }
    // res.redirect('/albums/' + album._id, {album: album});

function editSong (req, res) {
  Album.findById(req.params.id, function(err, album){
    if (err) returnError(err);
    console.log('album ', album);
    res.render('./partials/editsong', {album: album});
  });
}

function updateSong (req, res) {
  Album.findById(AlbumId, function(err, album){
    if (err) returnError(err);
    // joins array of new songs to existing songList array
    album.songList = album.songList.concat(req.body.songList);
    console.log(album.songList);

    album.save(function(err, album) {
      if (err) returnError(err);
      console.log('updated album ', album);
      res.redirect('/albums' + album._id, {album: album});
    // console.log('album.songList ', album.songList )
    });
  });
}

// function updateSong (req, res) {
//     // var id = req.params.id;
//     console.log(id);
//     Album.findById(req.params.id, function(err, album){
//     if (err) returnError(err);
//     for(var i = 0; i < album.songList.length; i++) {
//       if (req.body.trackNumber) album.songList[i].trackNumber = req.body.trackNumber;
//       if (req.body.title) album.songList[i].title = req.body.title;
//       if (req.body.duration) album.songList[i].duration = req.body.duration;
//     }
    
//     console.log(album)
//     res.redirect('/albums/' + album.id, {album: album});
//   });
// }

function deleteSong (req, res) {
  var id = req.params.id;
  Album.find({_id: id}, function(err, album){
    console.log(id);
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

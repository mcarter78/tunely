/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

//var Album = require('../../models/album');


$(document).ready(function() {
  console.log('app.js loaded!');
  var app = new App();
  function setBodyMinHeight() {
    // var ele =document.getElementByTagName('body');
    var ele =document.body;
    var windowHeight =window.outerHeight;
    ele.style.minHeight =windowHeight+'px';
  }
  window.onresize =function() {
      setBodyMinHeight();
  };

  $('.multiple-items').slick({
    infinite: true,
    dots: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  
  $('#newTracksBtn').on('click', function(e){
    e.preventDefault();
      // console.log(songs);
      var newSongs = [];
      var songs = $('#songTable tbody tr');
    $(songs).each(function( index) {
      var trackNumber = $(this).find("input[name='trackNumber']").val();
      var title = $(this).find("input[name='title']").val();
      var duration = $(this).find("input[name='duration']").val();
      var song = {
        trackNumber: trackNumber,
        title: title,
        duration: duration
      }
      newSongs.push(song);
      // console.log(song);
      // console.log($(this));
      // console.log($(this).find("input[name='trackNumber']").val());
      // console.log($(this).find("input[name='title']").val());
      // console.log($(this).find("input[name='duration']").val());
    });
    // console.log(newSongs);
    var albumId = $('#albumId').val();
    console.log(albumId);
    $.ajax({
      type: 'POST',
      url: '/albums/' + albumId + '/songs',
      data: {
        songList: newSongs
      },
      dataType: 'json'
    }).done(function (data) {
      window.location.href = '/albums/' + albumId;
    });
  });

  $('#updateTracksBtn').on('click', function(e){

    e.preventDefault();
      // console.log(songs);
      var newSongs = [];
      var songs = $('#songTable tbody tr');
    $(songs).each(function( index) {
      var trackNumber = $(this).find("input[name='trackNumber']").val();
      var title = $(this).find("input[name='title']").val();
      var duration = $(this).find("input[name='duration']").val();
      var song = {
        trackNumber: trackNumber,
        title: title,
        duration: duration
      }
      newSongs.push(song);
      // console.log(song);
      // console.log($(this));
      // console.log($(this).find("input[name='trackNumber']").val());
      // console.log($(this).find("input[name='title']").val());
      // console.log($(this).find("input[name='duration']").val());
    });
    // console.log(newSongs);
    var albumId = $('#albumId').val();
    // console.log(albumId);
    $.ajax({
      type: 'POST',
      url: '/albums/' + albumId + '/songs',
      data: {
        songList: newSongs
      },
      dataType: 'json'
    }).done(function (data) {
      window.location.href = '/albums/' + albumId;
    });
  });
});

function App () {
  this.baseUrl = '/albums';
  this.apiUrl = 'api/albums';
  this.$albumList = $('#albums');
}

// this function takes all albums and renders them to the page


App.prototype.renderAlbums = function (){
  app.$albumList.empty();
};

App.prototype.renderLayout = function (){

};

// this function takes a single album and renders it to the page
App.prototype.renderAlbum = function (album) {
};
//slick stuff
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('#showpage_delete_button').on('click', function(e){
  msg(e);
})

// $('#showpage_delete_button').on('click', msg)

function msg(e) {
  e.preventDefault();
  var x = confirm("Are you sure you want to delete this album?");
  if (x) {
    $('#deleteAlbumForm').submit();
  }
}


















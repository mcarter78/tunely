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
  $('#saveSongsBtn').on('click', function(e){
    $('#track-1').submit();
    // $('#track-2').submit().delay(100);
    // $('#track-3').submit().delay(100);
    // $('#track-4').submit().delay(100);
    // $('#track-5').submit().delay(100);
    // $('#track-6').submit().delay(100);
    // $('#track-7').submit().delay(100);
    // $('#track-8').submit().delay(100);
    // $('#track-9').submit().delay(100);
    // $('#track-10').submit().delay(100);
  });
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
});

// $('#showpage_delete_button').on('click', msg)

function msg(e) {
  e.preventDefault();
  var x = confirm("Are you sure you want to delete this album?");
  if (x) {
    $('#deleteAlbumForm').submit();
  }
}
// function buildSongsHtml(songs) {
//   var songText = " &ndash; ";
//   songs.forEach(function(song) {
//     songText = songText + "(" + song.trackNumber + ")" + song.name + " &ndash; ";
//   });
//   var songsHtml =

// }

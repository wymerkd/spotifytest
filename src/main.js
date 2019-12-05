import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {
// THIS WILL GRAB SLIDER VALUE AND WILL CONVERT TO SPOTIFY DECIMAL FORMAT
var slider = document.getElementById("myValence");
var output = document.getElementById("valenceSlider");
output.innerHTML = slider.value;
let spotifyValance = 0;
slider.oninput = function() {
output.innerHTML = this.value;
 const sliderValue = output.innerHTML;
 spotifyValance = (parseInt(sliderValue)) / 100;
  console.log(spotifyValance);
}

if (window.location.hash.length > 10) {
  $('#log-in').hide();
  $('#genreBoxes').show();
}

$("#apiButton").on("click",function(){
   $('#sliderPage').hide();
   $('#results').show();
   console.log(window.location)
   var uriHash= window.location.hash //holds the access token
   var accessToken = uriHash.replace('#access_token=', '')
   console.log(spotifyValance);
   console.log(genre);
   var apiURL= `https://api.spotify.com/v1/recommendations?limit=12&market=US&seed_genres=${genre}&target_valence=${spotifyValance}`
  $.ajax({
      url: apiURL,
      headers: {
       'Authorization': 'Bearer ' + accessToken
     },
      success: function(response){
          console.log(response);
          $("#h5-1").append("<h5>1 - "+response.tracks[0].name+" by "+response.tracks[0].album.artists[0].name+",<br>"+ "on the album " +response.tracks[0].album.name+"</h5>")
          $("#h5-2").append("<h5>2 - "+response.tracks[1].name+" by "+response.tracks[1].album.artists[0].name+",<br>"+ " on the album " +response.tracks[1].album.name+"</h5>")
          $("#h5-3").append("<h5>3 - "+response.tracks[2].name+" by "+response.tracks[2].album.artists[0].name+",<br>"+ " on the album " +response.tracks[2].album.name+"</h5>")
          $("#h5-4").append("<h5>4 - "+response.tracks[3].name+" by "+response.tracks[3].album.artists[0].name+",<br>"+ " on the album " +response.tracks[3].album.name+"</h5>")
          $("#h5-5").append("<h5>5 - "+response.tracks[4].name+" by "+response.tracks[4].album.artists[0].name+",<br>"+ " on the album " +response.tracks[4].album.name+"</h5>")
          $("#h5-6").append("<h5>6 - "+response.tracks[5].name+" by "+response.tracks[5].album.artists[0].name+",<br>"+ " on the album " +response.tracks[5].album.name+"</h5>")
          $("#h5-7").append("<h5>7 - "+response.tracks[6].name+" by "+response.tracks[6].album.artists[0].name+",<br>"+ " on the album " +response.tracks[6].album.name+"</h5>")
          $("#h5-8").append("<h5>8 - "+response.tracks[7].name+" by "+response.tracks[7].album.artists[0].name+",<br>"+ " on the album " +response.tracks[7].album.name+"</h5>")
          $("#h5-9").append("<h5>9 - "+response.tracks[8].name+" by "+response.tracks[8].album.artists[0].name+",<br>"+ " on the album " +response.tracks[8].album.name+"</h5>")
          $("#h5-10").append("<h5>10 - "+response.tracks[9].name+" by "+response.tracks[9].album.artists[0].name+",<br>"+ " on the album " +response.tracks[9].album.name+"</h5>")
          $("#h5-11").append("<h5>11 - "+response.tracks[10].name+" by "+response.tracks[10].album.artists[0].name+",<br>"+ " on the album " +response.tracks[10].album.name+"</h5>")
          $("#h5-12").append("<h5>12 - "+response.tracks[11].name+" by "+response.tracks[11].album.artists[0].name+",<br>"+ " on the album " +response.tracks[11].album.name+"</h5>")
          $("#img-1").attr("src", response.tracks[0].album.images[1].url);
          $("#img-2").attr("src", response.tracks[11].album.images[1].url);

      },
      error: function(r){
        console.log(r);
  }
  })
})

let genre = "";
  $("#rock").on("click", function(){
    $('#insertGenre').html('Rock').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "rock%2Crock-n-roll%2Calt-rock%2Cpsych-rock";
  });
  $("#hip-hop").on("click", function(){
    $('#insertGenre').html('Hip-Hop').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "hip-hop%2Ctrip-hop%2Cr-n-b";
  });
  $("#electronic").on("click", function(){
    $('#insertGenre').html('Electronic').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "electronic%2Cedm%2Cpost-dubstep%2Ctechno";
  });
  $("#country").on("click", function(){
    $('#insertGenre').html('Country').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "country%2Cfolk";
  });
  $("#indie").on("click", function(){
    $('#insertGenre').html('Indie').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "indie%2Cindie-pop";
  });
  $("#metal").on("click", function(){
    $('#insertGenre').html('Metal').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "metal%2Cmetal-misc%2Ckids%2Cemo";
  });
  $("#world").on("click", function(){
    $('#insertGenre').html('World').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "world-music%2Cturkish%2Cfrench%2Cbrazil"
  });
  $("#soundtracks").on("click", function(){
    $('#insertGenre').html('Soundtracks').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "soundtracks%2Cshow-tunes%2Cdisney";
  });
  $("#wildcard").on("click", function(){
    $('#insertGenre').html('Wildcard').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "opera%2Cromance%2Csleep%2Ccomedy";
  });

});

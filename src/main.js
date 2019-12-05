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
   var apiURL= `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_genres=${genre}&target_valence=${spotifyValance}`
  $.ajax({
      url: apiURL,
      headers: {
       'Authorization': 'Bearer ' + accessToken
     },
      success: function(response){
          console.log(response);
          $("h2").append("<h2>"+response.tracks[0].album.artists[0].name+", "+ " "+response.tracks[0].name+ " on the album " +response.tracks[0].album.name+ " " +response.tracks[0].external_urls.spotify+"</h2>")
          $("img").attr("src", response.tracks[0].album.images[1].url);

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
    genre = "rock";
  });
  $("#hip-hop").on("click", function(){
    $('#insertGenre').html('Hip-Hop').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "hip-hop";
  });
  $("#electronic").on("click", function(){
    $('#insertGenre').html('Electronic').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "electronic";
  });
  $("#country").on("click", function(){
    $('#insertGenre').html('Country').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "country";
  });
  $("#indie").on("click", function(){
    $('#insertGenre').html('Indie').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "indie";
  });
  $("#metal").on("click", function(){
    $('#insertGenre').html('Metal').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "metal";
  });
  $("#world").on("click", function(){
    $('#insertGenre').html('World').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "world-music"
  });
  $("#soundtracks").on("click", function(){
    $('#insertGenre').html('Soundtracks').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "soundtracks";
  });
  $("#wildcard").on("click", function(){
    $('#insertGenre').html('Wildcard').val();
    $('#genreBoxes').hide();
    $('#sliderPage').show();
    genre = "opera";
  });

});

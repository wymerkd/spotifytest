import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// THIS WILL GRAB SLIDER VALUE AND WILL CONVERT TO SPOTIFY DECIMAL FORMAT
var slider = document.getElementById("myValence");
var output = document.getElementById("valenceSlider");
output.innerHTML = slider.value;
let spotifyValance = 0;
slider.oninput = function() {
output.innerHTML = this.value;
 const sliderValue = output.innerHTML;
 spotifyValance = (parseInt(sliderValue)) / 100;
  // console.log(spotifyValance);
  
}

$("#apiButton").on("click",function(){
   console.log(window.location)
   var uriHash= window.location.hash //holds the access token
   var accessToken = uriHash.replace('#access_token=', '')
   console.log(spotifyValance);
   var apiURL= `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_genres=country&target_valence=${spotifyValance}`
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



//
// $(document).ready(function() {
//   let genre = ""
//   $("#rock").on("click", function(){
//     let genre = "rock";
//     $('#insertGenre').html('Rock').val();
//     $('#genreBoxes').hide();
//     alert("Rock was clicked.");
//   });
//   $("#hip-hop").on("click", function(){
//     alert("Hip-Hop was clicked.");
//     let genre = "hip-hop";
//     $('#insertGenre').html('Hip-Hop').val();
//     $('#genreBoxes').hide();
//   });
//   $("#electronic").on("click", function(){
//     alert("The paragraph was clicked.");
//     let genre = "electronic";
//     $('#insertGenre').html('Electronic').val();
//     $('#genreBoxes').hide();
//   });
//   $("#country").on("click", function(){
//     alert("Country was clicked. YEEEYEEE");
//     let genre = "country";
//     $('#insertGenre').html('Country').val();
//     $('#genreBoxes').hide();
//   });
//   $("#indie").on("click", function(){
//     alert("Indie was clicked.");
//     let genre = "indie";
//     $('#insertGenre').html('Indie').val();
//     $('#genreBoxes').hide();
//   });
//   $("#metal").on("click", function(){
//     alert("Metal was clicked.");
//     let genre = "metal";
//     $('#insertGenre').html('Metal').val();
//     $('#genreBoxes').hide();
//   });
//   $("#world").on("click", function(){
//     alert("World was clicked.");
//     let genre = "world-music"
//     $('#insertGenre').html('World').val();
//     $('#genreBoxes').hide();
//   });
//   $("#soundtracks").on("click", function(){
//     alert("Soundtracks was clicked.");
//     let genre = "soundtracks";
//     $('#insertGenre').html('Soundtracks').val();
//     $('#genreBoxes').hide();
//   });
//   $("#wildcard").on("click", function(){
//     alert("Wildcard was clicked.");
//     let genre = "opera";
//     $('#insertGenre').html('Wildcard').val();
//     $('#genreBoxes').hide();
//   });
//   // $('#sliderPage').show();
// });

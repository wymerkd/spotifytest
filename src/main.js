import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$("#apiButton").on("click",function(){
   console.log(window.location)
   var uriHash= window.location.hash //holds the access token
   var accessToken = uriHash.replace('#access_token=', '')
   var apiURL= "https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_genres=country&target_valence=0.4"
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

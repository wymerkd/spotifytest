import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$("#apiButton").on("click",function(){
   console.log(window.location)
   var uriHash= window.location.hash //holds the access token
   var accessToken = uriHash.replace('#access_token=', '')
   var apiURL= "https://api.spotify.com/v1/me/"
  $.ajax({

      url: apiURL,
      headers: {
       'Authorization': 'Bearer ' + accessToken
     },
      success: function(response){
          console.log(response);
          $("h2").append("<h2>"+response.display_name+", "+"Followers:"+ " "+response.followers.total+ " " +", Lives in"+" "+response.country+"</h2>")
          $("img").attr("src", response.images[0].url)
      },

      error: function(r){
        console.log(r);
  }
  })
})

/**
console.log("Initialized");
var original_location = window.location.href;
var client_id = '9586133394724f65b7fc986b34fa1a2c';
var scopes = 'user-top-read';
var redirect_uri = 'http://localhost:8888/callback';
var me = null;

function login()
{
  console.log(original_location);
  window.location = `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`;



  console.log("Login");
  var popup = window.open(`https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`, 'Login with Spotify', 'width=800,height=600');
  var popup = window.open("/");
  popup.addEventListener("message",function(){
    console.log("Popup window recieved message");
  });
  popup.postMessage("Sending a message","*");
  console.log("Completed authentication");

}
*/

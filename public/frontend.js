var spotifyApi = new SpotifyWebApi();

let html_access_token = document.getElementById("access");
if(html_access_token.innerHTML.length > 0)
{
  spotifyApi.setAccessToken(html_access_token.innerHTML);
  console.log(spotifyApi.getAccessToken());
}
else {
  html_access_token.addEventListener('change', (event) => {
    spotifyApi.setAccessToken(html_access_token.innerHTML);
    console.log(spotifyApi.getAccessToken());
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
    const list = new FrontEnd("#container")
  });


class FrontEnd
{
    constructor(list)
    {
        this.list
        this.createContainer()
    }
    
    createContainer()
    {
      /**
       * Find the userId of the user and call a function that gets the users playlist if promise is fulfilled.
       */
      spotifyApi.getMe(null).then(
        function (data) {
            callGetUserPlayerList(data)
        },
        function (err) {
            console.error(err);
        }
        );
        /**
         * makes playlists into button options and calls a function that gets tracks in playlist
         * @param {object} oldData data of all the user playlists
         */
    function callGetUserPlayerList(oldData)
    {
        
        spotifyApi.getUserPlaylists(oldData.id).then(
            function (data) {
                for (let i = 0; i<data.items.length;i++)
                {
                    var newButton = document.createElement("button");
                    var node = document.createTextNode(data.items[i].name);
                    
                    newButton.appendChild(node);
                    var element = document.getElementById("playList");
                    newButton.onclick = function(){myFunction(data.items[i].id)};
                    element.appendChild(newButton);
                    
                }
            },
            function (err) {
              console.error(err);
            }
          );
    }
    /**
     * 
     * @param {string} oldDataId id of the playlist selected
     */
    function myFunction(oldDataId){
      document.getElementById("playList").style.display = "none";
      console.log(oldDataId);
      spotifyApi.getPlaylistTracks(oldDataId).then(
        function (data) {
          console.log(data);
          for (let i = 0; i<data.items.length;i++)
          {
              var newButton = document.createElement("button");
              var node = document.createTextNode(data.items[i].name);
              
              newButton.appendChild(node);
              var element = document.getElementById("trackList");
              newButton.onclick = function(){myFunction(data.items[i].id)};
              element.appendChild(newButton);
              
          }
        
    },
    function (err) {
        console.error(err);
    }
    );
    }
  }
}

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
        const list = (this.list);
        for (let i = 0; i < 6; i++) {
            var row = document.getElementById("container");
            row.classList.add("row");
            for (let j = 0; j <7; j++) {
                var col = document.getElementById("container");
                col.classList.add("col");
                col.setAttribute('data-col', j);
                col.setAttribute('data-row', i);
            }
        }
    }

}

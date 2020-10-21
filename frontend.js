var spotifyApi = new SpotifyWebApi();


spotifyApi.setAccessToken("BQAavSmYHHCsB43ljkmSSganYoop45kFCZS7guLX9yDwakUyFHjtr3pXLYx8fSKFfZrvw_HtIEvpa3_dqSRa8KSEfoZTpGGhPcHOr8VD7vhm3DD9n6x_bUe5x9RGFCiTgG0-gMnBoXouv56TJSfiZFR7i-n-MVhUB5bOQZvQtIqxn2U31-7hfxn1y-Mg")

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

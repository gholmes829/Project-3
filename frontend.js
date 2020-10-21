var spotifyApi = new SpotifyWebApi();


spotifyApi.setAccessToken("BQAP5kOgmxLfo_0f7ciKkqs78oktcKHeX3M8HHcPduNJqjVSKBEHlWHmKaWfE70gVsSi691eJaA4Y4BVD9tXGYA0lXEA-4-kCOTjiSYy1vIzyVIpTBQpb5vLedgP3HHnAE-qYiO9aM9VrgJoSFXIYzmijcegbOHzGPcyyL4Idwujd87tqzkEqBbFIzTc")

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

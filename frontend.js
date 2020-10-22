var spotifyApi = new SpotifyWebApi();


spotifyApi.setAccessToken("BQDEbSVKTMoGDlAPnsDaj_Cob8QJFuYkeTY9nyehm9ZGKBZWCsL_-hhV7HBaF3SqrIMkXtOWP0xReBWX4m9Vq5LRtaypkIW2zboPGzX7g8dS0EgTU3Rn9ZhMjThJMEumPOQHuzcgbNpvpZNHNR4yRj_vlck7VCFYC_aXdSRKYUzvT3mJoEqsiYNcsnmC")

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

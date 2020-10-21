var spotifyApi = new SpotifyWebApi();


spotifyApi.setAccessToken("BQDCCygYr3ZGajK8qu5eHAMWkonf4pPhIh-syXIHKCTldlbxTwmQyDzbCXv5lNPV5qP5QF1pBQaPIO-al8a2nn4hN_DwmxAXgk0APDiqYrMRrTaOEPcLcE3_z7TYyJ-bv701G7HUju-DxNPdTg13RY7MuVAGcp2UW_z_3oVO7a8i-n9sZEAorTsXT2KG")

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

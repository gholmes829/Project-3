
var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQD7ii0zA-xIE7Kjcbjzy-53mAauhYswgk25duWRY4ogFT7baEqsCbQEyP0mECkEhtLE1pG1zBuqKeOFks44OJNI1PRCe4s-wcU_kox7FDh7sJO5oQSNgJUZNSWC0Ug3adIs-_3qscs3owKjLx1dh2sNKGG4_5qAf621LpBfBnVetq2Pv6qNiX2B6FEt');

/**
This is an example of the JMperez spotify web api
*/
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function(data) {
    console.log('Artist albums', data);
  },
  function (err) {
    console.error(err);
  }
);
console.log(spotifyApi.getAccessToken());


var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQCJzJ5jT30uDzMg9qIgTJsRSJG0B5z1el6LMex0hpxvbbZlUuK7w4ntsCR5uhy7pq4p_5Aw5QZh9IGvhPfwZ3CSB6qz7bXD7o6AxQ9PaNItDrPxPYKxsYQVjDG13s72yokUfQSoGm0ZWiUwAyT8P_MD2zldjtmkruyarGdP8MbUJyMefjK2l9YL-Vdn');

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

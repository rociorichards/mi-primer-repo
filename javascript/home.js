let urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=02e0e755b1f9c129e53aa7c8af3d9868';
let urlMasVisto = 'https://api.themoviedb.org/3/movie/top_rated?api_key=02e0e755b1f9c129e53aa7c8af3d9868';
let UrlSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=02e0e755b1f9c129e53aa7c8af3d9868';

fetch(urlPopulares)
then(data => data.json())
.then(data => {


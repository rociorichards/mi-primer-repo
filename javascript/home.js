
let urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=02e0e755b1f9c129e53aa7c8af3d9868';
let urlMasVisto = 'https://api.themoviedb.org/3/movie/top_rated?api_key=02e0e755b1f9c129e53aa7c8af3d9868';
let urlSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=02e0e755b1f9c129e53aa7c8af3d9868';

fetch(urlPopulares)
.then(function(resp) {
  return resp.json()
})
.then(function(data) {

    let contenedor = document.querySelector('.listado-items');
    let html = '';
    
    for(let i=0; i < data.results.length; i++) {
      html += `
        <article class="item">


          <a href=" detalle.html?id=${ data.results[i].id }&tipo=tv">

          <a href="detalle.html?id=${ data.results[i].id }&tipo=movie">


          <a href=" detalle.html?id=${ data.results[i].id }&tipo=movie">


          <a href="detalle.html?id=${ data.results[i].id }">

            <img src="https://image.tmdb.org/t/p/w500/${ data.results[i].poster_path }" alt="pela" class="titan">
            <h4>
              ${ data.results[i].title }
            </h4>
            <p>Estreno ${ data.results[i].release_date }</p>
          </a>
        </article>
      `
    }
    
    contenedor.innerHTML = html;

})


fetch(urlMasVisto)
.then(function(resp) {
  return resp.json()
})
.then(function(data) {
  

   let contenedor = document.querySelector('.listado-items1');
   let html = '';
   
   for(let i=0; i < data.results.length; i++) {
    html +=   `
      <article class="item">
        <a href=detalle.html?id=${ data.results[i].id }&tipo=movie">
          <img src="https://image.tmdb.org/t/p/w500/${ data.results[i].poster_path }" alt="pela" class="titan">
          <h4>
            ${ data.results[i].title }
          </h4>
          <p>Estreno ${ data.results[i].release_date } </p>
        </a>
      </article>
    `
  }
  contenedor.innerHTML = html;

})



fetch(urlSeries)
.then(function(resp) {
  return resp.json()
})
.then(function(data) {

    let contenedor = document.querySelector('.listado-items2')
    let html = '';
    for(let i=0; i < data.results.length; i++) {
        html +=   `
          <article class="item">
            <a href="detalle.html?id=${ data.results[i].id }&tipo=tv">
              <img src="https://image.tmdb.org/t/p/w500/${ data.results[i].poster_path }" alt="pela" class="titan">
              <h4>
                ${ data.results[i].original_name }
              </h4>
              <p>Estreno ${ data.results[i].first_air_date }</p>
            </a>
          </article>
        `
      }
  
      contenedor.innerHTML = html;
    })





let urlParams = new URLSearchParams(window.location.search);
let id_genero = urlParams.get('idDeGenero');
let genero = urlParams.get('genero');


document.querySelector('#genero').innerHTML = genero 

let urlPeliculas = 'https://api.themoviedb.org/3/discover/movie?api_key=02e0e755b1f9c129e53aa7c8af3d9868&with_genres=' + id_genero
let urlSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=02e0e755b1f9c129e53aa7c8af3d9868&with_genres=' + id_genero


fetch(urlPeliculas)
.then(function(response){
  return response.json()
})
.then(function(data){ 

    let contenedor = document.querySelector('#peliculas');
    let html = '';
    
    for(let i=0; i < data.results.length; i++) {
      html = html + `
        <article class="item">
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

    if(data.results.length == 0) {
      html = '<h3 class="segundo">Error no se encontraron peliculas</h3>';
    }

    contenedor.innerHTML = html;

})

fetch(urlSeries)
.then(function(response){
  return response.json()
})
.then(function(data){


  let contenedor = document.querySelector('#series');
  let html = '';
  
  for(let i=0; i < data.results.length; i++) {
    html = html + `
      <article class="item">
        <a href="detalle.html?id=${ data.results[i].id }">
          <img src="https://image.tmdb.org/t/p/w500/${ data.results[i].poster_path }" alt="pela" class="titan">
          <h4>
            ${ data.results[i].original_name }
          </h4>
          <p>Estreno ${ data.results[i].first_air_date }</p>
        </a>
      </article>
    `
  }
  
  if(data.results.length == 0) {
    html = '<h3 class="segundo">Error no se encontraron series</h3>';
  }

  contenedor.innerHTML = html;

})

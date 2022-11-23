
let urlParams = new URLSearchParams(window.location.search);
let buscar = urlParams.get('buscar');
let urlPeliculas = 'https://api.themoviedb.org/3/search/movie?api_key=02e0e755b1f9c129e53aa7c8af3d9868&query=' + buscar
let urlSeries = 'https://api.themoviedb.org/3/search/tv?api_key=02e0e755b1f9c129e53aa7c8af3d9868&query=' + buscar

document.querySelector('#buscado').innerHTML = buscar

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
      html = '<h3 class="segundo">No hay resutlados para su busqueda</h3>';
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
          <a href="detalleseries.html?id=${ data.results[i].id }">
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
      html = '<h3 class="segundo">No hay resutlados para su busqueda</h3>';
    }

    contenedor.innerHTML = html;

})

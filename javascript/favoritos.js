let peliculas = []
let series = []

let datosPeliculas = localStorage.getItem('peliculas')
let datosSeries = localStorage.getItem('series')

if(datosPeliculas != null) {
  peliculas = JSON.parse(datosPeliculas)
}
if(datosSeries != null) {
  series = JSON.parse(datosSeries)
}

let contenedor1 = document.querySelector('#peliculas-favoritas');
let contenedor2 = document.querySelector('#series-favoritas');
let html1 = '';
let html2 = '';


for(let i = 0; i < peliculas.length; i++) {
  html1 = html1 + `
        <article class="item">
          <a href="detalle.html?id=${ peliculas[i].id }&tipo=movie">
            <img src="https://image.tmdb.org/t/p/w500/${ peliculas[i].poster_path }" alt="pela" class="titan">
            <h4>
              ${ peliculas[i].title }
            </h4>
            <p>Estreno ${ peliculas[i].release_date }</p>
          </a>
        </article>
      `
}

contenedor1.innerHTML = html1;

for(let i = 0; i < series.length; i++) {
  html2 = html2 + `
        <article class="item">
          <a href="detalle.html?id=${ series[i].id }&tipo=tv">
            <img src="https://image.tmdb.org/t/p/w500/${ series[i].poster_path }" alt="pela" class="titan">
            <h4>
              ${ series[i].name }
            </h4>
            <p>Estreno ${ peliculas[i].release_date }</p>
          </a>
        </article>
      `
}

contenedor2.innerHTML = html2;


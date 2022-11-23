let datosPeliculas = localStorage.getItem ('peliculas')
let datosSeries = localStorage.getItem('series')
let peliculas = []
let series = []

if(datosPeliculas != null) {
  peliculas = JSON.parse(datosPeliculas)
} else{
  peliculas = []
}

if(datosSeries != null) {
  series= JSON.parse(datosSeries)
} else {
  series = []
}

let contenedor1 = document.querySelector('#peliculas-favoritas');
let contenedor2 = document.querySelector('#series-favoritas');
let html1 = '';
let html2 = '';

      
for(let i = 0; i < peliculas.length; i++) {

    html1 = html1 + `
    <article class="item">
      <a href="detalle.html?id=${ peliculas[i].id }">
        <img src="https://image.tmdb.org/t/p/w500/${ peliculas[i].poster_path }" alt="pela" class="titan">
        <h4>
          ${ peliculas[i].title }
        </h4>
        <p>Estreno ${ peliculas[i].release_date }</p>
        </a>
      <button onclick="eliminarPelicula(${peliculas[i].id}, 'peliculas')">Quitar</button>
    </article>
  `
}

contenedor1.innerHTML = html1;

for(let i = 0; i < series.length; i++) {

    html2 = html2 + `
    <article class="item">
      <a href="detalleseries.html?id=${ series[i].id }">
        <img src="https://image.tmdb.org/t/p/w500/${ series[i].poster_path }" alt="pela" class="titan">
        <h4>
          ${ series[i].original_name }
        </h4>
        <p>Estreno ${ series[i].first_air_date }</p>
        </a>
      <button onclick="eliminarPelicula(${series[i].id}, 'series')">Quitar</button>
    </article>
  `
}

contenedor2.innerHTML = html2;


function eliminarPelicula(id, tipo) {

  let resto = [];
  let datos = localStorage.getItem(tipo)
  let items = JSON.parse(datos)

  for(let i = 0; i < items.length; i++) {
      if(id != items[i].id) {
        resto.push(items[i])
      }
  }

  localStorage.setItem(tipo, JSON.stringify(resto))
  location.reload()
}
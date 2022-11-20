

<<<<<<< HEAD
let datosPeliculas = localStorage.getItem ('peliculas')
=======
let datosPeliculas = localStorage.getItem("películas")
>>>>>>> cf8dc0cee8ddb75811107860a93d048992bb3151
let datosSeries = localStorage.getItem('series')
let peliculas
let series

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

<<<<<<< HEAD
window.addEventListener('load', function(){
  let favs = getFavsStorage()
  if(favs.length == 0){
      container.innerHTML += `
      <li>
          <h4>No tienes favoritos</h4>
      </li>
=======
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
>>>>>>> cf8dc0cee8ddb75811107860a93d048992bb3151
      `
  } else {
      listContainer.innerHTML += `
      <h2>
          Tienes ${favs.length} favoritos
      </h2>
      ` 
      getAllFavsAndPrint(favs)
  }
})

function getFavsStorage(){
  let storage = localStorage.getItem('favoritos')

<<<<<<< HEAD
  if(storage !== null && storage !== undefined){
      return JSON.parse(storage)
  } else {
      return []
  }
=======
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
>>>>>>> cf8dc0cee8ddb75811107860a93d048992bb3151
}

function getAllFavsAndPrint(arrFavs){
  /*
  arrFavs vale [4, 8, 12]
  */
  for(let i = 0; i < arrFavs.length ; i++){
      fetch(`https://fakestoreapi.com/products/${arrFavs[i]}`)
      .then(function(resp){
          return resp.json()
      })
      .then(function(data){
          container.innerHTML += `
          <li>
              <article>
                  <img class='imagen' src='${data.image}' >
                  <a href='./details.html?id=${data.id}'>
                  <h5>${data.title}</h5>
                  </a>
              </article>
          </li>
          `
      })
      .catch(function(error){
          console.log(error)
      })
  }
}

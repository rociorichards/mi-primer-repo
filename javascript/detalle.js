let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
let tipo = urlParams.get('tipo');
let url = "https://api.themoviedb.org/3/movie/550?api_key=8d82a1bf2b697b9dbc93552eab4d6d93";

fetch(url)
  .then(data => data.json())
  .then(data => {
    console.log(data);

    let titulo = document.querySelector('.titulo')
    let sinopsis = document.querySelector('.sinopsis')

    if(tipo == 'tv') {
      titulo.innerHTML = data.name
    }
    if(tipo == 'movie') {
      titulo.innerHTML = data.title
    }

    sinopsis.innerHTML = data.overview
    
    document.querySelector('.favoritos').addEventListener('click',()=>{

      if(tipo == 'tv') {

        let datosSeries = localStorage.getItem('series');
        let series = [];
  
        if(datosSeries != null) {
          series = JSON.parse(datosSeries);
          series.push(data)
        }
        else{
          series.push(data)
        }
        
        localStorage.setItem('series', JSON.stringify(series))
       
      }

      if(tipo == 'movie') {

        let datosPeliculas = localStorage.getItem('peliculas');
        let peliculas = [];
  
        if(datosPeliculas != null) {
          peliculas = JSON.parse(datosPeliculas);
          peliculas.push(data)
        }
        else{
          peliculas.push(data)
        }
        
        localStorage.setItem('peliculas', JSON.stringify(peliculas))
      }


    })

  })



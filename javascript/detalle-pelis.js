//Primero extraigo todos los datos de la API
let query = location.search

let urlParams= new URLSearchParams(query)// Sirve para obtener los parametros de una URL

let id= urlParams.get("id")// Sirve para captar específicamente el ID de una pelicula 

let container1= document.querySelector('.caja')
let section= document.querySelector('.sinopsis')
let section2= document.querySelector('.datos ')
let a= document.querySelector('.plataformas ')

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)
//Func Asincrónica
.then(function(response){
    //Funcion que toma como parámetro la respuesta de la API
    return response.json()
    //Paso a formato JSON para que Java lo lea
})
.then(function(data){
    //console.log(data)
//Ahora extraigo dato por dato y los asigno a las partes del html
//Me guardo los titulos en una variable y luego con inner y queryselectorall le asigno los titulos corresponedientes
    container1.innerHTML = ` 
            <img class='fondoimg' src='https://image.tmdb.org/t/p/original${data.backdrop_path}' />
            <h1 class="titulo">${data.title}</h1>
            <div class="botones">
                <section class="estrellas">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </section>
                <section class="favoritos">
                    <i id="agregarFavorito" clas="fa-solid fa-circle-plus"></i>
                </section>       
            </div>
        `
    //Hago lo mismo con la sinópsis, calificación (rating), fecha de estreno y la duración.

    section.innerHTML = ` 
        <section class="sinopsis">
        <p>${data.overview}</p>
        </section>
        `
    let genero= [] ;
    for(let i=0; i< data.genres.length; i++){
       genero.push(data.genres[i].name )  
    }

    section2.innerHTML=   ` 
    <p>Generos: <a href="detalle-genero.html" class="genero"> ${genero} </a></p>
    <p>Fecha de estreno: ${data.release_date}</p>
    <p>Duración: ${data.runtime} mins</p>
    <p> Calificación: ${data.vote_average} /10 </p>
    <a href=" plataformas.html?id=${ data.id }&tipo=movie"> Otras plataformas</a>
   ` 

   //agrego a favoritos
   document.querySelector('#agregarFavorito').addEventListener('click', function(){

    let peliculas = [];

    let datosLocalStorage = localStorage.getItem('peliculas');

    if(datosLocalStorage) {
        peliculas = JSON.parse(datosLocalStorage);

        let estaGuardada = false;

        for(let i = 0; i < peliculas.length; i++)
            if(data.id == peliculas[i].id) {
                estaGuardada = true;
            }
    
   }
    if(!estaGuardada) {
        peliculas.push(data)
    }
    else {
        peliculas.push(data)
    }
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
})





})
.catch(function(error){
    console.log(error)
})

//Lista de plataformas en donde se puede ver la película.





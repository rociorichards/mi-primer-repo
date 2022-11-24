
let query = location.search

let urlParams= new URLSearchParams(query)


let id= urlParams.get("id")

console.log(id)

let contenedor0= document.querySelector('.cajaserie')

let seccion0= document.querySelector('.sinopsis')

let seccion1= document.querySelector('.datos')


fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)

.then(function(response){
    return response.json()
})
.then(function(data){ 
    contenedor0.innerHTML=` 
        <img class='fondoimg' src='https://image.tmdb.org/t/p/original${data.backdrop_path}' />
        <h1 class="titulo">${data.original_name}</h1>
        <div class="botones">
            <section class="estrellas">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </section>
            <section class="favoritos">
                <i id="agregarFavorito" class="fa-solid fa-circle-plus"></i>
            </section>       
        </div>
    
    ` 
    seccion0.innerHTML=` 
    
    <section class="sinopsis">
    <p>${data.overview}</p>
    </section>

` 
    let genero= [] ;
    for(let i=0; i< data.genres.length; i++){
       genero.push(data.genres[i].name )  
    }

    seccion1.innerHTML=   ` 
    <p>Generos: <a href="detalle-genero.html" class="genero"> ${genero} </a></p>
    <p>Fecha de estreno: ${data.first_air_date}</p>
    <p> Calificación: ${data.vote_average} /10 </p>
    <a href=" plataformasseries.html?id=${ data.id }&tipo=tv"> Otras plataformas</a> ` 
    
    
//agregar a favoritos
document.querySelector('#agregarFavorito').addEventListener('click', function(){

    let series = [];

    let datosLocalStorage = localStorage.getItem('series');

    if(datosLocalStorage) {
        series = JSON.parse(datosLocalStorage);

        let estaGuardada = false;

        for(let i = 0; i < series.length; i++) {
            if(data.id == series[i].id) {
                estaGuardada = true;
            }
        }

        if(!estaGuardada) {
            series.push(data)
        }

    }
    else {
        series.push(data)
    }

    localStorage.setItem('series', JSON.stringify(series))
})


})
.catch(function(error){
    console.log(error)
})
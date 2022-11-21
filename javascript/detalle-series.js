
let query = location.search

let urlParams= new URLSearchParams(query)


let id= urlParams.get("id")

let contenedor= document.querySelector('.cajaserie')

let seccion= document.querySelector('.sinopsis')


fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)

.then(function(response){
    return response.json()
})
.then(function(data){ 
    seccion.innerHTML=` 
    
            <section class="sinopsis">
            <p>${data.overview}</p>
            </section>

        ` 
    contenedor.innerHTML=` 
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
                <i class="fa-solid fa-circle-plus"></i>
            </section>       
        </div>
    
    ` 


})
.catch(function(error){
    console.log(error)
})
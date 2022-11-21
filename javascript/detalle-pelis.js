//Primero extraigo todos los datos de la API
let query = location.search

let urlParams= new URLSearchParams(query)// Sirve para obtener los parametros de una URL

let id= urlParams.get("id")// Sirve para captar específicamente el ID de una pelicula 


let container= document.querySelector('.caja')
let section= document.querySelector('.sinopsis')


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)
//Func Asincrónica
.then(function(response){
    //Funcion que toma como parámetro la respuesta de la API
    return response.json()
    //Paso a formato JSON para que Java lo lea
})
.then(function(data){
//Ahora extraigo dato por dato y los asigno a las partes del html
//Me guardo los titulos en una variable y luego con inner y queryselectorall le asigno los titulos corresponedientes
    container.innerHTML = ` 
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
                    <i class="fa-solid fa-circle-plus"></i>
                </section>       
            </div>
           

        `
    section.innerHTML = ` 
        <section class="sinopsis">
        <p>${data.overview}</p>
        </section>
        

        `

})
.catch(function(error){
    console.log(error)
})
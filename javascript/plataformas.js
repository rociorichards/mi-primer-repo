let query = location.search

let urlParams= new URLSearchParams(query)

let id= urlParams.get("id")

let divplataformas= document.querySelector('.plataformas')

fetch( `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=02e0e755b1f9c129e53aa7c8af3d9868 ` )
.then(function(respuesta){
    respuesta.json()
})
.then(function(data){
    divplataformas.innerHTML= ` 

    <section class="logos" src='https://image.tmdb.org/t/p/original${data.logo_path[1]}'>
    <img class="imgplataf">
  </section>

  <section class="nombreplataf">
    <p></p>
  </section>
  
    ` 
})
.catch(function(error){
    console.log(error)
})

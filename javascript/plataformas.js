let query = location.search

let urlParams= new URLSearchParams(query)

let ID= urlParams.get("id");

let divplataformas= document.querySelector('.plataformas');

let div='';

console.log(ID)

fetch( `https://api.themoviedb.org/3/movie/${ID}/watch/providers?api_key=02e0e755b1f9c129e53aa7c8af3d9868` )
.then(function(response){
    response.json()
    console.log(response)
})
.then(function(data){

    console.log(data)

  /*   for(let i=0; i < info.results.length; i++) {
    div= ` 

    <section class="logos">
    <img class="imgplataf" src='https://image.tmdb.org/t/p/original${data.logo_path[i]}'>
    </section>

  <section class="nombreplataf">
    <p></p>
  </section>
  
    `  
  }*/
    
})
.catch(function(error){
    console.log(error)
})

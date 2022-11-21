
let query = location.search

let urlParams= new URLSearchParams(query)


let id= urlParams.get("id")

let datos= document.querySelector('.datos')


fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)

.then(function(response){
    return response.json()
})
.then(function(data){ 
    let contenedorI = document.querySelector('.masgeneros');

    let contenedorII= document.querySelector('.masmasgeneros');

    let arrayDeGeneros = data.genres;

    let divI = "";
    let divII = "";

    for (let i = 0; i < arrayDeGeneros.length; i++) {
        if(i<8){
            divI+= ` 
                <ul class="clasif">
                    <a  class="sindecoracion"href="generos.html?idDeGenero=${arrayDeGeneros[i].id}&genero=${arrayDeGeneros[i].name}"> </a>
                    <li> ${arrayDeGeneros[i].name} </li>
                    </a>
                </ul>
        ` 
        contenedorI.innerHTML = divI
        }
        else{
            console.log(i)
            console.log(arrayDeGeneros)
            divII+= ` 
                <ul class="clasif">
                    <a  class="sindecoracion"href="generos.html?idDeGenero=${arrayDeGeneros[i].id}&genero=${arrayDeGeneros[i].name}"> </a>
                    <li> ${arrayDeGeneros[i].name} </li>
                    </a>
                </ul> ` 
            contenedorII.innerHTML = divII
        }
        
    }
    
})
.catch(function(error){
    console.log(error)
})
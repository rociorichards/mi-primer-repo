
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
    let contenedorII= document.querySelector=('.masmasgeneros')

    let arrayDeGeneros = data.genres

    let divI = ""
    for (let i = 0; i < 8; i++) {
        divI= '<a href="generos.html?idDeGenero='+arrayDeGeneros[i].id+'&genero='+arrayDeGeneros[i].name+'" class="generos">'+ arrayDeGeneros[i].name+'</a>'
        divI+='<br>'
        contenedorI.innerHTML += divI
    }
    let divII=''
    for (let i = 0; i < 8; i++) {
        divII= '<a href="generos.html?idDeGenero='+arrayDeGeneros[i].id+'&genero='+arrayDeGeneros[i].name+'" class="generos">'+ arrayDeGeneros[i].name+'</a>'
        divII+='<br>'
        contenedorII.innerHTML += divII
    }
    
    
})
.catch(function(error){
    console.log(error)
})
let api_key= "?api_key=8d82a1bf2b697b9dbc93552eab4d6d93&language=en-US"
let endpoint= "https://api.themoviedb.org/3/movie/"
let peli= location.search
let urlparmas= new URLSearchParams(peli)
let contra= urlparmas.get("peli")
fetch(`${endpoint}${contra}${api_key}`)
.then(function(respuesta){
    respuesta.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

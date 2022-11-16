let query=location.search
let api_key= "?api_key=8d82a1bf2b697b9dbc93552eab4d6d93&language=en-US"
let endpoint= "https://api.themoviedb.org/3/movie/"
let urlParams= new URLSearchParams(query)
let id= urlParams.get('id')
let titulo = document.querySelector(".titulo")
fetch(`${endpoint}${id}${api_key}`)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
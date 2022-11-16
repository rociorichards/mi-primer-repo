let query=location.search
let endpoint= "https://api.themoviedb.org/3/movie/"
let urlParams= new URLSearchParams(query)
let id= urlParams.get('id')
let titulo = document.querySelector(".titulo")
fetch(`${endpoint}${id}`)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
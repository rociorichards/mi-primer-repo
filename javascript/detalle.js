//Primero extraigo todos los datos de la API
window.onload=function(){
// Onload es un evento que se activa cuando termina de cargar la página, sirve para capturar los elementos del html mediante sus clases
var urlParams= new URLSearchParams(window.location.search);// Sirve para obtener los parametros de una URL
var ID= urlParams.get("idpeli");// Sirve para captar específicamente el ID de una pelicula 

fetch("https://api.themoviedb.org/3/movie/550?api_key=8d82a1bf2b697b9dbc93552eab4d6d93")//Func Asincrónica
.then(function(response){//Funcion que toma como parámetro la respuesta de la API
    return response.json()//Paso a formato JSON para que Java lo lea
})
//Ahora extraigo dato por dato y los asigno a las partes del html
.then(function(data){
    //Me guardo los titulos en una variable y luego con inner y queryselectorall le asigno los titulos corresponedientes
    let titulopeli= (data.title);
    document.querySelectorAll(".titulo").innerHTML=titulopeli;
    //Hago lo mismo con el fondo
    let fondo=(data.poster_path);
})

}

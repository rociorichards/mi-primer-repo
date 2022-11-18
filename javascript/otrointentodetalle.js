console.log('Hola mundo')
//Primero extraigo todos los datos de la API
let query = location.search
let urlParams= new URLSearchParams(query);// Sirve para obtener los parametros de una URL

let id= urlParams.get("id");// Sirve para captar específicamente el ID de una pelicula 
console.log(id)
console.log('hola chicos')


fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=02e0e755b1f9c129e53aa7c8af3d9868`)//Func Asincrónica
.then(function(response){
    //Funcion que toma como parámetro la respuesta de la API
    return response.json()
    //Paso a formato JSON para que Java lo lea
})
.then(function(data){
//Ahora extraigo dato por dato y los asigno a las partes del html
//Me guardo los titulos en una variable y luego con inner y queryselectorall le asigno los titulos corresponedientes
    let titulopeli= (data.title);

    document.querySelectorAll(".titulo").innerHTML=titulopeli;

    //Hago lo mismo con el fondo

    let fondo=(data.poster_path);
})
.catch(function(error){
    console.log(error)
})
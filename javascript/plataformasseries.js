let query = location.search

let urlParams= new URLSearchParams(query)

let ID= urlParams.get("id");

let contain1 = document.querySelector(".rentarPelis")
let contain2 = document.querySelector(".comprarPelis")


console.log(ID)

fetch( `https://api.themoviedb.org/3/tv/${ID}/watch/providers?api_key=02e0e755b1f9c129e53aa7c8af3d9868` )
.then(function(response){
    return response.json()
    
})
.then(function(data){

    let keys = Object.keys(data.results) ;
    let arrayProviders = [];

    for(let i=0; i<keys.length; i++){
        if (keys[i] == "AR"){
            arrayProviders.push(data.results[keys[i]])
        } 
    }

    let buyMovies = [];
    let rentMovies = [];
    let keys2 = Object.keys(arrayProviders[0]);
    let arrayProviders2 = arrayProviders[0];

    for(let i=0; i< keys2.length; i++){
        console.log(keys2[i]);
        if (keys2[i] == "buy"){
            buyMovies.push(arrayProviders2[keys2[i]])
            console.log(buyMovies);
        }else if (keys2[i] == "rent") {
            rentMovies.push(arrayProviders2[keys2[i]])
            console.log(rentMovies);
        } 
    }

    let rentMovies2 = rentMovies[0];
    let buyMovies2 = buyMovies[0];

    for(let i=0; i< rentMovies2.length; i++){
        contain1.innerHTML += `
            <div>
                <h4 style = "color: white;">${rentMovies2[i].provider_name}</h4>
                <img src='https://image.tmdb.org/t/p/original${rentMovies2[i].logo_path}' />
            </div>`
    }
    for(let i=0; i< buyMovies2.length; i++){
        contain2.innerHTML += `
            <div>
                <h4 style = "color: white;">${buyMovies2[i].provider_name}</h4>
                <img src='https://image.tmdb.org/t/p/original${buyMovies2[i].logo_path}' />
            </div>`
    }

})
.catch(function(error){
    console.log(error)
})


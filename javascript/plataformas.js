let query = location.search

let urlParams= new URLSearchParams(query)

let ID= urlParams.get("id");

console.log(ID)

fetch( `https://api.themoviedb.org/3/movie/${ID}/watch/providers?api_key=02e0e755b1f9c129e53aa7c8af3d9868` )
.then(function(response){
    return response.json()
    
})
.then(function(data){
    

    let divplataformas= document.querySelector('.plataformas');
       
    let div='';
    let contra=Object.keys(data.results) ;
    let datos0=[];
    contra1=[];

    for(let i=0; i< contra.length; i++){

     
        datos0.push( data.results[contra[i]])
       //TODAS LAS CONTRASEÑAS DE LOS DIC PRINCIPALES
       contra1.push( Object.keys(datos0[i]))
        console.log(datos0)
        
    
    }
    
    console.log(contra1)
    contrafinal=""
     for(let c=0; c< contra1.length; c++){

        contra1[c]
        console.log(contra1[c])

        for(let o=0; o< contra1[c].length; o++){
            if (o>0){
                console.log(datos0[c][contra1[c][o]])
                let contras=Object.keys(datos0[c][contra1[c][o]])
                for(let z=0; z< contras.length; o++){
                    
                    let nombre= datos0[c][contra1[c][o][contras]]
                    console.log( nombre)
                }
            }
            


        }

    

        let datos1= (datos0[c]) //CONTRA DE LA DICCCIONARIOS DENTRO DE LO DIC PRINCIPALES

        //console.log(datos1)

        let datos2= Object.keys(datos1)

        datos3.push(datos2)

        //console.log(datos2)

        //console.log(datos3)

        //nombre_plataforma= datos3['provider_name']
        //logo= datos3['logo_path']
    //}
    //console.log(datos3)
        //console.log(c)
/* 
      div += ` 
        <section class="logos">
            <img class="imgplataf" src='https://image.tmdb.org/t/p/original${logo}'>
        </section>

        <section class="nombreplataf">
            <p>${nombre_plataforma}</p>
        </section>
  
    `     
    divplataformas.innerHTML=div  */
     }

})
.catch(function(error){
    console.log(error)
})

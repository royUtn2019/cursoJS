const apiKey = 'cf584d31d62082a77b459f25133dff15';

window.addEventListener('load', function(){

    cargarSelectCiudades();

    document.getElementById('selectCiudades').addEventListener('change',traerPronostico)


})



function cargarSelectCiudades(){
    
    traerCiudades();    

   
}

function traerCiudades(){
    // ajax json city.list
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200 ){
                
                let datos = JSON.parse(xhr.responseText);
                let ciudades = parsearArgentinas(datos);
                actualizarSelect(ciudades);
                console.log(ciudades); 
            }
            else{

                console.error(xhr.status + " " + xhr.statusText)

            }

        }
        else{

        }



    }
    xhr.open('GET', './city.list.json', true);
    xhr.send();

}

function parsearArgentinas(arr){
    return  arr.filter(ciudad => ciudad.country === "AR")
    .map(ciudad =>({id: ciudad.id, nombre :  ciudad.name + ", "+ ciudad.country}));

   
}

function traerPronostico(){

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 ){
            if(xhr.status == 200 ){
                
                let pronostico = JSON.parse(xhr.responseText);
                
                console.log(pronostico); 
                //document.getElementById('info').innerText = xhr.responseText();
            }
            else{

                console.error(xhr.status + " " + xhr.statusText)

            }

        }
        else{

        }



    }
    xhr.open('GET', armarURL(), true);
    xhr.send();

}

function actualizarSelect(ciudades){

    let selCiudades = document.getElementById('selectCiudades');

    for(ciudad of ciudades){

        let opcion = document.createElement('option');
        opcion.setAttribute('value', ciudad.id);
        let texto = document.createTextNode(ciudad.nombre);
        opcion.appendChild(texto);
        selCiudades.appendChild(opcion);
    }
}

function armarURL(){
    let  idCiudades = document.getElementById('selectCiudades').value;
    let url = "https://api.openweathermap.org/data/2.5/weather?id="+ idCiudades
    + "&lang=es&units=metric&APPID="+apiKey;

    return url;
}
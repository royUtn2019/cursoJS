window.addEventListener('load',()=>{

    let selPaises = document.getElementById('selPaises');
    let selCiudades = document.getElementById('selCiudades');
    //console.log(obtenerPaises(datos));

    selPaises.addEventListener('chance',()=>{
        cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));

    });
       
       
    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));
});


function cargarSelect(select, arr){
    let opcion;
    limpiarSelect(select);

    arr.forEach(element => {
    
        opcion= document.createElement('option');
        let texto = document.createTextNode(element);

        opcion.appendChild(texto);
        opcion.setAttribute('value',element);

        select.appendChild(opcion);
    });    
}


/*function obtenerPaises(arr){
    return arr.map(elemento=> elemento.pais)
    .unique()
    .sort();
      
}*/

let obtenerPaises = arr =>
    arr.map(elemento=> elemento.pais)
    .unique()
    .sort();


/*function obtenerCiudades(arr, pais){
    /*return arr.filter(elemnto => elemento.ciudades)
    .unique()
    .sort();*/

    /*return arr.filter(elemento =>elemento.pais === pais)
    .map(elemento => elemento.ciudades)
    .unique()  //funcion para sacar los repetidos
    .sort();   //funcion para ordenar
           
}*/

let obtenerCiudades = (arr,pais) =>
    arr.filter(elemento =>elemento.pais === pais)
    .map(elemento => elemento.ciudades)
    .unique()  //funcion para sacar los repetidos
    .sort();   //funcion para ordenar


Array.prototype.unique = function(){  ///FORMA DE PONER OTRA FUNCION PROMIA MIA AL ARRAY

    return vector =[... new Set(this)];
};


function limpiarSelect(select){
    while(select.hasChildNodes()){
        select.removeChild(select.firstChild);
    }

}
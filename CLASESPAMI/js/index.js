let listaPersonas = [];
function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;

    Persona.prototype.Saludar = function(){
        console.log("Hola, soy"+ this.nombre+" "+ this.apellido+" y tengo "+ this.edad)
    };
}
  
window.addEventListener('load', function(){

    var frm = document.forms[0];
    frm.addEventListener('submit',manejarSubmit);
});


function manejarSubmit(e){

    e.preventDefault();
    var frm = e.target;

    let nuevaPersona = traerPersona();

    listaPersonas.push(nuevaPersona);  //push agrega al final de la lista;
    
    cargarFormulario(nuevaPersona);

    limpiarFormulario();

}

function cargarFormulario( persona ){
    document.getElementById('txtNombre2').value = persona.nombre;
    document.getElementById('txtApellido2').value = persona.apellido;
    document.getElementById('txEdad2').value = persona.edad;

    if(persona.genero == "masculino"){
        document.getElementById('rdoMasculino2').checked = true;
    }
    else{
        document.getElementById('rdoFemenino2').checked = true;
    }

    document.getElementById('chkManeja2').value = persona.maneja;
    document.getElementById('chkNada2').value = persona.nada;
    document.getElementById('chkBicicleta2').value = persona.bicicleta;

    document.getElementById('selPais2').value = persona.pais;
}

function traerPersona(){

    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let edad = document.getElementById('txtEdad').value;
    let genero;
if(document.getElementById('rdoMasculino').checked == true){
    genero = "masculino";
}
else{
    genero = "femenino";
}

    let nada = document.getElementById('chkNada').checked;
    let bicicleta  = document.getElementById('chkBicicleta').checked;
    let maneja = document.getElementById('chkManeja').checked;
    let pais = document.getElementById('selPais').value;

    var nuevaPersona = new Persona(nombre,apellido,edad,genero,maneja,nada,bicicleta,pais);
    
    
    console.log(listaPersonas);

    return nuevaPersona;
}

function limpiarFormulario(){
    console.log(listaPersonas);


    document.getElementById('txtNombre').value = "";
    document.getElementById('txtApellido').value = "";
    document.getElementById('txEdad').value = "";
    document.getElementById('rdoMasculino').checked = true;
    document.getElementById('chkManeja').checked = false;
    document.getElementById('chkNada').checked = false
    document.getElementById('chkBicicleta').checked = false;
    document.getElementById('selPais').value ="";
}
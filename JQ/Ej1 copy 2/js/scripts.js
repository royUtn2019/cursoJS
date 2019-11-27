$(function(){

    let persona ={nombre:'juan', apellido:'Perez', edad:30};
    
    $('#btnLeft').click(function(){

       $.each(persona, function(clave, valor){

        console.log(clave+ " = "+valor);
       })

    });
    

});



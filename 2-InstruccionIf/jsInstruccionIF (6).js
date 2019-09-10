function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if ((edad > 0) && (edad < 13)) {

        alert ("Es un niño");
    }
    else{
        if ((edad >=13) && (edad <= 17)) {
            alert ("Es un adolescente");
        }
        else{
            if (edad >= 18){
                alert ("Es mayor de edad");
            }
            
        }
    }



}//FIN DE LA FUNCIÓN

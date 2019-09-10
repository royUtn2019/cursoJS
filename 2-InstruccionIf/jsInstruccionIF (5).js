function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
    if ((edad  < 13 ) || (edad > 17))  {
        alert("NO es adolescente");
    }
    else {
        alert("Es un adolescente");
    }

}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
 var edad = document.getElementById("edad").value;
 var est = document.getElementById("estadoCivil").value;

 if ((edad <18) && (est != "Soltero")){
     alert("Es muy pequeño para NO ser soltero.");
 }
	


}//FIN DE LA FUNCIÓN

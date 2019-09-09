/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
   

function sumar()
{	
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);    
    var sum =   n1 + n2;
    alert("La suma es: "+ sum);
}

function restar()
{
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
	var res = n1 - n2;
    alert("La resta es: "+ res);
}

function multiplicar()
{ 
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
	var mul = n1 * n2;
    alert("La multiplicacion es: "+ mul);
}

function dividir()
{
    var n1 = parseInt(document.getElementById("numeroUno").value);
    var n2 = parseInt(document.getElementById("numeroDos").value);
	var div = n1 / n2;
    alert("La division es: "+ div);
}


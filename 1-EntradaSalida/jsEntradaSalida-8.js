/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var n1= parseInt(document.getElementById("numeroDividendo").value);
    var n2= parseInt(document.getElementById("numeroDivisor").value);

    var res = n1 % n2;
    alert("El resto es: " + res);
}

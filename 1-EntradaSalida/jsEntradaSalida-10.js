/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var imp = parseInt(document.getElementById("importe").value);
    var desc = imp * 0.25;
    parseInt(document.getElementById("resultado").value = imp-desc);
}

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var imp = parseInt(document.getElementById("sueldo").value);
    var desc = imp * 0.1;
    parseInt(document.getElementById("resultado").value = (imp + desc));
	
}

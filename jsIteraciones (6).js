function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var valor;
	var i;// =0;
	/*  EJEMPLO CON WHILE
	while (i < 5) 
	{
		var valor = prompt("ingrese un numero");

		contador = contador + parseInt(valor);

		i++;
	}
	acumulador = contador;
	document.getElementById('suma').value=contador;
	document.getElementById('promedio').value=acumulador/5;

	
	EJEMPLO CON DO WHILE

	do{
		var valor = prompt("ingrese un numero");

		contador = contador + parseInt(valor);

		i++;
	} while( i < 5)
	acumulador = contador;
	document.getElementById('suma').value=contador;
	document.getElementById('promedio').value=acumulador/5;
	*/

	//EJEMPLO CON FOR  para GITHUB  royUtn2019  passs  tete2019
	for( i = 0 ; i < 5; i++)
	{
		valor = prompt("ingrese un numero");
		contador += parseInt(valor);
	}
	//acumulador = contador;
	document.getElementById('suma').value=contador;
	document.getElementById('promedio').value=contador/5;
}//FIN DE LA FUNCIÓN
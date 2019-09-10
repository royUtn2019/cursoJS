function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var ran = Math.round(Math.random()*10);

	if((ran == 9) || (ran ==10)) {
		alert("La Nota del examen es: "+ ran +"\nEXCELENTE");
	}
	if ((ran > 4) && (ran <=8)) {
		alert("La Nota del examen es: "+ ran +"\nAPROBADO");
	}
	if ((ran > 0) && (ran <=4)) {
		alert("La Nota del examen es: "+ ran +"\nVamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN
var estudiantes = 
	[{"codigo":"0321","nombre":"Oscar Pedraza","nota":3.8},{"codigo":"0213","nombre":"Andres Gomez","nota":4.2},
	{"codigo":"0564","nombre":"John Ramirez","nota": 2.8},{"codigo":"0879","nombre":"Carlos Fuentes","nota":4.4},
	{"codigo":"0789","nombre":"Marcela Castaño","nota":2.6},{"codigo":"0987","nombre":"Gina Florez","nota":4.6},
	{"codigo":"1897","nombre":"Camilo Rodriguez","nota":3.2},{"codigo":"1548","nombre":"Liliana Moreno","nota":3.1},
	{"codigo":"9871","nombre":"Daniel Puerto","nota":3.3},{"codigo":"5789","nombre":"Luisa Garzon","nota":3.0}]
//funcion mostrar todo los estudiantes

function leeJSON(e) {
	var x = ":::::::::::Estudiantes::::::::::<br>"
	for (var i = 0; i < e.length; i++) {
		x += "codigo: "+e[i].codigo+" - "+"nombre: "+e[i].nombre+" - "+"nota: "+e[i].nota+"<br>"
	};
	document.getElementById('todosObjetos').innerHTML = x;
}

function mostrarObjetos(){
	leeJSON(estudiantes)
}

//funcion mostrar el promedio

function promedio(e){
	var x = "::::::::::::::Nota Promedio::::::::::::<br>"
	promedioTotal = 0;
	for (var i = 0; i < e.length; i++) {
		promedioTotal += (e[i].nota)/10;

		};
		document.getElementById('todosObjetos').innerHTML = x+promedioTotal;
}

function notaPromedio(){
	promedio(estudiantes)
}

//funcion mostrar el promedio mayor

function nMayor(e) {
	var x = ":::::::::::Estudiante con el promedio maximo::::::::::<br>"
	var nmax = e[0].nota;
	var aux = "";
	for (var i = 0; i < e.length; i++) {		
		
		if (e[i].nota>nmax) {
			nmax = e[i].nota;
			pos=[i];
			aux = "Estudiante: " + e[pos].nombre+" - "+ "con la nota: "+nmax;
		};
		
	};
	document.getElementById('todosObjetos').innerHTML = x+aux;
}

function notaMayor(){
	nMayor(estudiantes)
}

//funcion mostrar el promedio menor

function nMenor(e) {
	var x = ":::::::::::Estudiante con el promedio menor::::::::::<br>"
	var nmin = e[0].nota;
	var aux = "";
	for (var i = 0; i < e.length; i++) {		
		
		if (e[i].nota<nmin) {
			nmin = e[i].nota;
			pos=[i];
			aux = "Estudiante: " + e[pos].nombre+" - "+ "con la nota: "+nmin;
		};
		
	};
	document.getElementById('todosObjetos').innerHTML = x+aux;
}

function notaMenor(){
	nMenor(estudiantes)
}

var nombre= document.getElementById("nombre");
var descripcion= document.getElementById("descripcion");
var boton = document.getElementById("btn");
var cancelar = document.getElementById("cancelar");
var mensaje= document.getElementById("error");

var validar= function(e){
if(nombre.value==""){

	mensaje.innerHTML= "Complete el campo obligatorio";
	e.preventDefault(); 

	}
}
var volver=function(){
window.history.back();
}

btn.addEventListener("click",validar);
cancelar.addEventListener("click", volver);
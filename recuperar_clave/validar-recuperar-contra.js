var usuario= document.getElementById("usuario");
var correo= document.getElementById("correo");
var palabra = document.getElementById("palabra");
var mensaje= document.getElementById("error");
var btn= document.getElementById("btn");

var validar= function(e){

	if(usuario.value== "" || correo.value== "" || palabra.value=="" ){
		
	mensaje.innerHTML= "Complete Todos los campos";
	e.preventDefault(); 

	}


}

btn.addEventListener("click",validar);
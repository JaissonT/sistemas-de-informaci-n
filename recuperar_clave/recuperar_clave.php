<?php 
include"..\include/conexion.php"; /*conexión*/


$usuario= $_POST['usuario'];
$correo= $_POST['correo'];
$palabra=$_POST['palabra'];

$consulta = "SELECT clave FROM USUARIOS WHERE Usuario='$usuario' and Correo='$correo' and Respuesta_de_seguridad='$palabra' ";

$resultado = pg_query($conexion,$consulta);
$filas= pg_num_rows($resultado); // numero de filas
if($filas>0){

	while($data = pg_fetch_array($resultado)){

		$clave= $data['clave'];

	}
//	echo $clave;

	echo '<script>
	alert("Tu clave es: '.$clave.'");
	window.history.go(-1);
	</script>';


}else{

	echo '<script>
	alert("Error");
	window.history.go(-1);
	</script>';
	
}


 ?>
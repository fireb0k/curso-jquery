<?php 
//echo 'Los datos han pasado por el Servidor en PHP';
//echo 'Los datos han pasado por el Servidor en PHP, como este mensaje está en el servidor, no necesito recargar mi navegador para que AJAX consulte y actualice el contenido de manera asíncrona';

$nombre = $_POST['nombre_txt'];
$email = $_POST['email_txt'];
$cumple = $_POST['cumple_txt'];
$asunto = $_POST['asunto_txt'];
$comentarios = $_POST['comentarios_txa'];

$respuesta =  '<p>Los datos que enviaste son:<br>';
$respuesta .= 'Nombre: ' . $nombre . '<br>';
$respuesta .= 'Email: ' . $email . '<br>';
$respuesta .= 'Cumple: ' . $cumple . '<br>';
$respuesta .= 'Asunto: ' . $asunto . '<br>';
$respuesta .= 'Comentarios: ' . $comentarios . '</p>';
$respuesta .= '<input id="limpiar" type="button" value="Limpiar Formulario">';

printf($respuesta);
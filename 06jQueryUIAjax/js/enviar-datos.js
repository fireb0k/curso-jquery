function enviarDatos(evento)
{
	//alert('funciona')
	evento.preventDefault()

	var opcionesAJAX = {
		url : 'php/servidor.php',
		method : 'POST', //GET o POST
		dataType : 'text', //json,xml,html,text,script
		data : $(this).serialize(),
		beforeSend : function (){
			//alert('antes de enviar info')
			$('#precarga').fadeIn('slow')
		},
		error : function ( xhr, textStatus, error){
			//alert('ocurrió un error')
			//console.log( xhr, textStatus, error )
			$('#precarga').fadeOut('slow', function (){
				$('#mensaje')
					.fadeIn('slow')
					//.html('<p>Ocurrió un error en el servidor</p>')
					.html('<p>Ocurrió el siguiente error en el servidor:<br>"<b>Error N°'+xhr.status+' Mensaje: '+xhr.statusText+'</b>"</p>')
			})
		},
		success : function (data, textStatus, xhr){
			//alert('éxito, el servidor respondió')
			console.log( data, textStatus, xhr )
			$('#precarga').fadeOut('slow', function (){
				$('#mensaje')
					.fadeIn('slow')
					//.html('<p>Éxito, el servidor respondió</p>')
					.html( data )
			})
		} 
	}

	/*
	console.log( 
		$(this),
		$(this).serialize()
	)
	*/

	$.ajax( opcionesAJAX )
}

$('#contacto').on('submit', enviarDatos)

//Eventos Asíncronos
//$('#limpiar').on('click', function (){
$(document).on('click', '#limpiar', function (){
	$('#contacto')[0].reset()
})
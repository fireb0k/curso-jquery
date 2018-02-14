/*
JS Novatos
	http://librosweb.es/libro/javascript/
	http://librosweb.es/libro/ajax/
JS Avanzado
	JavaScript The Good Parts
	http://www.maritimejournal.com/__data/assets/pdf_file/0020/1033940/Javascript-The-Good-Parts.pdf
*/

//Función anónima autoejecutable
(function ($){
	//jQuery le hereda todas sus características al nuevo objeto
	$.fn.extend({
		//Nombre del componente
		plugin : function (opcionesUsuario)
		{
			//Opciones por defecto del componente
			var opcionesIniciales = {	
				fondo : 'orangered',
				colorLetra : 'navy',
				letra : '2rem'
			},
				//$.extend() nos permite extender las opciones iniciales del plugin con las que posiblemente mande el usuario
				opc = $.extend( opcionesIniciales, opcionesUsuario )

			//Función constructora del componente donde irá toda la programación del mismo
			function inicializar()
			{
				//alert('funciona mi plugin')

				$(this).css({
					backgroundColor : opc.fondo,
					color : opc.colorLetra,
					fontSize : opc.letra
				})
			}

			//Por cada elemento que invoque el componente, se debe ejecutar una vez la función constructora
			return $(this).each( inicializar )

			/*
			return $(this).each(function (){

			})
			*/
		}
	})
})(jQuery)
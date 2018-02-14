/* jquery.onePageScrolling.js v1.0.0 */
(function ($){
	$.fn.extend({
		onePageScrolling : function (opcionesUsuario){
			var opcionesIniciales = {
				velocidad : 1000
			},
				opc = $.extend( opcionesIniciales, opcionesUsuario )

			function inicializar()
			{
				//alert('funciona')

				function aDondeScroll(evento)
				{
					evento.preventDefault()

					var idEnlace = $(this).attr('href'),
						coordsSeccion = $(idEnlace).offset().top

					console.log(
						idEnlace,
						coordsSeccion
					)

					$('html, body').animate({
						scrollTop : coordsSeccion
					}, opc.velocidad)
				}

				function colorBordeCabeceraActual()
				{
					var borde = $(this).attr('data-borde')

					$('.fixed-nav').css({borderBottomColor : borde})
				}

				function seccionActual()
				{
					$('.one-page').removeClass('actual')

					//console.log( $(this).attr('class') )
					console.log( $(this).hasClass('logo') )

					//if( $(this).attr('href') != '#inicio' )
					//if( $(this).attr('class') != 'logo' )
					if( !$(this).hasClass('logo') )
					{
						$(this).addClass('actual')
					}
				}

				$(this)
					.on('click', aDondeScroll)
					.on('click', colorBordeCabeceraActual)
					.on('click', seccionActual)
			}

			return $(this).each( inicializar )
		}
	})
})(jQuery)
/*
Para versionar
	http://semver.org/
Para minificar
	http://kangax.github.io/html-minifier/
	http://cssminifier.com/
	http://jscompress.com/
jquery.onePageScrolling.js v1.1.1
*/
(function ($){
	$.fn.extend({
		onePageScrolling : function (opcionesUsuario){
			var opcionesIniciales = {
				velocidad : 1000,
				direccion : 'vertical'  //horizontal
			},
				opc = $.extend( opcionesIniciales, opcionesUsuario )

			function inicializar()
			{
				//alert('funciona')

				function aDondeScroll(evento)
				{
					evento.preventDefault()

					var idEnlace = $(this).attr('href'),
						coordsSeccion

					if( opc.direccion == 'vertical' )
					{
						coordsSeccion = $(idEnlace).offset().top

						$('html, body').animate({
							scrollTop : coordsSeccion
						}, opc.velocidad)
					}
					else
					{
						coordsSeccion = $(idEnlace).offset().left

						$('html, body').animate({
							scrollLeft : coordsSeccion
						}, opc.velocidad)
					}

					/*
					console.log(
						idEnlace,
						coordsSeccion,
						opc.direccion
					)
					*/
				}

				/*
				function colorBordeCabeceraActual()
				{
					var borde = $(this).attr('data-borde')

					$('.fixed-nav').css({borderBottomColor : borde})
				}
				*/

				function seccionActual()
				{
					$('.one-page').removeClass('actual')

					//console.log( $(this).attr('class') )
					//console.log( $(this).hasClass('logo') )

					//if( $(this).attr('href') != '#inicio' )
					//if( $(this).attr('class') != 'logo' )
					if( !$(this).hasClass('logo') )
					{
						$(this).addClass('actual')
					}
				}

				$(this)
					.on('click', aDondeScroll)
					//.on('click', colorBordeCabeceraActual)
					.on('click', seccionActual)
			}

			return $(this).each( inicializar )
		}
	})

	$(document).on('ready', function (){
		if( $('.wrapper').attr("data-horizontal") )
		{
			var numSecciones = $('.wrapper').children().length,
				anchoWrapper = (numSecciones * 100).toString() + 'vw'

			/*
			console.log(
				numSecciones,
				anchoWrapper
			)
			*/

			$('.wrapper').css({width:anchoWrapper})

			$('body').css({overflow:'hidden'})

			$('.section').addClass('horizontal')
		}
		else
		{
			$('body').css({overflowX:'hidden'})
		}
	})
})(jQuery)
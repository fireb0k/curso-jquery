/*
Analisis e Implementación de Componentes.

Análisis:
	1)Ver el funcionamiento del componente.
	2)Ver que archivos necesito (js, css, img, fonts, etc).
	3)Analizar el código html y js que lo hace funcionar.
	4)LEER y REVISAR la DOCUMENTACIÓN, NO SEAS FLOJO y quieras todo FÁCIL. Esto hará que puedas sacar el máximo provecho del componente. 

Implementación:
	1)Nunca te adaptes a la estructura de la carpeta demo, ADAPTA el componente a la carpeta de tu proyecto.
	2)Copia los archivos necesarios a la estructura de tu carpetas (css, js, img, etc).
	3)Si el componente usa elementos multimedia, busca sus url en el css del mismo y reemplázalas por la nueva ruta que tendrán.
	4)En el css del componente nunca trates de cambiar atributos, puedes hacer que deje de funcionar, si acaso modifica colores para que se adapte al diseño de tu proyecto.

http://flexslider.woothemes.com/
http://fancyapps.com/fancybox/
*/
function efectos()
{
	$('.flexslider').flexslider({
		animation : 'slide',
		direction : 'vertical',
		/*slideShow : false*/
		controlNav : false
	})

	$('.galeria').fancybox()

	$('#efecto_1').fancybox({
		padding : 0
	})

	$('#efecto_2').fancybox({
		openEffect : 'elastic',
		openSpeed : 2000,
		closeEffect : 'none',
		closeSpeed : 3000
	})

	$('#efecto_3').fancybox({
		closeEffect : 'elastic',
		closeSpeed : 2000,
		helpers : {
			title : null,
			overlay : null
		}
	})

	$('#efecto_4').fancybox({
		helpers : {
			overlay : {
				closeClick : false
			},
			title : {
				type : 'inside' // 'float', 'inside', 'outside' or 'over'
			}
		}
	})

	$('#efecto_5').fancybox({
		helpers : {
			overlay : {
				css : {
					//'background-color' : '#F00'
					backgroundColor : 'rgba(255, 0, 0, .5)'
				}
			},
			title : {
				type : 'outside'
			}
		}
	})

	$('.otros').fancybox({
		//type : 'ajax'
	})

	$('.social').fancybox({
		helpers : {
			//media : {}
			media : true
		}
	})
}

$(document).on('ready', efectos)
/*
//jQuery('selector') o $('selector')
//Tipos de selectores:
	objetos js
	etiquetas html
	id css
	clases css
	pseudo clases y pseudo elementos css

//https://www.youtube.com/watch?v=PkV-_58-CeE

//Evento semántico
//4
window.onload = function (){
	alert('Se ha cargado el documento semánticamente con window')
}

//5
jQuery(window).load(function (){
	alert('Se ha cargado el documento semánticamente desde window con jQuery')
})

//3
document.onready = function (){
	alert('Se ha cargado el documento semánticamente con document')	
}

//1
$(document).ready(function (){
	alert('Se ha cargado el documento semánticamente desde document con jQuery')
})


//Eventos múltiples
//7
window.addEventListener('load', function (){
	alert('Se ha cargado el documento con listeners y window')
})

//6
$(window).on('load', function (){
	alert('Se ha cargado el documento con listeners de jQuery y window')
})

window.removeEventListener('load', function (){ })

$(window).off('load', function (){ })

//Este evento múltiple no existe en JS
document.addEventListener('ready', function (){
	alert('Se ha cargado el documento con listeners y document')
})

//2
$(document).on('ready', function (){
	alert('Se ha cargado el documento con listeners de jQuery y document')
})

document.removeEventListener('ready', function (){ })

$(document).off('ready', function (){ })
*/
function efectos()
{
	//alert('Mamá ya se invocar jQuery')

	/*
	jQuery('p').click(function (){
		jQuery(this).hide()
	})

	$('p').click(function (){
		$(this).hide()
	})
	*/

	$('p').on('click', function (){
		$(this).hide()
	})

	$('#boton').on('click', function (){
		$('p').show()
	})

	$('p').css('background-color', 'yellow')

	$('#boton2').on('click', function (){
		$('p').hide(2000)
	})

	$('#boton3').on('click', function (){
		$('p').show('slow') /* fast, slow y swing */
	})

	$('#boton4').on('click', function (){
		$('p').toggle()
	})

	$('#boton5').on('click', function (){
		$('p').toggle('swing')
	})

	$('.mostrar').on('click', function (){
		$('.deslizante').slideDown(1500)
	})

	$('.ocultar').on('click', function (){
		$('.deslizante').slideUp('fast')
	})

	$('.mostrar-ocultar').on('click', function (){
		$('.deslizante').slideToggle()
	})

	$('#boton6').on('click', function (){
		$('#cuadro').fadeTo(3000, .25)
	})

	$('#boton7').on('click', function (){
		$('#cuadro').fadeTo('slow', 1)
	})

	$('#boton8').on('click', function (){
		$('#cuadro').fadeOut(2000)
	})

	$('#boton9').on('click', function (){
		$('#cuadro').fadeIn(2000)
	})

	$('#parpadea').on('click', function (){
		$('#cuadro').fadeOut().fadeIn()
	})

	$('#boton10').on('click', function (){
		$('#animable')
			.animate({height : 300}, 'slow')
			.animate({width : 300}, 1500)
			.animate({height : 100, width : 100}, 3000)
	})

	$('#boton11').on('click', function (){
		$('#animable')
			.animate({left : '50%'}, 'swing')
			.animate({width : 400}, 1000)
			.animate({'font-size' : '3rem'}, 'fast')
			.animate({fontSize : '2rem'}, 'slow')
			//http://plugins.jquery.com/color/
			.animate({backgroundColor : '#123456'}, 500)
			.animate({color : 'red'}, 'swing')
			.animate({top : -100}, 1200)
			.animate({
				'font-size' : '1rem',
				left : 0,
				top : 0,
				width : 100,
				backgroundColor : '#EC673A',
				color : 'black'
			}, 5000)
	})

	$('#boton12').on('click', function (){
		/*
		$('#oculto').hide(2000)
		alert('El párrafo se ha ocultado')
		*/

		//función callback
		$('#oculto').hide(2000, function (){
			alert('El párrafo se ha ocultado')
		})
	})

	/*
	antes .before()
	<selector>
		antes .prepend()
		CONTENIDO .html()
		después .append()
	</selector>
	después .after()
	*/

	$('#boton13').on('click', function (){
		$('p').html('<i>El contenido ha sido cambiado</i>')
	})

	$('#boton14').on('click', function (){
		$('p').prepend('<b>Contenido agregado antes</b><img src="http://cursos.bextlan.com/img/jquery.png"> ')
	})

	$('#boton15').on('click', function (){
		$('p').append(' <b>contenido agregado después</b><input type="text">')
	})

	$('#boton16').on('click', function (){
		$('p').before('<div class="antes">Contenido agregado antes del selector</div>')
		$('.antes').css('background-color', 'magenta')
	})

	$('#boton17').on('click', function (){
		$('p').after('<div class="despues">Contenido agregado después del selector</div>')
		$('.despues').css('background-color', 'cyan')
	})

	$('#boton18').on('click', function (){
		$('p')
			.css('font-size', '2rem')
			.css({backgroundColor : 'skyblue'})
	})

	$('#boton19').on('click', function (){
		$('p').css({
			'background-color' : '#EEE',
			borderRadius : '1rem',
			border : 'thick solid #222',
			fontSize : '2rem',
			padding : '1rem',
			'text-shadow' : '.2rem .2rem .5rem #000'
		})
	})

	$('#enlace').on({
		click : function (evento){
			evento.preventDefault()
			alert('Se ha prevenido la acción por defecto del enlace')
		},
		mouseover : function (){
			//$('span').addClass('span-css')
			$('span').toggleClass('span-css')
		},
		mouseout : function (){
			//$('span').removeClass('span-css')
			$('span').toggleClass('span-css')
		}
	})

	//http://librosweb.es/libro/ajax/capitulo_7.html
	//https://www.npmjs.com/package/http-server
	$('#boton20').on('click', function (){
		$('#ajax').load('otro.html')
	})

	$('#boton21').on('click', function (){
		$('#ajax').load('otro.html', function (){
			$(this)
				.css({display : 'none'})
				.fadeIn(2000)
		})
	})

	$('#que-tecla').on('keyup', function (evento){
		$('#codigo-tecla').text(evento.keyCode)
	})

	$('#subir').on('click', function (){
		$('html, body').animate({
			scrollTop : 0,
			scrollLeft : 0 
		}, 1000)
	})
}

function muevete(evento)
{
	//console.log(evento)
	//alert(evento.keyCode)

	switch(evento.keyCode)
	{
		case 37:
			evento.preventDefault()
			$('#pacman').animate({left : '-=2rem'}, 'swing')
			break
		case 38:
			evento.preventDefault()
			$('#pacman').animate({top : '-=2rem'}, 'swing')
			break
		case 39:
			evento.preventDefault()
			$('#pacman').animate({left : '+=2rem'}, 'swing')
			break
		case 40:
			evento.preventDefault()
			$('#pacman').animate({top : '+=2rem'}, 'swing')		
			break
	}
}

function detectarScroll()
{
	var scrollVertical = $(window).scrollTop(),
		scrollHorizontal = $(window).scrollLeft()

	//console.log( scrollVertical, scrollHorizontal )

	return ( scrollVertical > 100 ) ? $('#subir').fadeIn() : $('#subir').fadeOut()
}

function responsiveDesign()
{
	var anchoPantalla = $(window).innerWidth(),
		altoPantalla = $(window).innerHeight()

	console.log( anchoPantalla, altoPantalla )

	if(anchoPantalla <= 480)
	{
		$('.item')
			.removeClass('dos-columnas tres-columnas cuatro-columnas')
	}
	else if(anchoPantalla <= 768)
	{
		$('.item')
			.addClass('dos-columnas')
			.removeClass('tres-columnas cuatro-columnas')
	}
	else if(anchoPantalla <= 1024)
	{
		$('.item')
			.addClass('tres-columnas')
			.removeClass('dos-columnas cuatro-columnas')
	}
	else
	{
		$('.item')
			.addClass('cuatro-columnas')
			.removeClass('dos-columnas tres-columnas')
	}
}

//$(document).ready(efectos)
$(document)
	.on('ready', efectos)
	.on('keydown', muevete)

$(window)
	.on('scroll', detectarScroll)
	.on('resize load', responsiveDesign)
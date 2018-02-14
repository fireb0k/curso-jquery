//http://api.jquerymobile.com/category/events/

function detectarOrientacion(e) {
	//alert(e.orientation);

	if ( e.orientation == 'portrait' || e.orientation == undefined ) {
		$('#portrait').show();
		$('#landscape').hide();
	} else if ( e.orientation == 'landscape' ) {
		$('#portrait').hide();
		$('#landscape').show();
	}
}

function detectarTapSwipe(e) {
	$('#tap').on('tap', function () {
		$(this).append('<p>Evento Tap</p>');
	});

	$('#tap').on('taphold', function () {
		$(this).append('<p>Evento Tap Hold</p>');
	});

	$('#swipe').on('swipe', function () {
		$(this).append('<p>Evento Swipe</p>');
	});

	$('#swipe').on('swipeleft', function () {
		$(this).append('<p>Evento Swipe Left</p>');
	});

	$('#swipe').on('swiperight', function () {
		$(this).append('<p>Evento Swipe Right</p>');
	});
}

$(window).on('load orientationchange', detectarOrientacion);
$(document).on('pageinit', detectarTapSwipe);

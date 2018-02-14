(function (){
	/*
	if( Modernizr.inputtypes.date )
	{
		alert('El navegador SI soporta input date')
	}
	else
	{
		alert('El navegador NO soporta input date')
	}
	*/
	var cssUI = '<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">',
		jsUI = '<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"><\/script>'

	!Modernizr.inputtypes.date && document.write( cssUI + jsUI )
		
	$(document).on('ready', function (){
		!Modernizr.inputtypes.date && $('#cumple').datepicker({
			dateFormat : 'dd/mm/yy'
		})
	})
})()
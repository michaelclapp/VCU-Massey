$(document).ready(function() {
	var image = $('.pull-right img, .pull-left img');
	var imageSource = $('.pull-right img, .pull-left img').attr('src');
	var imageAlt = $('.pull-right img, .pull-left img').attr('alt');

	if($(image).length != 0) {
		$('body').append('<div class="overlay"><div class="wrapper"></div></div>');
	};

	$(image).click(function(e) {
		e.preventDefault();
		$('.overlay').addClass('hello');
		var thisImageSrc = $(this).attr('src');
		var thisImageCaption = $(this).next('.caption').text();
		$('.overlay .wrapper').append('<img src="' + thisImageSrc + '" /><div class="caption">' + thisImageCaption + '</div>');
		e.stopPropagation();

		$('.overlay:not(.overlay .wrapper)').click(function() {
			$('.overlay').removeClass('hello');
			$('.overlay .wrapper img').remove();
			$('.overlay .wrapper .caption').remove();
		});
		$('.overlay .wrapper').click(function(e) {
			e.stopPropagation();
		});


		//	$(image).each(function() {
		//var thisImageSrc = $(this).attr('src');
		//	$('.overlay .wrapper').append('<img src="' + thisImageSrc + '" />');
	//});
	//	e.stopPropagation();
	//	$('.overlay:not(img)').click(function() {
	//	    $('.overlay').removeClass('hello');
	//	});
	});

	


});
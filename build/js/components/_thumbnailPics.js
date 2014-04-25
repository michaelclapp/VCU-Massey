$(document).ready(function() {
	var image = $('.lightbox img, .lightbox img');
	var imageSource = $('.lightbox img, .lightbox img').attr('src');
	var imageAlt = $('.lightbox img, .lightbox img').attr('alt');
	var lightboxBtn = $('.lightbox a');
	var imageCaption = $('.lightbox').next().text();

	if($(image).length != 0) {
		$('body').append('<div class="overlay"><div class="wrapper"></div></div>');
	};

	$(lightboxBtn).click(function(e) {
		e.preventDefault();
		$('.overlay').addClass('hello');
		var thisImageSrc = $(this).attr('src');
		var thisImageCaption = $(this).next('.caption').text();
		$('.overlay .wrapper').append('<img src="' + imageSource + '" /><div class="caption">' + imageCaption + '</div>');
		e.stopPropagation();

		$('.overlay:not(.overlay .wrapper)').click(function() {
			$('.overlay').removeClass('hello');
			$('.overlay .wrapper img').remove();
			$('.overlay .wrapper .caption').remove();
		});
		$('.overlay .wrapper').click(function(e) {
			e.stopPropagation();
		});

	});
});
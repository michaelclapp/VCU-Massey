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
		$(this).each(function() {
			e.preventDefault();
			$('.overlay').addClass('hello');

			var thisImageSrc = $(this).next().clone();
			var thisImageCaption = $(this).parent().next('.caption').text();

			$('.overlay .wrapper').append(thisImageSrc);
			$('.overlay .wrapper').append('<div class="caption">' + thisImageCaption + '</div>');
			e.stopPropagation();
		});

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

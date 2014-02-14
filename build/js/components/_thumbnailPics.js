$(document).ready(function() {
	var image = $('p.pull-right img');
	var imageSource = $('p.pull-right img').attr('src');
	var imageAlt = $('p.pull-right img').attr('alt');
	$('body').append('<div class="overlay"><div class="wrapper"><img src="' + imageSource + '" alt="' + imageAlt + '" /></div></div>');
	$(image).click(function() {
		$('.overlay').addClass('hello');
	});
	$('.overlay').click(function() {
		$(this).removeClass('hello');
	});
});
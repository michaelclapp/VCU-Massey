$(document).ready(function() {
	
	var image = $('#content p.pull-right img, #content p.pull-left img');
	
	$(image).each(function() {
		var imageCaption = $(this).attr('alt');
		$(this).after('<div class="caption">' + imageCaption + '</div>')
	});

});
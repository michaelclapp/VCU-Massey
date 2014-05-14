$(document).ready(function() {
	$('.cancer-nav a.cancer-menu').click(function(e) {
		e.preventDefault();
		$('.cancer-nav .cancers').toggleClass('hello');
	});
});

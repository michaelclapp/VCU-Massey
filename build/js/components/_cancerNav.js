$(document).ready(function() {
	$('.cancer-nav a.menu').click(function(e) {
		e.preventDefault();
		$('.cancer-nav .cancers').toggleClass('hello');
	});
});
$(document).ready(function(){
	$('a[href*=".pdf"]').addClass('pdf');
	$('a[href*=".doc"]').addClass('word');
	$('a[href*=".docx"]').addClass('word');
	$('a[href*=".xls"]').addClass('excel');
});
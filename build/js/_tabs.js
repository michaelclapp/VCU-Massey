$(document).ready(function () {
    $('#tabs').children('li').first().children('a').addClass('active')
        .next().addClass('is-open');

    $('#tabs').on('click', 'li > a', function(e) {
        e.preventDefault();
        $('ul#tabs li a').removeClass('active');
        $(this).addClass('active');
        $('ul#tabs section').removeClass('is-open');
        $(this).next().addClass('is-open');
    });
});
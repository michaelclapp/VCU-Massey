$(document).ready(function() {

    /* => Commented out because it is now included as part of /js/flexy/_flexyNav.js


    var tlp = $('nav ul > li');
    var tlpSpan = $('nav ul > li span')

    $(tlp).mouseover(function() {
      $(this).children('ul').addClass('dip');
    });
    $(tlp).mouseout(function() {
      $(this).children('ul').removeClass('dip');
    });
    $(tlpSpan).mouseover(function() {
      $(this).children('ul').addClass('dip');
      $(tlpSpan).addClass('dip');
    });
    $(tlpSpan).mouseout(function() {
      $(this).children('ul').removeClass('dip');
      $(tlpSpan).removeClass('dip');
    }); */

  $("#sidebar span").last().children().addClass('current');

  $('#breadcrumb-nav').children('p').children('a').last().addClass('current');

});

$(document).ready(function() {

  //Add menu button to all pages
  $('#rufio').append('<a href="#" id="menu">+</a>');
  
  var mainNav = $('#rufio nav');
  var menuBtn = $('a#menu');
  var tlLink = $('#rufio nav > ul li a');
  var tlLinkSpan = $('#rufio nav > ul li span a');
  var moreBtn = $('#rufio nav > ul li a.more');
  var secondLvl = $('#rufio nav > ul li > ul');

  //on click, make rest of page move offscreen
  $(menuBtn).on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#rufio nav > ul').toggleClass('active');
    $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').toggleClass('active-nav');

  });
 
  //remove active-nav if body is clicked
  $('body:not(nav)').click(function(e) {
    if( $('#wrapper').hasClass('active-nav')){
      $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').removeClass('active-nav');
      $('#rufio nav > ul').removeClass('active');
    }
  });

  $('nav').click(function(e) {
    e.stopPropagation();
  });

  //adding .more functionality to nav links with children
  $(tlLink).each(function() {
    if($(this).next().length > 0) {
      $(this).addClass('parent');
    }
  });
  $(tlLinkSpan).each(function() {
    var selectMe = $(this).parent().next();
    if($(selectMe).length > 0) {
      $(tlLinkSpan).addClass('parent');
    }
  });

  //if the li has children add a more + button
  $('li:has(a.parent)').prepend('<a class="more" href="#">+</a>');

  //$('.parent').before('<a class="more" href="#">+</a>');

  $('a.more').click(function(e){
    e.preventDefault();
    if($(this).next('span')) {
      $(this).next('span').next('ul').toggleClass('dip-mama').removeClass('dip');
    }
    $(this).next('a.parent').next('ul').toggleClass('dip-mama').removeClass('dip');
  });

});
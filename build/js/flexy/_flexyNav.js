$(document).ready(function() {
  
  var mainNav = $('#rufio nav');
  var menuBtn = $('a.menu');
  var qlBtn = $('a.quicklinks');
  var tlLink = $('#rufio nav > ul li a');
  var tlLinkSpan = $('#rufio nav > ul li span a');
  var moreBtn = $('#rufio nav > ul li a.more');
  var secondLvl = $('#rufio nav > ul li > ul');

  //on click, make rest of page move offscreen
  $(menuBtn).click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#rufio nav, #rufio nav > ul').toggleClass('active');
    $('#rufio nav > ul').removeClass('off-left');
    $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').toggleClass('active-nav');

  });

  $(qlBtn).click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#sidebar #quicklinks').toggleClass('active');
    $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').toggleClass('active-nav');
  });
 
  //remove active-nav if body is clicked
  $('body:not(nav)').click(function() {
    if( $('#wrapper').hasClass('active-nav')){
      $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').removeClass('active-nav');
      $('#rufio nav, #rufio nav > ul, #sidebar #quicklinks').removeClass('active');
      $('#rufio nav ul').addClass('off-left');
    }
  });
  
  $('nav, #sidebar #quicklinks').click(function(e) {
    e.stopPropagation();
  });

  $('#rufio nav > ul ul').addClass('off-left');

  $('#rufio nav li:has(ul)').prepend('<a class="more" href="#"><i class="fa fa-chevron-right"></i></a>');

  $('#rufio nav li:has(ul)').children('a.more').next('a').addClass('has-child');

  $('#rufio nav li:has(ul)').children('span').children('a').addClass('has-child');

  $('#rufio nav ul ul').prepend('<div class="menuControls"><a class="back pull-left" href="#"><i class="fa fa-chevron-left fa-2x"></i></a><a href="#" class="close pull-right"><i class="fa fa-times fa-2x"></i></a></div>');

  $('#sidebar #quicklinks').prepend('<div class="menuControls"><a href="#" class="close pull-right"><i class="fa fa-times fa-2x"></i></a></div>');

  $('#rufio nav > ul').prepend('<div class="menuControls"><a href="#" class="close pull-right"><i class="fa fa-times fa-2x"></i></a></div>');

  $('a.more').on('click', function(e) {
    e.preventDefault();
    $(this).next().next().toggleClass('off-left');
  });

  $('a.back').click(function(e) {
    e.preventDefault();
    $(this).parent().parent('ul').toggleClass('off-left');
  });

  $('a.close').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().addClass('off-left');
    $('#rufio nav, #rufio nav > ul, #sidebar #quicklinks').removeClass('active');
    $('#vcuIdentityWrapper, #rufio, #wrapper, #footer').removeClass('active-nav');
    $('#rufio nav ul').addClass('off-left');
  });

// For accessibility - tabbing though submenus 
  $('#rufio nav>ul>li>a').focus(function() {
    $('.multilevel-linkul-0').removeClass('active');
    $(this).next('ul').addClass('active');
  });
  $('.slides a, #breadcrumb-nav a').focus(function() {
    $('.multilevel-linkul-0').removeClass('active');
  });

});
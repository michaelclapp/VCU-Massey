$(document).ready(function() {

  $('.flexslider').flexslider({
    animation: "fade",
    slideshow: true,
    controlNav: false,
    maxItems: 1,
    itemMargin: 0
  });
  $('.overlay.flexslider').flexslider({
    slideshow: false,
  });


  $(".video").fitVids();
  
});
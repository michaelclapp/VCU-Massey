$(document).ready(function($) {
  $('.accordion').find('.accordion-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

  });
});

// Staff bio toggle 
  
$(document).ready(function() {

  $('.bio-link').click(function(e){
   e.preventDefault();

  $(this).closest('div').find('.bio').slideToggle("slow");
  });

  $('.staff .bio').each(function() {
    if ($(this).text().length > 20){
      $(this).parents('div.staff').find('.bio-link').show();
    }else{
      $(this).parents('div.staff').find('.bio-link').hide();
    }
  });

});

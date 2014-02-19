$(document).ready(function() {    
  
  $("#filterSearch").keyup(function(){

    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val();

    // Loop through the comment list
    $("#filterList .profile").each(function(){
        // If the list item does not contain the text phrase fade it out

        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).addClass('out').fadeOut(500);

        // Show the list item if the phrase matches and increase the count by 1
        } 
        else {
            $(this).removeClass('out').fadeIn(500);
        }
    });
    
  });           

});
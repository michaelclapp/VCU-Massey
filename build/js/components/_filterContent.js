$(document).ready(function() {

    var person = $("#filterList .profile");

    $("#filterSearch").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val();

        // Loop through the comment list
        $(person).each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).not('.out').text().search(new RegExp(filter, "i")) < 0) {
                $(this).addClass('out').fadeOut(500);
                // Show the list item if the phrase matches and increase the count by 1
            }
            else {
                $(this).removeClass('out').fadeIn(500);
            }
        });
    });

});

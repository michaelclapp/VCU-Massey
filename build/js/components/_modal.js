$(document).ready(function() {

    //uses inline script to set individual cookie (for T4) and checks if that cookie is in use

    $('.popup-close').click(function(e) {
        e.preventDefault();
        $('.overlay').removeClass('hello');

        //prevents video in modal to continue playing audio once modal has gone away
        var video = $('.modal iframe');
        var videoSRC = $(video).attr("src");
        $(video).attr("src","");
        $(video).attr("src",videoSRC);
    });
    $('.overlay:not(.overlay .wrapper)').click(function(e) {
        e.preventDefault();
        $('.overlay').removeClass('hello');

        //prevents video in modal to continue playing audio once modal has gone away
        var video = $('.modal iframe');
        var videoSRC = $(video).attr("src");
        $(video).attr("src","");
        $(video).attr("src",videoSRC);
    });
    $('.overlay .wrapper').click(function(e) {
        e.stopPropagation();
    });
});

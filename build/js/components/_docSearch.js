$(document).ready(function() {
    $("#officeSearch").on('change', function(){
        //alert('woah, HOLD UP');
        var selectedOffice = $(this).val();
        var person = $('#filterList .profile').not('.out');
        var allPersons = $('#filterList .profile');
        var allPersonsOffice = $('#filterList .profile').data('office');
        var allPersonsOut = $('#filterList .profile.out');

        if (this.value == 'all'){
            $(allPersons).removeClass('out').fadeIn(500);
        }
        else {
            var elems = $('.profile[data-office="' + this.value +'"]');
            $(allPersons).not(elems).addClass('out').fadeOut(500);
            elems.removeClass('out').fadeIn(500);
        }
    });
});

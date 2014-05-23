$(document).ready(function () {
    var onChange = function () {

        var selectedOffice = $('#officeSearch').val();
        var selectedSpecialty = $('#specialtySearch').val();
        var filter = "#filterList .profile";
        var allPersons = $(filter);
        if (selectedOffice != "all")
        {
            filter += '[data-office="' + selectedOffice + '"]'
        }
        if (selectedSpecialty != "all")
        {
            filter += '[data-specialty="' + selectedSpecialty + '"]'
        }
        var $matching = allPersons.filter(filter);
        $(allPersons).not($matching).removeClass('out').fadeOut(500);
        $matching.removeClass('out').fadeIn(500);
    }

    $("#officeSearch, #specialtySearch").on('change', onChange );
});

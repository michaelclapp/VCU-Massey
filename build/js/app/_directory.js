(function() {
    var App = angular.module('App', []);

    App.controller('directory', function() {
        this.person = persons;
    });
    
    var persons = {
        nameFirst: 'Sam',
        nameLast: 'Yerkes'
    }
})

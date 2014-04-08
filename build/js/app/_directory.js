var App = angular.module('App', []);

App.controller('directory', function($scope, $http) {
  $http.get('../data/directory.json')
       .then(function(res){
          $scope.persons = res.data;                
        });
   $scope.quantity = 20;
   $scope.order = 'nameLast';
});
'use strict';

angular.module('mip').controller('OeuvreListCtrl', ['$rootScope','$scope','OeuvreService','$state', function($rootScope,$scope,OeuvreService,$state){

  
  
  $scope.userIsAuthenticated(function(){

    if($scope.isAuthenticated == false) {
      $state.go('home');
    }
    
  });

  $scope.reload_data = function () {
    OeuvreService.getOeuvres().then(function(response) {
      $scope.oeuvres = response;
    });
  }

  $scope.reload_data();

  $scope.removeOeuvre = function(oeuvre) {
    OeuvreService.removeOeuvre(oeuvre).then(function(response) {
      $scope.reload_data();
    });
  }

}]);
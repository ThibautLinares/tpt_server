'use strict';

angular.module('mip').controller('OeuvreCtrl', function($rootScope,$scope,OeuvreService){

  $scope.reload_data = function () {
    OeuvreService.getOeuvres().then(function(response) {
      $scope.todos = response;
    });
  }

  $scope.reload_data();
  
  $scope.addOeuvre = function() {
    OeuvreService.addOeuvre($scope.oeuvre).then(function(response) {
      $scope.reload_data();
      $scope.oeuvre = {};
      $scope.oeuvreForm.$setPristine();
    });
  }

  $scope.removeOeuvre = function(oeuvre) {
    OeuvreService.removeOeuvre(oeuvre).then(function(response) {
      $scope.reload_data();
    });
  }

});
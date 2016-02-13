'use strict';

angular.module('mip').controller('OeuvreCtrl', function($rootScope,$scope,OeuvreService,$state,$stateParams){

  if($scope.isAuthenticated == false) {
    $state.go('home');
  }
  $scope.oeuvre = {};

  $scope.update = false;

  if($stateParams.id) {
    $scope.oeuvre.id = $stateParams.id;
    OeuvreService.getOeuvre($scope.oeuvre).then(function(response) {
      $scope.oeuvre = response;
      console.log($scope.oeuvre);
    });
    $scope.update = true;
  }

  $scope.addOeuvre = function() {
    OeuvreService.addOeuvre($scope.oeuvre).then(function(response) {
      $state.go('oeuvre');
    });
  }

  $scope.updateOeuvre = function() {
    OeuvreService.updateOeuvre($scope.oeuvre).then(function(response) {
      $state.go('oeuvre');
    });
  }


});
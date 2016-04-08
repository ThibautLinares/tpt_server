'use strict';

angular.module('mip').controller('UserCtrl',['$rootScope','$scope','UserService', function($rootScope,$scope,UserService){

  $scope.reload_data = function () {
    UserService.getTodos().then(function(response) {
      $scope.todos = response;
    });
  }

  $scope.reload_data();
  
  $scope.addTodo = function() {
    UserService.addTodo($scope.user).then(function(response) {
      $scope.reload_data();
      $scope.user = {};
      $scope.userForm.$setPristine();
    });
  }

  $scope.removeTodo = function(todo) {
    UserService.removeTodo(todo).then(function(response) {
      $scope.reload_data();
    });
  }

}]);
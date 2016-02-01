angular.module('mip').service('UserService', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/user/getTodos').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/user/addTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/user/removeTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
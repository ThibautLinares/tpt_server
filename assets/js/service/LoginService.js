angular.module('mip').service('LoginService', function($http, $q) {
  return {
    'process': function(user) {
      var defer = $q.defer();
      $http.post('/auth/process', user).success(function(resp){
        console.log(resp);
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'isAuthenticated': function() {
      var defer = $q.defer();
      $http.get('/auth/userIsAuthenticated').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'logout': function() {
      var defer = $q.defer();
      $http.get('/auth/logout').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
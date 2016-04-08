angular.module('mip').service('DiffuserService',['$http', '$q', function($http, $q) {
  return {
    'getDiffusers': function() {
      var defer = $q.defer();
      $http.get('/diffuser/getDiffusers').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getDiffuser': function(diffuser) {
      var defer = $q.defer();
      $http.get('/diffuser/getDiffuser/'+diffuser.id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addDiffuser': function(diffuser) {
      var defer = $q.defer();
      $http.post('/diffuser/addDiffuser', diffuser).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateDiffuser': function(diffuser) {
      var defer = $q.defer();
      $http.put('/diffuser/updateDiffuser', diffuser).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeDiffuser': function(diffuser) {
      var defer = $q.defer();
      $http.post('/diffuser/removeDiffuser', diffuser).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}}]);
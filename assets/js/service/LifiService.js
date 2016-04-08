angular.module('mip').service('LifiService',['$http', '$q', function($http, $q) {
  return {
    'getLifis': function() {
      var defer = $q.defer();
      $http.get('/lifi/getLifis').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getLifi': function(lifi) {
      var defer = $q.defer();
      $http.get('/lifi/getLifi/'+lifi.id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addLifi': function(lifi) {
      var defer = $q.defer();
      $http.post('/lifi/addLifi', lifi).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateLifi': function(lifi) {
      var defer = $q.defer();
      $http.put('/lifi/updateLifi', lifi).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeLifi': function(lifi) {
      var defer = $q.defer();
      $http.post('/lifi/removeLifi', lifi).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}}]);
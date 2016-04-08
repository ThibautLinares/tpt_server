angular.module('mip').service('OeuvreService',['$http', '$q', function($http, $q) {
  return {
    'getOeuvres': function() {
      var defer = $q.defer();
      $http.get('/oeuvre/getOeuvres').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getOeuvre': function(oeuvre) {
      var defer = $q.defer();
      $http.get('/oeuvre/getOeuvre/'+oeuvre.id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getOeuvreByLifi': function(oeuvre) {
      var defer = $q.defer();
      $http.get('/oeuvre/getOeuvreByLifi/'+oeuvre.lifi).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getOeuvreByDiffuser': function(oeuvre) {
      var defer = $q.defer();
      $http.get('/oeuvre/getOeuvreByDiffuser/'+oeuvre.diffuser).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addOeuvre': function(oeuvre) {
      var defer = $q.defer();
      $http.post('/oeuvre/addOeuvre', oeuvre, {
            transformRequest: angular.identity,
            headers: {'Content-Type': void 0}
        }).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateOeuvre': function(oeuvre) {
      var defer = $q.defer();
      $http.put('/oeuvre/updateOeuvre', oeuvre, {
            transformRequest: angular.identity,
            headers: {'Content-Type': void 0}
        }).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeOeuvre': function(oeuvre) {
      var defer = $q.defer();
      $http.post('/oeuvre/removeOeuvre', oeuvre).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}}]);
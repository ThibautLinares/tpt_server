angular.module('mip').service('OeuvreService', function($http, $q) {
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
    'addOeuvre': function(oeuvre) {
      var defer = $q.defer();
      $http.post('/oeuvre/addOeuvre', oeuvre).success(function(resp){
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
}});
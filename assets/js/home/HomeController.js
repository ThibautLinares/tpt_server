'use strict';

angular.module('mip').controller('HomeCtrl', ['$rootScope','$scope','LoginService','$state', function($rootScope,$scope,LoginService,$state){

  $scope.userIsAuthenticated(function(){
  	
  });

	$scope.process = function() {
		LoginService.process($scope.user).then(function(response) {
			$state.go('oeuvre', {}, { reload: true });
		});
	}
}]);

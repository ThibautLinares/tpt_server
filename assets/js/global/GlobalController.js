'use strict';

angular.module('mip').controller('GlobalCtrl', ['$rootScope','$scope','LoginService','$state','$q', function($rootScope,$scope,LoginService,$state,$q){

	
	$scope.isAuthenticated = false;

	$scope.userIsAuthenticated = function(callback) {
		LoginService.isAuthenticated().then(function(response) {
			if(response.message == "true") {
				$scope.isAuthenticated = true;
			}
			else if(response.message == "false") {
				$scope.isAuthenticated = false;
			}		
		return callback();
		});
	}

	var userConnected = 

	$scope.logout = function() {
		LoginService.logout().then(function(response) {
			$state.go('home', {}, { reload: true });
		});
	}

}]);
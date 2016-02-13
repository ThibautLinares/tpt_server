'use strict';

angular.module('mip').controller('GlobalCtrl', function($rootScope,$scope,LoginService,$state){

	
	$scope.isAuthenticated = false;

	var userIsAuthenticated = function() {
		return LoginService.isAuthenticated().then(function(response) {
			if(response.message == "true") {
				$scope.isAuthenticated = true;
			}
			else if(response.message == "false") {
				$scope.isAuthenticated = false;
			}
		});
	}

	userIsAuthenticated();

	$scope.logout = function() {
		LoginService.logout().then(function(response) {
			$state.go('home', {}, { reload: true });
		});
	}

});

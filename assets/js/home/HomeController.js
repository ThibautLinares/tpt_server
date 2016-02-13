'use strict';

angular.module('mip').controller('HomeCtrl', function($rootScope,$scope,LoginService,$state){

	$scope.process = function() {
		LoginService.process($scope.user).then(function(response) {
			$state.go('oeuvre', {}, { reload: true });
		});
	}
});

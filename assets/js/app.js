'use strict';

angular.module('mip',[
  'ngMessages',
  'ngResource',
  'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      controller: 'GlobalCtrl',
      templateUrl : '/templates/view.html'
    })
    .state('home', {
      parent: 'main',
      url: '/',
      controller: 'HomeCtrl',
      templateUrl : '/templates/home/view.html'
    })
    .state('oeuvre', {
      parent: 'main',
      url: '/oeuvres',
      controller: 'OeuvreListCtrl',
      templateUrl : '/templates/oeuvre/view.html'
    })
    .state('oeuvreForm', {
      parent: 'main',
      url: '/oeuvre/:id',
      controller: 'OeuvreCtrl',
      templateUrl : '/templates/oeuvre/form.html'
    })
    .state('user', {
      parent: 'main',
      url: '/user',
      controller: 'UserCtrl',
      templateUrl : '/templates/user/view.html'
    });
  $urlRouterProvider.otherwise('/');

}).run(function(){

});

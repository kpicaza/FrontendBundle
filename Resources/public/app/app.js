'use strict';

// Declare app level module which depends on views, and components
angular.module('frontendApp', [
  'ngRoute',
  'frontendApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

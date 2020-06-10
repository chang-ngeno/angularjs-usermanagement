'use strict';

angular.
  module('userApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/:userId', {
          template: '<user-detail></user-detail>'
        }).
        otherwise('/users');
    }
  ]);

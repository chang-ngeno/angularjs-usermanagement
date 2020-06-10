'use strict';

angular.
  module('core.user').
  factory('user', ['$resource',
    function($resource) {
      return $resource('users/:userId.json', {}, {
        query: {
          method: 'GET',
          params: {userId: 'users'},
          isArray: true
        }
      });
    }
  ]);

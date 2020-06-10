'use strict';

// Register `userList` component, along with its associated controller and template
angular.
  module('userList').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['user',
      function userListController(user) {
        this.users = user.query();
        this.orderProp = 'age';
      }
    ]
  });

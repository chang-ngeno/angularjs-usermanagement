'use strict';

// Register `userDetail` component, along with its associated controller and template
angular.
  module('userDetail').
  component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: ['$routeParams', 'user',
      function userDetailController($routeParams, user) {
        var self = this;
        self.user = user.get({userId: $routeParams.userId}, function(user) {
          self.setImage(user.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });

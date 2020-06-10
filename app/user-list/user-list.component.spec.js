'use strict';

describe('userList', function() {

  // Load the module that contains the `userList` component before each test
  beforeEach(module('userList'));

  // Test the controller
  describe('userListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/users.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('userList');
    }));

    it('should create a `users` property with 2 users fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.users).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.users).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});

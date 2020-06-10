'use strict';

describe('userDetail', function() {

  // Load the module that contains the `userDetail` component before each test
  beforeEach(module('userDetail'));

  // Test the controller
  describe('userDetailController', function() {
    var $httpBackend, ctrl;
    var xyzuserData = {
      name: 'user xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/xyz.json').respond(xyzuserData);

      $routeParams.userId = 'xyz';

      ctrl = $componentController('userDetail');
    }));

    it('should fetch the user details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.user).toEqual({});

      $httpBackend.flush();
      expect(ctrl.user).toEqual(xyzuserData);
    });

  });

});

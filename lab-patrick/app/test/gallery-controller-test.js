'use strict';

const angular = require('angular');
require('angular-mocks');

describe('gallery View inital state', function(){
  beforeEach(()=>{
    angular.mock.module('cfgram');
    angular.mockinject(($rootScope, $controller)=>{
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });
  afterEach(()=> this.$rootScope.apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

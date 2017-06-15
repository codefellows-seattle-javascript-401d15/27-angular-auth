'use strict'

const angular = require('angular')
require('angular-mocks')

describe('testing GalleryController', function(){
  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController')
      this.galleryCtrl.$onInit()
    })
  })

  it('should pass', () => {
    expect(this.galleryCtrl.title).toEqual('Welcome to Hell')
  })
})

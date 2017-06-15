'use strict'

const angular = require('angular')
require('angular-mocks')

describe('testing HomeController', function(){
  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController')
      this.homeCtrl.$onInit()
    })
  })

  it('should pass', () => {
    expect(this.homeCtrl.title).toEqual('Welcome to Hell')
  })
})

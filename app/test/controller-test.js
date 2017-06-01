const angular = require('angular');
require('angular-mocks');

describe('testing gallery controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      this.galleryCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('Should have text in the title', () => {
    expect(this.galleryCtrl.title).toBe.string;
  });
});

describe('testing signup controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      this.signupCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('Should have text in the title', () => {
    expect(this.signupCtrl.title).toBe.string;
  });
});

describe('testing home controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      this.homeCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('Should have text in the title', () => {
    expect(this.homeCtrl.title).toBe.string;
  });
});

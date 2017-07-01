'use strict';

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('GalleryController');
    this.title = 'Welcome to the gallery';
  };
}];

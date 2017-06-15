'use strict'

module.exports = [
  '$log',
  function($log) {
    $log.debug('GalleryController')
    this.$onInit = () => {
      this.title = 'Gallery'
    }
  }
]

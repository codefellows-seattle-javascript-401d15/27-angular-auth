'use strict';

require('./_home.scss');

module.exports = ['$log', function($log){
  $log.debug('HomeController');

  this.$onInit = () => {
    this.title = 'The Home Page, of Derf!!!';

    // this.update = function(input) {
    //   $log.debug('#updateHome');
    //   return this.say({text: input || 'Home', f: this.current});
    // };
  };
}];

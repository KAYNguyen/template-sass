/**
 * @name ProjectName
 * @description Define global variables and functions
 * @version 1.0
 */
var ProjectName = (function($, window, undefined) {
  var privateVar = 1;

  function privateMethod1() {

  }
  return {
    publicVar: 1,
    publicObj: {
      var1: 1,
      var2: 2
    },
    publicMethod1: privateMethod1
  };

})(jQuery, window);

jQuery(function() {
  ProjectName.publicMethod1();
});
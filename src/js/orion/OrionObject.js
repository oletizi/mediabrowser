/**
 * OrionObject--testing OO patterns in JavaScript
 */
'use strict';
/**
 * define the durned thing
 */
define(function () {
  /**
   * Yeehaw!
   * @constructor
   */
  function OrionObject() {
    this.name = "Orion";
    this.isTrue = function() { return true; };
  }

  return OrionObject;
});


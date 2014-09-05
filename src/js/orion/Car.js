/**
 * Created by orion on 9/5/14.
 */
'use strict';
define(['./OrionObject'], function(owner) {
  function Car (owner) {
    this.owner = owner;
  }
  return Car;
});

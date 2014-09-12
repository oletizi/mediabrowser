/**
 * FileSource implementation that takes a JSON representation of a filesystem tree
 *
 * Created by orion on 9/11/14.
 */
'use strict';
define(function () {

  function FileSourceJSON(parent) {

    this.parent = parent;

    this.getFilesAsList = function () {
      if (this.parent != null) {
        return "foo";
      }
    };
  }

  return FileSourceJSON;
});
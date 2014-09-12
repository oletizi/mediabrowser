/**
 * Created by orion on 9/11/14.
 */
'use strict';
//define(["../../../src/js/file/FileSource", "../../../src/js/file/FileSourceJSON"],
define(["src/js/file/FileSource", "src/js/file/FileSourceJSON"],
  function (FileSource, FileSourceJSON) {
    describe("a simple test suite.", function () {

      it("passes", function () {
        expect("true").toBe("true")
      });

      it("creates a FileSource object and ensures the interface functions are defined", function () {
        var fileSource = new FileSource();
        expect(fileSource).toBeDefined();
        expect(fileSource.getFilesAsList()).toBeNull();
      });

      it("creates a FileSourceJSON object and ensures that the input is decoded correctly", function () {
        var source = {};
        var fsj = new FileSourceJSON(source);
        expect(fsj.getFilesAsList()).toBe("foo");
        //console.log(fsj.getFilesAsList());
        //console.log(fsj.getFileAsList);
      });
    });
  });
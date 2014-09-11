'use strict';
define(["../../../src/js/orion/OrionObject", "../../../src/js/orion/Car"], function (OrionObject, Car) {
  describe("a simple test suite.", function () {


    it("test property inspection", function () {
      var myObject = new OrionObject();
      expect(myObject.name).toBe("Orion");
    });


    it("test a method call", function() {
      var myObject = new OrionObject();
      expect(myObject.isTrue()).toBe(true);
    });


    it ("test creating an object that depends on another object", function() {
      var orion = new OrionObject();
      var car = new Car(orion);
      expect(car.owner).toBe(orion);
    });

    it ("fails", function() {
      expect("true").toBe("false");
    });

  });
});

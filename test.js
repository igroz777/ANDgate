var chai = require('chai');
var assert = chai.assert;

var ANDGate = require('./lib/logic-gate.js');
console.log("running");


'use strict';
describe("ANDGate Class: Create an AND gate", function() {

  it("The AND logic gate should be a type of `object`, and an instance of the `ANDGate` class", function() {
    var gate1 = new ANDgate('AND gate 1');
    expect(typeof gate1).toEqual(typeof {});
    expect(gate1 instanceof ANDgate).toBeTruthy();
  });

  it("The AND logic gate should have its input pins set to undefined at initialization", function() {
    var gate1  = new ANDgate('AND gate 1');
    expect(gate1.pinA).toBe(undefined);
    expect(gate1.pinB).toBe(undefined);
  });

});

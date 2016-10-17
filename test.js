var chai = require('chai');
var expect = chai.expect;

var ANDgate = require('./lib/logic-gate.js');
console.log("running");


'use strict';
describe("ANDGate Class: Create an AND gate", function() {

  it("The AND logic gate should be a type of `object`, and an instance of the `ANDGate` class", function() {
    var gate1 = new ANDgate('AND gate 1');
    expect(typeof gate1).to.equal(typeof {});
    expect(gate1 instanceof ANDgate).to.be.true;
  });

  it("The AND logic gate should have its input pins set to undefined at initialization", function() {
    var gate1  = new ANDgate('AND gate 1');
    expect(gate1.pinA).to.equal(undefined);
    expect(gate1.pinB).to.equal(undefined);
  });

  it("The AND logic gate should have its pins properly defined", function() {
    var gate1  = new ANDgate('AND gate 1');
    gate1.setPinA(0);
    gate1.setPinB(0);

    expect(gate1.pinA).to.equal(0);
    expect(gate1.pinB).to.equal(0);
  });

  it("The AND logic gate should output 0 for inputs 0 and 1", function() {
    var gate1  = new ANDgate('AND gate 1');
    gate1.setPinA(1);
    gate1.setPinB(0);
    expect(gate1.getOutput()).to.equal(0);
    
  });
});

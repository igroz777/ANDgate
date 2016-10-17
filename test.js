var chai = require('chai');
var expect = chai.expect;

var collection = require('./lib/logic-gate.js');
console.log("running");


'use strict';
describe("Testing the ANDgate and ORgate classes for functionality ", function() {

  it("The AND logic gate should be a type of `object`, and an instance of the `ANDGate` class", function() {
    var gate1 = new collection.ANDgate('AND gate 1');
    expect(typeof gate1).to.equal(typeof {});
    expect(gate1 instanceof collection.ANDgate).to.be.true;
  });

  it("The AND logic gate should have its input pins set to undefined at initialization", function() {
    var gate1  = new collection.ANDgate('AND gate 1');
    expect(gate1.pinA).to.equal(undefined);
    expect(gate1.pinB).to.equal(undefined);
  });

  it("The AND logic gate should have its pins properly defined", function() {
    var gate1  = new collection.ANDgate('AND gate 1');
    gate1.setPinA(0);
    gate1.setPinB(0);

    expect(gate1.pinA).to.equal(0);
    expect(gate1.pinB).to.equal(0);
  });

  it("The AND logic gate should output 0 for inputs 0 and 1", function() {
    var gate1  = new collection.ANDgate('AND gate 1');
    gate1.setPinA(1);
    gate1.setPinB(0);
    expect(gate1.getOutput()).to.equal(0);
  });

  it("The OR logic gate should have its pins properly defined", function() {
    var gate1  = new collection.ORgate('OR gate 1');
    gate1.setPinA(1);
    gate1.setPinB(0);

    expect(gate1.pinA).to.equal(1);
    expect(gate1.pinB).to.equal(0);
  });

  it("The OR logic gate should output 1 for inputs 0 and 1", function() {
    var gate1  = new collection.ORgate('OR gate 1');
    gate1.setPinA(1);
    gate1.setPinB(0);
    expect(gate1.getOutput()).to.equal(1);
  });

  it("Two OR gates with input pairs [0, 1] and [1, 0] with their inputs connected to an AND gate. Expected output is 1", function() {
    var orGate1  = new collection.ORgate('OR gate 1');
    var orGate2  = new collection.ORgate('OR gate 2');
    var andGate = new collection.ANDgate('AND gate');

    orGate1.setPinA(0);
    orGate1.setPinB(1);

    orGate2.setPinA(1);
    orGate2.setPinB(0);

    andGate.setPinA(orGate1);
    andGate.setPinB(orGate2);

    expect(andGate.getOutput()).to.equal(1);
  });
});

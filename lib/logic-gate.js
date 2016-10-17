'use strict'

function BINARYgate() {
  this.pinA = undefined;
  this.pinB = undefined;
}

BINARYgate.prototype.setPinA = function(value){
  this.pinA = value;
}
BINARYgate.prototype.setPinB = function(value){
  this.pinB = value;
}
BINARYgate.prototype.connectPinA = function(someGate){
  this.pinA = someGate;
}
BINARYgate.prototype.connectPinB = function(someGate){
  this.pinB = someGate;
}
BINARYgate.prototype.disconnectPinA = function(someGate){
  this.pinA = undefined;
}
BINARYgate.prototype.disconnectPinB = function(someGate){
  this.pinB = undefined;
}






function ANDgate(name){
  BINARYgate.call(this);
  this.name = name;
}

ANDgate.prototype = Object.create(BINARYgate.prototype);
ANDgate.prototype.constructor = BINARYgate;

ANDgate.prototype.getOutput = function(){

  var result = undefined;
  var tempA = undefined;
  var tempB = undefined;
  var resetA = false;
  var resetB = false;

  if(typeof(this.pinA) != 'number'){
    tempA = this.pinA;
    this.pinA = this.pinA.getOutput();
    resetA = true;
  }
  if(typeof(this.pinB) != 'number'){
    tempB = this.pinB;
    this.pinA = this.pinA.getOutput();
    resetB = true;
  }

  if(this.pinA == 1 && this.pinB == 1){
    result = 1;
  }else{
    result = 0;
  }

  if(resetA){
      this.pinA = tempA;
  }
  if(resetB){
      this.pinB = tempB;
  }
  return result;
}


module.exports = ANDgate;
'use strict'

function BINARYgate() {
  this.pinA = undefined;
  this.pinB = undefined;
}

BINARYgate.prototype.setPinA = function(value){
  this.pinA = value;
}
BINARYgate.prototype.setPinB = function(value){
  this.pinA = value;
}

BINARYgate.prototype.connectPinA = function(someGate){
  this.pinA = someGate;
}
BINARYgate.prototype.connectPinA = function(someGate){
  this.pinA = someGate;
}
BINARYgate.prototype.disconnectPinA = function(someGate){
  this.pinA = undefined;
}
BINARYgate.prototype.disconnectPinA = function(someGate){
  this.pinA = undefined;
}



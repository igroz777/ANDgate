###Overview
This module exposes an object called `collection` that can be used to create an AND logic gate or an OR logic gate which can be combined together to compute the outcome of a logic gate circuit.
###Spec
- ANDgate creates a basic AND logic gate with unbounded inputs
- ORgate creates a basic AND logic gate with unbounded inputs
- Inputs can be set to either logical inputs(0 or 1) or to the output of another gate whose own inputs will e used for the input signal
- Connections can be unset using the disconnectPinX method

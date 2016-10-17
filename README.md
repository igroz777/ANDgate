###Overview
This module exposes a class, ANDgate, that can be used to compute logical operations of several and gates connected to each other 
###Spec
- ANDgate creates a basic gate with unbounded inputs
- Inputs can be set to either logical inputs(0 or 1) or to the output of another gate whose own inputs will e used for the input signal
- Connections can be unset using the disconnectPinX method

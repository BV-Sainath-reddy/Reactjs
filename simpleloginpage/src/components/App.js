import React from "react";
import Loginfields from "./Loginfields";

var loginstatus = false;

function Loginform() {
  return loginstatus === false ? (
    <Loginfields />
  ) : (
    <h1>You are already logged in</h1>
  );
}

export default Loginform;

//Ternary operation can be done

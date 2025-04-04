import React from "react";
import ReactDOM from "react-dom";
import Inputfields from "./inputfields";

function Loginfields() {
  return (
    <div className="container">
      <div className="formcontainer">
        <h1>Login</h1>
        <form>
          <Inputfields
            label="email"
            type="text"
            placeholder="Enter your email"
          />
          <Inputfields
            label="password"
            type="password"
            placeholder="Enter your email"
          />
          <button type="submit" id="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loginfields;

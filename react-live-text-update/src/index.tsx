import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import FormInput from "./FormInput";

function Myform() {
  const [message, setmessage] = useState("");
  function handlechangetext(event) {
    setmessage(event.target.value);
  }
  function Handlesubmit() {
    var clear = confirm(
      `You entered text is : "${message}". Do you want to clear it..?`
    );
    if (clear) {
      setmessage("");
    }
  }
  return (
    <div className="container">
      <div className="smallcontainer">
        <h1>Hey,{message}</h1>
        <FormInput updatetext={(event) => handlechangetext(event)} />
        <button type="button" onClick={Handlesubmit}>
          Submit Details
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<Myform />, document.getElementById("root"));

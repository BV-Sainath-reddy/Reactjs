import React from "react";

function FormInput({ updatetext }) {
  function handlechange(event) {
    updatetext(event);
  }
  return (
    <div className="input">
      <input type="text" id="name" onChange={handlechange} />
    </div>
  );
}

export default FormInput;

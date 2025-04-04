import React from "react";

function Inputfields(props) {
  return (
    <>
      <div className="field1">
        <label>
          <strong>{props.label}</strong>
          <input type={props.type} placeholder={props.placeholder} />
        </label>
      </div>
    </>
  );
}

export default Inputfields;

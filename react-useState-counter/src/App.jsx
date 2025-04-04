import React from "react";
import { useState } from "react";

function IncrementNo() {
  const [count, countinc] = useState(0);
  function increment() {
    countinc(count + 1);
  }
  console.log(count);
  return (
    <div className="container">
      <div className="mainpart">
        <h2>Count value</h2>
        <h1>{count}</h1>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}
export default IncrementNo;

//useState takes two parameters
//one is for storing current state or value
//other is for storing updated value or value

import React from "react";
import { useState } from "react";

function Clock() {
  const initial_time = new Date().toLocaleTimeString();
  const [time, uptime] = useState(initial_time);
  function update_time() {
    const current_time = new Date().toLocaleTimeString();
    uptime(current_time);
  }

  //for automatic change in time we can use setinterval
  //1000 is milliseconds and update_time is like a button
  setInterval(update_time, 1000);
  return (
    <div className="container">
      <div className="mainpart">
        <h2>Time</h2>
        <h1>{time}</h1>
        <button type="button" onClick={update_time}>
          Update
        </button>
      </div>
    </div>
  );
}
export default Clock;

//useState takes two parameters
//one is for storing current state or value
//other is for storing updated value or value

import React, { useState } from "react";
import minus from "../../../assets/icon-minus.svg";
import plus from "../../../assets/icon-plus.svg";


const Counter = (props) => {
 
  return (
    <div className="counter">
      <img src={minus} onClick={props.sub} style={{ cursor: "pointer" }} />
      <span>{props.number}</span>
      <img src={plus} onClick={props.add} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Counter;

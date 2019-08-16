import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  let data = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count : {data.count}</h3>
      <p>
        <button onClick={() => dispatch({ type: "INC", value: 1 })}>
          INCREMENT
        </button>

        <br />
        <br />

        <button onClick={() => dispatch({ type: "DEC", value: 1 })}>
          DECREMENT
        </button>
      </p>
    </div>
  ); //return ends here
};

export default Counter;

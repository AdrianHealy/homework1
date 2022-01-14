import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount((state) => {
      return state + 1;
    });
    setCount1((click) => {
      return click + 1;
    });
  }
  function decrement() {
    setCount((state) => {
      return state - 1;
    });
    setCount2((click1) => {
      return click1 + 1;
    });
  }

  return (
    <div>
      <h1> Счётчик {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Вы нажали + {count1} раз</p>
      <p>Вы нажали - {count2}</p>
    </div>
  );
};

export default Counter;

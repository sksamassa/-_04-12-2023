import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  return (
    <div className="Counter">
      <p className="App_counter">{count}</p>
      <button className="App__btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;

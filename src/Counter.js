import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Retrieve stored data and set it as initial state
  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem("count"));
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  // This ensures that the data is saved even if the user refreshes 
  // the page or closes and reopens the browser
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount(c => {
        if(c > 0){
            return c - 1;
        } else {
            return c;
        }
    })
  }

  return (
    <div className="Counter">
      <p className="App_counter">{count}</p>
      <button className="App__btn" onClick={handleIncrement}>
        +
      </button>

      <button 
      className="App__btn" 
      onClick={handleDecrement}
      disabled={count <= 0 ? true : false}>
        -
      </button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 2);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default State;

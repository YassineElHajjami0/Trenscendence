import { useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(1);

  const inc = () => {
    setCounter(counter+1)
  };
  return (
    <div>
      f3efgwgf
      <button
        style={{
          width: "50px",
          height: "50px",
        }}
        onClick={inc}
      >
        jjjjj
      </button>
      <h1>fewfwef {counter}</h1>
    </div>
  );
};

export { Test };

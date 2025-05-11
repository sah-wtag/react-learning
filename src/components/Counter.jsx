import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementClick() {
    setCount(count + 1);
  }
  function decremenClick() {
    setCount(count - 1);
  }
  return (
    <h1>
      <div>Count value is: {count} </div>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decremenClick}>Decrement</button>
    </h1>
  );
}

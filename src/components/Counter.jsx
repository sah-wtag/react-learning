import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function incrementClick() {
    setCount(count + incrementBy);
  }
  function decremenClick() {
    setCount(count - incrementBy);
  }

  function incrementByClick() {
    setIncrementBy(incrementBy + 1);
  }

  function decrementByClick() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decremenClick}>Decrement</button>
      <h1>We are Incrementing the value by: {incrementBy}</h1>
      <button onClick={incrementByClick}>Increase Increment</button>
      <button onClick={decrementByClick}>Decrease Increment</button>
    </div>
  );
}

import "./App.css";
import { useState } from "react";
export default function App() {
  let [count, setCount] = useState(0);
  const style = {
    height: "50px",
    width: "50px",
    border: "2px solid black",
  };
  return (
    <>
      <center>
        <h1>Counter App</h1>
        <h1>updated</h1>
        <div style={style}>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount((count = 0))}>reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </center>
    </>
  );
}

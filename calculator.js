//calculator
import { useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <div>
      <input onChange={e => setA(+e.target.value)} placeholder="A" />
      <input onChange={e => setB(+e.target.value)} placeholder="B" />

      <br/><br/>

      <button onClick={() => setRes(a + b)}>+</button>
      <button onClick={() => setRes(a - b)}>-</button>
      <button onClick={() => setRes(a * b)}>*</button>
      <button onClick={() => setRes(a / b)}>/</button>

      <h3>Result: {res}</h3>
    </div>
  );
}




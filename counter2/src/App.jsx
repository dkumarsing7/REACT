// ..
import { useState } from "react";
// ..
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>{count}</p>
        <button className="btn" onClick={()=> setCount(count-1)}>Decrement</button>
        <button className="btn" onClick={()=> setCount(0)}>Reset</button>
        <button className="btn" onClick={()=> setCount(count+1)}>Increment</button>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

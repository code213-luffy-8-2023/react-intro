import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Count is {counter}</h1>
      <div className="button-container">
        <button onClick={() => setCounter((oldValue) => oldValue - 1)}>
          Decrement
        </button>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;

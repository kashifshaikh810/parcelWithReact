import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [count, setCount] = useState(0);
  return <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>decreament</button>
  </div>;
};

ReactDOM.render(<App />, document.getElementById("root"));

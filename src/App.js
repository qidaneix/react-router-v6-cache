import "./App.css";
import { Freeze } from "react-freeze";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setState((state) => !state);
        }}
      >
        {String(state)}
      </button>
      <Freeze freeze={state}>
        <div>hello world</div>
        input: <input type="text" />
      </Freeze>
      <Freeze freeze={!state}>
        <div>foo bar</div>
        input: <input type="text" />
      </Freeze>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Expenses() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      受控：
      <input
        type="text"
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <p>text: {text}</p>
      <p>count: {count}</p>
    </main>
  );
}

import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Freeze } from "react-freeze";

export default function Expenses() {
  const [text, setText] = useState("");
  const quux = useOutletContext();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <h4>{quux}</h4>
      受控：
      <input
        type="text"
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
    </main>
  );
}

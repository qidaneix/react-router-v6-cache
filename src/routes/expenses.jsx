import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Freeze } from "react-freeze";

export default function Expenses() {
  const [text, setText] = useState("");
  const quux = useOutletContext();
  return (
    // <Freeze freeze={{ freeze: true, placeholder: <h2>foo</h2> }}>
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <h4>{quux}</h4>
      <input
        type="text"
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
    </main>
    // </Freeze>
  );
}

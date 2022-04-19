import { Link } from "react-router-dom";
import { CacheOutlet } from "./utils/CacheOutlet.tsx";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <nav style={{ border: "1px solid black", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link>&nbsp;&nbsp;
        <Link to="/expenses">Expenses</Link>&nbsp;&nbsp;
        <Link to="/bpp">BPP</Link>
      </nav>
      <CacheOutlet />
    </div>
  );
}

export default App;

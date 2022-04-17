import { Link } from "react-router-dom";
import { CacheOutlets } from "./utils/CacheOutlets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <nav style={{ border: "1px solid black", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link>&nbsp;&nbsp;
        <Link to="/expenses">Expenses</Link>
      </nav>
      <CacheOutlets context={"quux"} />
    </div>
  );
}

export default App;

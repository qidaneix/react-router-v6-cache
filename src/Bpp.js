import { Link } from "react-router-dom";

function Bpp() {
  return (
    <div className="App">
      <h1>Hello world Bpp</h1>
      <nav style={{ border: "1px solid black", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link>&nbsp;&nbsp;
        <Link to="/expenses">Expenses</Link>&nbsp;&nbsp;
        <Link to="/">APP</Link>
      </nav>
      <p>
        Bpp 非受控组件：
        <input type="text" />
      </p>
    </div>
  );
}

export default Bpp;

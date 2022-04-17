import { Link, useOutletContext } from "react-router-dom";
import { getInvoices } from "../data";
import { CacheOutlets } from "../utils/CacheOutlets";

export default function Invoices() {
  const invoices = getInvoices();
  const quux = useOutletContext();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <Link to="/invoices/123">Expenses 123</Link>&nbsp;&nbsp;
      <Link to="/invoices/foo">Expenses foo</Link>&nbsp;&nbsp;
      <Link to="/invoices/bar">Expenses bar</Link>
      <h4>{quux}</h4>
      非受控：
      <input type="text" />
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {invoices.map((invoice) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </Link>
          ))}
        </nav>
      </div>
      <CacheOutlets context="baz" />
    </main>
  );
}

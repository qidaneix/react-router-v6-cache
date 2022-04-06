import { Link, useOutletContext } from "react-router-dom";
import { getInvoices } from "../data";
import { CacheOutlet } from "../utils/CacheOutlet";

export default function Invoices() {
  const invoices = getInvoices();
  const quux = useOutletContext();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <h4>{quux}</h4>
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
      <CacheOutlet context="baz" />
    </main>
  );
}
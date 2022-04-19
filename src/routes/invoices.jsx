import { Link } from "react-router-dom";
import { getInvoices } from "../data/index";
import { CacheOutlet } from "../utils/CacheOutlet.tsx";

export default function Invoices() {
  const invoices = getInvoices();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      非受控：
      <input type="text" />
      <div style={{ display: "flex", borderTop: "solid 1px", marginTop: 10 }}>
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
        <CacheOutlet />
      </div>
    </main>
  );
}

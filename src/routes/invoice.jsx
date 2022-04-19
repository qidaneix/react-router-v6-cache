import { useParams } from "react-router-dom";

export default function Invoice() {
  const params = useParams();
  return (
    <div style={{ margin: "auto" }}>
      <h2>Invoice {params.id}</h2>
      子元素非受控：
      <input type="text" />
    </div>
  );
}

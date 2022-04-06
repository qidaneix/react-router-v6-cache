import { useParams, useOutletContext } from "react-router-dom";

export default function Invoice() {
  const params = useParams();
  const baz = useOutletContext();
  return (
    <>
      <h2>Invoice {params.id}</h2>
      <h5>{baz}</h5>
    </>
  );
}

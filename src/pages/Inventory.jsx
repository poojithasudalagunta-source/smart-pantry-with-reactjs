import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Inventory() {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(category)) || [];
    setItems(data);
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category} Items</h2>

      <Link to="/add">Add Item</Link>

      <hr />

      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <p><b>{item.name}</b></p>
            <p>Expiry: {item.expiry}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
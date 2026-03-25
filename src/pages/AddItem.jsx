import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [category, setCategory] = useState("Fruits");

  const navigate = useNavigate();

  const handleAdd = () => {
    const oldItems = JSON.parse(localStorage.getItem(category)) || [];

    const newItems = [...oldItems, { name, expiry }];

    localStorage.setItem(category, JSON.stringify(newItems));

    navigate(`/inventory/${category}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Item</h2>

      <input
        placeholder="Item Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        onChange={(e) => setExpiry(e.target.value)}
      />

      <br /><br />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Dairy</option>
        <option>Grains</option>
        <option>Others</option>
      </select>

      <br /><br />

      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
}
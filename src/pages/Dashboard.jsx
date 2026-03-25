import { Link } from "react-router-dom";

export default function Dashboard() {
  const categories = ["Fruits", "Vegetables", "Dairy", "Grains", "Others"];

  return (
    <div>
      <h2>Dashboard</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <Link to={`/inventory/${cat}`}>{cat}</Link>
        </div>
      ))}
    </div>
  );
}
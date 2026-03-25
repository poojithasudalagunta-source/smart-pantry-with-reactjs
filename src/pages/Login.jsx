import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/dashboard")}>
        Enter Pantry
      </button>
    </div>
  );
}
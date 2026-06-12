import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(""); // Clear error on edit
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email.trim() || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        // Retrieve existing users list from localStorage
        const existingUsers = JSON.parse(localStorage.getItem("portfolio_users") || "[]");

        // Find user by email and matching password
        const user = existingUsers.find(
          (u) => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password
        );

        if (!user) {
          setError("Invalid email or password.");
          setLoading(false);
          return;
        }

        // Set session active user
        const sessionUser = { id: user.id, username: user.username, email: user.email };
        localStorage.setItem("active_user", JSON.stringify(sessionUser));

        setLoading(false);
        navigate("/dashboard");
      } catch (err) {
        console.error("Login error", err);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }, 800); // Simulate network latency
  };

  return (
    <div className="auth-wrapper animate-slideup">
      <div className="glass-panel auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Log in to manage your AI portfolios</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label className="form-label">
              <FiMail style={{ verticalAlign: "middle", marginRight: "4px" }} /> Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FiLock style={{ verticalAlign: "middle", marginRight: "4px" }} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }} disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
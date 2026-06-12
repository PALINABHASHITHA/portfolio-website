import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiCheck } from "react-icons/fi";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Validation
    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        // Retrieve existing users database from localStorage
        const existingUsers = JSON.parse(localStorage.getItem("portfolio_users") || "[]");

        // Check if email already exists
        const userExists = existingUsers.some(user => user.email.toLowerCase() === email.toLowerCase());
        if (userExists) {
          setError("A user with this email already exists.");
          setLoading(false);
          return;
        }

        // Create new user object
        const newUser = {
          id: Date.now().toString(),
          username: username.trim(),
          email: email.toLowerCase().trim(),
          password: password // In real app, this would be salted & hashed
        };

        // Save to users array
        existingUsers.push(newUser);
        localStorage.setItem("portfolio_users", JSON.stringify(existingUsers));

        // Auto-login newly registered user
        const sessionUser = { id: newUser.id, username: newUser.username, email: newUser.email };
        localStorage.setItem("active_user", JSON.stringify(sessionUser));

        setLoading(false);
        navigate("/dashboard");
      } catch (err) {
        console.error("Registration error", err);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }, 800); // Simulate network latency
  };

  return (
    <div className="auth-wrapper animate-slideup">
      <div className="glass-panel auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Get started building your AI portfolio</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleRegister} className="auth-form">
          <div className="form-group">
            <label className="form-label">
              <FiUser style={{ verticalAlign: "middle", marginRight: "4px" }} /> Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="e.g. alexrivera"
              className="form-input"
              required
            />
          </div>

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

          <div className="form-group">
            <label className="form-label">
              <FiCheck style={{ verticalAlign: "middle", marginRight: "4px" }} /> Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }} disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
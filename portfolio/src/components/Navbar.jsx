import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiCpu, FiHome, FiGrid, FiEdit3, FiMessageSquare, FiLogIn, FiLogOut, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for logged in user in localStorage
    const storedUser = localStorage.getItem("active_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user data", e);
      }
    } else {
      setUser(null);
    }
  }, [location]); // Re-run auth check whenever the route changes

  const handleLogout = () => {
    localStorage.removeItem("active_user");
    setUser(null);
    navigate("/");
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <FiCpu className="navbar-logo-icon" />
          <span>AI Portfolio Builder</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar-menu ${isOpen ? "mobile-open" : ""}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}
            onClick={closeMenu}
            end
          >
            <FiHome /> Home
          </NavLink>
          
          {user && (
            <>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}
                onClick={closeMenu}
              >
                <FiGrid /> Dashboard
              </NavLink>
              <NavLink 
                to="/builder" 
                className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}
                onClick={closeMenu}
              >
                <FiEdit3 /> Builder
              </NavLink>
              <NavLink 
                to="/ai-assistant" 
                className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}
                onClick={closeMenu}
              >
                <FiMessageSquare /> AI Copilot
              </NavLink>
            </>
          )}

          <div className="navbar-auth">
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div className="navbar-user-badge">
                  <div className="navbar-user-avatar">
                    {(user.username || user.email || "U")[0].toUpperCase()}
                  </div>
                  <span style={{ fontSize: "0.85rem" }}>{user.username || user.email}</span>
                </div>
                <button onClick={() => { handleLogout(); closeMenu(); }} className="btn btn-danger" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                  <FiLogOut /> Log Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="navbar-link" onClick={closeMenu}>
                  <FiLogIn /> Log In
                </Link>
                <Link to="/register" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }} onClick={closeMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
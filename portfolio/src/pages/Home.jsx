import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayout, FiEye, FiShare2 } from "react-icons/fi";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const activeUser = localStorage.getItem("active_user");
    setIsLoggedIn(!!activeUser);
  }, []);

  const handleCtaClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="animate-slideup">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <FiCpu /> Powered by Generative AI
        </div>
        
        <h1 className="hero-title">
          Build a Stunning Developer Portfolio <br />
          <span className="hero-gradient-text">Assisted by AI Copilot</span>
        </h1>
        
        <p className="hero-subtitle">
          Create, edit, and publish a professional, responsive portfolio. 
          Use smart generative tools to write your bio, detail achievements, and choose gorgeous glassmorphic themes in seconds.
        </p>
        
        <div className="hero-actions">
          <button onClick={handleCtaClick} className="btn btn-primary btn-glow">
            {isLoggedIn ? "Go to Dashboard" : "Get Started Free"} <FiArrowRight />
          </button>
          {!isLoggedIn && (
            <Link to="/login" className="btn btn-secondary">
              Log In
            </Link>
          )}
        </div>

        {/* Hero Interactive Preview */}
        <div className="hero-preview-container">
          <div className="hero-preview-bar">
            <span className="hero-preview-dot red"></span>
            <span className="hero-preview-dot yellow"></span>
            <span className="hero-preview-dot green"></span>
            <span style={{ marginLeft: "10px", fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              https://ai-portfolio.dev/alex_dev
            </span>
          </div>
          
          <div className="hero-preview-window">
            {/* Visual Mock Portfolio Page */}
            <div style={{ padding: "40px", textAlign: "left", width: "100%" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "30px" }}>
                <div>
                  <h2 style={{ fontSize: "2rem", marginBottom: "4px" }}>Alex Rivera</h2>
                  <p style={{ color: "var(--primary)", fontWeight: "500", letterSpacing: "0.05em" }}>SENIOR FULL STACK ENGINEER</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>San Francisco, CA</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ fontSize: "0.75rem", padding: "6px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px" }}>React</span>
                  <span style={{ fontSize: "0.75rem", padding: "6px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px" }}>TypeScript</span>
                  <span style={{ fontSize: "0.75rem", padding: "6px 12px", background: "rgba(0, 242, 254, 0.1)", border: "1px solid rgba(0, 242, 254, 0.2)", borderRadius: "20px", color: "var(--primary)" }}>Node.js</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "16px" }}>About Me</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-main)", lineHeight: "1.6" }}>
                    Specializing in building high-performance, accessible web applications and distributed systems. Passionate about system engineering, animations, and training custom large language models.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "16px" }}>Featured Projects</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ padding: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                      <h4 style={{ fontSize: "0.95rem", color: "#ffffff", display: "flex", justifyContent: "space-between" }}>
                        <span>AetherCloud Platform</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--primary)", background: "rgba(0, 242, 254, 0.05)", padding: "2px 8px", borderRadius: "4px" }}>Active</span>
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        Orchestrates cloud deployments with 99.99% reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Designed for modern developers</h2>
        <p className="features-subtitle">
          Skip the hassle of designing from scratch. Create and publish in minutes.
        </p>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper">
              <FiCpu />
            </div>
            <div>
              <h3 className="feature-card-title">AI-Powered Copilot</h3>
              <p className="feature-card-text">
                Let our AI optimize your descriptions, write professional summaries, and format key achievements for maximum recruitment impact.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper">
              <FiLayout />
            </div>
            <div>
              <h3 className="feature-card-title">Premium Themes</h3>
              <p className="feature-card-text">
                Choose between multiple designer-crafted layouts: futuristic dark, minimalist creative light, or vibrant gradient glassmorphism.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper">
              <FiEye />
            </div>
            <div>
              <h3 className="feature-card-title">Real-time Previews</h3>
              <p className="feature-card-text">
                Edit details, projects, and skills on the fly. Watch your portfolio update instantly in a side-by-side interactive window.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel feature-card">
            <div className="feature-icon-wrapper">
              <FiShare2 />
            </div>
            <div>
              <h3 className="feature-card-title">Publish & Export</h3>
              <p className="feature-card-text">
                Publish a permanent portfolio link to share with recruiters, or export your full configuration data to host anywhere you like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
import MyPortfolio from "./pages/MyPortfolio";
import ResumeBuilder from "./pages/ResumeBuilder";
import SkillsManager from "./pages/SkillsManager";
import CertificatesManager from "./pages/CertificatesManager";
import ProjectsManager from "./pages/ProjectsManager";
import Settings from "./pages/Settings";import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PortfolioForm from "./pages/PortfolioForm";
import PortfolioPreview from "./pages/PortfolioPreview";
import AIAssistant from "./pages/AIAssistant";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Portfolio Preview is rendered completely standalone without the builder chrome */}
        <Route path="/preview/:id" element={<PortfolioPreview />} />
        <Route path="/preview" element={<PortfolioPreview />} />
        
        {/* All other routes render within the builder layout */}
        <Route
          path="/*"
          element={
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/builder" element={<PortfolioForm />} />
                  <Route path="/builder/:id" element={<PortfolioForm />} />
                  <Route path="/ai-assistant" element={<AIAssistant />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
// src/pages/Dashboard.jsx

export default function Dashboard() {
  return (
    <div>
      <h1>Portfolio Builder Dashboard</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Skills</h2>
          <p>12 Skills Added</p>
        </div>

        <div className="card">
          <h2>Projects</h2>
          <p>5 Projects Added</p>
        </div>

        <div className="card">
          <h2>Certificates</h2>
          <p>4 Certificates Added</p>
        </div>

        <div className="card">
          <h2>Portfolio Completion</h2>
          <p>85%</p>
        </div>
      </div>
    </div>
  );
}
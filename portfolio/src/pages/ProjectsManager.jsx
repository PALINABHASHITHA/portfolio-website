export default function ProjectsManager() {
  return (
    <div>
      <h1>Projects Manager</h1>

      <input
        type="text"
        placeholder="Project Name"
        style={{ display: "block", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Project Description"
        style={{ display: "block", marginBottom: "10px" }}
      />

      <button>Add Project</button>
    </div>
  );
}
import React, { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/projects`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="App">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            {project.title}: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

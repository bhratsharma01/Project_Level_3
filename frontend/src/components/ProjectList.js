import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data);
        }
        fetchProjects();
    }, []);

    return (
        <div className="container">
            <h1 className="my-5 text-center">Project List</h1>
            <div className="row">
                {projects.map((project) => (
                    <div key={project._id} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <p className="card-text">Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
                                <ul className="list-group list-group-flush">
                                    {project.tasks.map((task, index) => (
                                        <li key={index} className="list-group-item">{task.description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;

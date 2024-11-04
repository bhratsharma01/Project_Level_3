import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

function CreateProject({ apiBaseUrl }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tasks, setTasks] = useState([{ description: '', completed: false }]);

    const handleTaskChange = (index, key, value) => {
        const newTasks = [...tasks];
        newTasks[index][key] = value;
        setTasks(newTasks);
    };

    const handleSubmit = async () => {
        await axios.post(`${apiBaseUrl}/api/projects`, { title, description, deadline, tasks });
        alert('Project created successfully!');
    };

    return (
        <div className="container">
            <h1 className="my-5 text-center">Create a New Project</h1>
            <div className="card p-4">
                <div className="form-group">
                    <label>Project Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Project Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Deadline</label>
                    <input type="date" className="form-control" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                </div>
                {tasks.map((task, index) => (
                    <div key={index} className="form-group">
                        <label>Task Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={task.description}
                            onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                        />
                    </div>
                ))}
                <button className="btn btn-secondary" onClick={() => setTasks([...tasks, { description: '', completed: false }])}>Add Task</button>
                <button className="btn btn-primary float-right" onClick={handleSubmit}>Create Project</button>
            </div>
        </div>
    );
}

export default CreateProject;

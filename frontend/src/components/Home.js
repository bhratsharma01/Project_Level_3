import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
    return (
        <div className="container text-center">
            <h1 className="my-5">Welcome to Project Management Tool</h1>
            <Link to="/create-project" className="btn btn-primary mx-2">Create a Project</Link>
            <Link to="/projects" className="btn btn-secondary mx-2">View Projects</Link>
        </div>
    );
}

export default Home;

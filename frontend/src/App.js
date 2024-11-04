import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';

function App() {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home apiBaseUrl={apiBaseUrl} />} />
                    <Route path="/create-project" element={<CreateProject apiBaseUrl={apiBaseUrl} />} />
                    <Route path="/projects" element={<ProjectList apiBaseUrl={apiBaseUrl} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


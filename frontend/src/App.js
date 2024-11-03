import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-project" element={<CreateProject />} />
                    <Route path="/projects" element={<ProjectList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

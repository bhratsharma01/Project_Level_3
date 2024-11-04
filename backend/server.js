const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/projectManagement';
mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define a schema
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    deadline: Date,
    tasks: [{ description: String, completed: Boolean }]
});

const Project = mongoose.model('Project', projectSchema);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/projects', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.send(project);
});

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.send(projects);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Define the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

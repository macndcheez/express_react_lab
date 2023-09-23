const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

const projects = require('./projects.json');
const about = require('./about.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('ELLLOO');
});

app.get('/projects', (req, res) => {
    res.send(projects);
});

app.get('/about', (req, res) => {
    res.send(about);
});

app.listen(PORT, () => console.log('ya port is on', PORT))

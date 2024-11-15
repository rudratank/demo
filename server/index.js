// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Students.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API route to fetch students
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find(); // Fetch all students from DB
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

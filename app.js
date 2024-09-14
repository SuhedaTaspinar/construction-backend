const cors = require('cors');
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS Middleware
app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));

// Export the app for Vercel to handle as an API route
module.exports = app;
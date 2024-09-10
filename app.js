const cors = require('cors');
const express = require('express');
const app = express();
const connectDB = require('./config/db');

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS Middleware'i
app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use("/api/projects", require('./routes/projectRoutes'));
app.use("/api/contacts", require('./routes/contactRoutes'));
app.use("/api/services", require('./routes/serviceRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

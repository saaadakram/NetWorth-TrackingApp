const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const assetRoutes = require('./routes/assetRoute');
const liabilityRoutes = require('./routes/liabilityRoute');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/liabilities', liabilityRoutes)

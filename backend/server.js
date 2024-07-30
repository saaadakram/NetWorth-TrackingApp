const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const assetRoutes = require('./routes/assetRoute');
const liabilityRoutes = require('./routes/liabilityRoute');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the auth, asset, and liability routes
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/liabilities', liabilityRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

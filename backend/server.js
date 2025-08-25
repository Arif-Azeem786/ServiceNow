const express = require("express");
const cors = require('cors');
const path = require('path');
const Authrouter = require('./Routes/AuthRouter');
const AIrouter = require('./Routes/AIRouter');

require('dotenv').config();
require('./models/db');
require('./models/azureblobservice');

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration - allow all origins for testing
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle preflight requests
app.options('*', cors());

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ 
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}));

// Routes
app.use('/auth', Authrouter);
app.use('/ai', AIrouter);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'ServiceNow Backend API is running', 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

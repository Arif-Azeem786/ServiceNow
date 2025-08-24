const express = require("express");
const cors = require('cors');
const path = require('path');
const Authrouter = require('../Routes/AuthRouter');
const AIrouter = require('../Routes/AIRouter');

require('dotenv').config();
require('../models/db');
require('../models/azureblobservice');

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://service-now-blond.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Additional CORS middleware
app.use(cors({
  origin: 'https://service-now-blond.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Body parsing middleware with increased limits
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
  res.json({ message: 'ServiceNow Backend API is running', status: 'healthy' });
});

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = app;

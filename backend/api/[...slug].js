const express = require("express");
const cors = require('cors');
const path = require('path');
const Authrouter = require('../Routes/AuthRouter');
const AIrouter = require('../Routes/AIRouter');

require('dotenv').config();
require('../models/db');
require('../models/azureblobservice');

const app = express();

// CORS middleware - must be first
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://service-now-blond.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

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
  res.json({ message: 'ServiceNow Backend API is running', status: 'healthy' });
});

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = app;

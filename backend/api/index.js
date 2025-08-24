const express = require("express");
const cors = require('cors');
const path = require('path');
const Authrouter = require('../Routes/AuthRouter');
const AIrouter = require('../Routes/AIRouter');

require('dotenv').config();
require('../models/db');
require('../models/azureblobservice');

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://service-now-blond.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

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

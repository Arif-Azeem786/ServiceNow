// Simple test endpoint to verify CORS
const express = require("express");
const app = express();

// Simple CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'CORS test endpoint working', timestamp: new Date().toISOString() });
});

app.post('/test', (req, res) => {
  res.json({ message: 'POST request successful', data: req.body });
});

module.exports = app;

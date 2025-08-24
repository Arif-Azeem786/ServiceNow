const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require('path');
const Authrouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./models/db');
require('./models/azureblobservice');

const PORT = process.env.PORT || 3000; // Changed default port to 3000

// CORS configuration
const allowedOrigins = [
  'https://service-now-blond.vercel.app',
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Body parsing middleware with increased limits
app.use(express.json({ limit: '50mb' })); // For JSON requests
app.use(express.urlencoded({ 
  extended: true,
  limit: '50mb',
  parameterLimit: 100000 // Increase if you expect many URL parameters
}));

// Alternatively, if you're using body-parser explicitly:
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 }));

// Routes
app.use('/auth', Authrouter);

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Trying another port...`);
    // Try the next port
    const newPort = parseInt(PORT) + 1;
    server.listen(newPort);
  } else {
    console.error('Server error:', err);
  }
});
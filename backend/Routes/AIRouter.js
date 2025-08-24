const express = require('express');
const axios = require('axios');
const router = express.Router();

// AI Service URL - Update this when AI service is deployed
const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:5000';

// Proxy route for video analysis
router.post('/analyze-video', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/analyze-video/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
    
    // Forward the streaming response
    response.data.pipe(res);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

// Proxy route for fibroid detection
router.post('/fibroid-detection', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/fibroid-detection/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
    
    response.data.pipe(res);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

// Proxy route for PCOS detection
router.post('/pcos-detection', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/pcos-detection/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
    
    response.data.pipe(res);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

// Proxy route for generating findings
router.post('/generate-findings', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/generate-findings/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

// Proxy route for generating fibroid findings
router.post('/generate-findings1', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/generate-findings1/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

// Proxy route for generating PCOS findings
router.post('/generate-findings2', async (req, res) => {
  try {
    const response = await axios.post(`${AI_SERVICE_URL}/generate-findings2/`, req.body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('AI Service Error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'AI service unavailable',
      details: error.message 
    });
  }
});

module.exports = router;

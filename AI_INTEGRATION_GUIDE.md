# AI Service Integration Guide

## Current Status
✅ **Backend prepared for deployment**
✅ **AI proxy routes created**
✅ **CORS configured for deployed frontend**

## Architecture Overview

### Before Integration
```
Frontend (Vercel) → Backend (Node.js) → Database
                  ↘ AI Service (Flask) - SEPARATE
```

### After Integration
```
Frontend (Vercel) → Backend (Node.js) → AI Service (Flask)
                                    ↘ Database
```

## AI Service Deployment Options

### Option 1: Railway (Recommended for Python/Flask)
1. Create account at railway.app
2. Connect GitHub repository
3. Deploy AI folder with these settings:
   - **Root Directory**: `/Ai`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Port**: `5000`

### Option 2: Render
1. Create account at render.com
2. Deploy as Web Service
3. Settings:
   - **Root Directory**: `Ai`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`

### Option 3: Heroku
1. Install Heroku CLI
2. Create `Procfile` in AI folder: `web: python app.py`
3. Deploy: `heroku create your-ai-service && git push heroku main`

## Integration Steps

### Step 1: Deploy AI Service
Choose one of the options above and deploy your AI service.

### Step 2: Update Backend Configuration
After AI service deployment, update the `AI_SERVICE_URL` in your `.env`:
```
AI_SERVICE_URL=https://your-ai-service-url.com
```

### Step 3: Update Frontend API Calls
Change your frontend API calls from:
```javascript
// OLD - Direct AI service calls
fetch('http://localhost:5000/analyze-video/', ...)

// NEW - Through backend proxy
fetch('https://your-backend-url.vercel.app/ai/analyze-video', ...)
```

### Step 4: Test Integration
1. Deploy backend with updated AI_SERVICE_URL
2. Test all AI endpoints through backend proxy
3. Verify frontend can access AI features

## API Endpoints (After Integration)

### Available AI Routes (via Backend Proxy)
- `POST /ai/analyze-video` - Video analysis
- `POST /ai/fibroid-detection` - Fibroid detection
- `POST /ai/pcos-detection` - PCOS detection
- `POST /ai/generate-findings` - Generate findings
- `POST /ai/generate-findings1` - Generate fibroid findings
- `POST /ai/generate-findings2` - Generate PCOS findings

## Next Steps
1. **Deploy AI Service** using one of the recommended platforms
2. **Update AI_SERVICE_URL** in backend environment variables
3. **Deploy Backend** to Vercel with updated configuration
4. **Update Frontend** API calls to use backend proxy routes
5. **Test End-to-End** functionality

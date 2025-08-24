# Complete Deployment Guide - ServiceNow Medical AI Platform

## 🚀 Quick Start Deployment

### Step 1: Deploy Backend to Vercel

#### Option A: Vercel Web Interface (Recommended)
1. Go to [vercel.com](https://vercel.com) and login
2. Click "New Project" → Import Git Repository
3. Select your repository and set:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

#### Option B: Vercel CLI
```bash
cd backend
npx vercel
# Follow prompts, select backend folder
```

#### Environment Variables (Add in Vercel Dashboard)
```
MONGO_CONN=mongodb+srv://SETV_Disease_Detection_Pregnancy_Tracker:xPaFYn2Yowyuc0gk@setvdiseasedetectionpre.nktug.mongodb.net/?retryWrites=true&w=majority&appName=SETVDiseaseDetectionPregnancyTracker
JWT_SECRET=dJ$1F&7k@z!P3w#q^r9XmL8Y~VdGZ%T6JpBx*1C2E&hK@N
CLIENT_URL=https://service-now-blond.vercel.app
AZURE_STORAGE_SAS_TOKEN=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-10-31T23:16:28Z&st=2025-02-28T15:16:28Z&spr=https,http&sig=bV0uMHdfFDu2wkKTKkJtRIh4mrbSnSTHOWcllS20oSw%3D
AZURE_STORAGE_ACCOUNT_NAME=setvwaitest
AZURE_STORAGE_CONTAINER_DOCUMENTS=documents
AZURE_STORAGE_CONTAINER_VIDEOS=videos
AZURE_STORAGE_CONTAINER_IMAGES=images
AZURE_STORAGE_CONTAINER_REPORTS=reports
SITE_KEY=6LcYbOMqAAAAABnhImukf_SpFrE6w7e_y2vdACr3
SECRET_KEY=6LcYbOMqAAAAAFI5cSNAcOJEUTecflsROU06ngL9
AI_SERVICE_URL=https://your-ai-service-url.railway.app
```

### Step 2: Deploy AI Service to Railway (Recommended)

#### Railway Deployment
1. Go to [railway.app](https://railway.app) and login with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. **Important Settings**:
   - **Root Directory**: `Ai`
   - **Start Command**: `python app.py`
   - **Port**: `5000`
5. Railway will auto-detect Python and install requirements

#### Alternative: Render
1. Go to [render.com](https://render.com)
2. New → Web Service → Connect Repository
3. Settings:
   - **Root Directory**: `Ai`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`

### Step 3: Connect Services

#### Update Backend with AI Service URL
1. In Vercel dashboard, go to your backend project
2. Settings → Environment Variables
3. Update `AI_SERVICE_URL` to your Railway/Render URL:
   ```
   AI_SERVICE_URL=https://your-ai-service-url.railway.app
   ```
4. Redeploy backend

### Step 4: Update Frontend API Calls

Change your frontend to use backend proxy routes:

```javascript
// OLD - Direct AI calls
const response = await fetch('http://localhost:5000/analyze-video/', {
  method: 'POST',
  body: JSON.stringify({ frames }),
  headers: { 'Content-Type': 'application/json' }
});

// NEW - Through backend proxy
const response = await fetch('https://your-backend-url.vercel.app/ai/analyze-video', {
  method: 'POST',
  body: JSON.stringify({ frames }),
  headers: { 'Content-Type': 'application/json' }
});
```

## 🔗 API Endpoints After Deployment

### Backend Routes
- **Base URL**: `https://your-backend-url.vercel.app`
- **Auth**: `/auth/login`, `/auth/signup`
- **Reports**: `/auth/api/reports`, `/auth/api/submit-visit`
- **Files**: `/auth/upload`, `/auth/upload-frame`

### AI Routes (via Backend Proxy)
- **Video Analysis**: `/ai/analyze-video`
- **Fibroid Detection**: `/ai/fibroid-detection`
- **PCOS Detection**: `/ai/pcos-detection`
- **Generate Findings**: `/ai/generate-findings`
- **Generate Fibroid Findings**: `/ai/generate-findings1`
- **Generate PCOS Findings**: `/ai/generate-findings2`

## 🔧 Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure frontend URL is in backend CORS config
2. **AI Service Timeout**: Check Railway/Render logs
3. **Environment Variables**: Verify all vars are set in Vercel
4. **File Upload Issues**: Check Azure storage credentials

### Testing Deployment
```bash
# Test backend health
curl https://your-backend-url.vercel.app/auth/api/reports

# Test AI proxy
curl -X POST https://your-backend-url.vercel.app/ai/analyze-video \
  -H "Content-Type: application/json" \
  -d '{"frames": []}'
```

## 📋 Deployment Checklist

- [ ] Backend deployed to Vercel
- [ ] All environment variables added
- [ ] AI service deployed to Railway/Render
- [ ] AI_SERVICE_URL updated in backend
- [ ] Frontend API calls updated to use backend proxy
- [ ] End-to-end testing completed
- [ ] CORS configured for production URLs

## 🎯 Expected URLs After Deployment

- **Frontend**: `https://service-now-blond.vercel.app`
- **Backend**: `https://servicenow-backend-xxx.vercel.app`
- **AI Service**: `https://your-ai-service-xxx.railway.app`

Your medical AI platform will be fully deployed and integrated!

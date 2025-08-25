# Deploy Backend to Railway - CORS Solution

## Why Railway?
Vercel's serverless functions are causing persistent CORS issues. Railway provides traditional server hosting which handles CORS more reliably.

## Deployment Steps

### 1. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. **Important Settings**:
   - **Root Directory**: `backend`
   - **Start Command**: `npm start` (will use server.js)
   - **Port**: 8080

### 2. Environment Variables
Add these in Railway dashboard:
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
AI_SERVICE_URL=http://localhost:5000
```

### 3. After Deployment
1. Get your Railway URL (e.g., `https://your-app.railway.app`)
2. Update frontend API calls to use new Railway URL
3. Test login/signup functionality

## Files Created for Railway
- `server.js` - Traditional Express server (not serverless)
- `railway.toml` - Railway configuration
- Updated `package.json` - Points to server.js

This should resolve the CORS issues completely.

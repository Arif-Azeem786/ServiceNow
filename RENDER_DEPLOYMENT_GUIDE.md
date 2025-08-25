# Deploy Backend to Render - CORS Solution

## Render Deployment Steps

### 1. Deploy to Render
1. Go to [render.com](https://render.com)
2. Login/Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. **Important Settings**:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node

### 2. Environment Variables
Add these in Render dashboard (Settings → Environment):
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
1. Get your Render URL (e.g., `https://servicenow-backend.onrender.com`)
2. Update frontend API calls to use new Render URL
3. Test login/signup functionality

## Files Ready for Render
- `server.js` - Traditional Express server
- `render.yaml` - Render configuration
- Updated `package.json` - Points to server.js

## Why Render?
- Traditional server hosting (not serverless)
- Better CORS handling than Vercel functions
- Free tier available
- Easy GitHub integration

This should resolve the persistent CORS issues.
